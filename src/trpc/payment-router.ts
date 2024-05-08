import { z } from "zod";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { getPayloadClient } from "../get-payload";
import { paystack } from "../lib/paystack";

export const paymentRouter = router({
    createSession: privateProcedure.input(z.object({
        causeId: z.string(), unitAmountDonated: z.number().nonnegative()
    })).mutation(async ({ctx, input}) => {
        const {causeId,  unitAmountDonated} = input
        const {user} = ctx

        const amountDonated = unitAmountDonated * 100
        if(!causeId) {
            throw new TRPCError({code: 'BAD_REQUEST'})
        }

        const payload = await getPayloadClient()

        const {docs: causes} = await payload.find({
            collection: 'causes',
            where: {
                id: {
                    equals: causeId
                }
            }
        })

        const [cause] = causes
        if(!cause) {
            throw new TRPCError({code: 'NOT_FOUND'})
        }

        const donation  = await payload.create({
            collection: 'donations',
            data: {
                _isPaid: false,
                causes: cause.id,
                user: user.id,
                amount: unitAmountDonated
            }
        })

        try {
            const paystackSession = await paystack.transaction.initialize({
                amount: amountDonated,
                currency: 'NGN',
                email: user.email,
                name: user.email,
                reference: donation.id,
                callback_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?donationId=${donation.id}`,
                metadata: {
                    userId: user.id,
                    donationId: donation.id
                }
            })
            console.log(paystackSession.data)
            console.log(paystackSession.message)
            return {url: paystackSession.data.authorization_url}
        } catch (error) {
            console.log(error)
            return {url: null}
        }
    }),
    pollDonationStatus: publicProcedure.input(z.object({
        donationId: z.string()
    })).query( async ({input}) => {
        const {donationId} = input

        const payload = await getPayloadClient()
        const {docs: donations} = await payload.find({
            collection: 'donations',
            where: {
                id: {
                    equals: donationId
                }
            }
        })

        if(donations.length === 0) {
            throw new TRPCError({code: 'NOT_FOUND'})
        }
        const [donation] = donations
        return {isPaid: donation._isPaid}
    })

})