import { createHmac } from "crypto"
import { WebHookRequest } from "./server"
import express from "express"
import { getPayloadClient } from "./get-payload"
import { error } from "console"


const SECRET = process.env.PAYSTACK_SECRET_KEY || ''
export const paystackWebhookHandler = async (
    res: express.Response,
    req: express.Request
) => {
    const body = req.body
    const hash = createHmac('sha512', SECRET).update(JSON.stringify(body)).digest('hex')
    const signature = body.headers['x-paystack-signature'] || ''
    if(hash == signature) {
        const event = body
        const session = event.data
    if(!session.metadata.userId || !session.metadata.donationId) {
        return res.status(400).send('Webhook Error: No information present in Metadata')
    }
    if(event.event == 'charge.success') {
        const payload = await getPayloadClient()

        const {docs: users} = await payload.find({
            collection: 'users',
            where: {
                id: {
                    equals: session.metadata.userId
                }
            }
        })
        const [user] = users
        if (!user) {
            return res.status(400).json({ error: "NO SUCH USER EXIST!" });
          }

        const {docs: donations} = await payload.find({
            collection: 'donations',
            where: {
                id: {
                    equals: session.metadata.donationId
                }
            }
        })
        const [donation] = donations
        if(!donation) {
            return res.status(400).json({error: 'NO SUCH DONATION WAS INITIATED'})
        }
        
        // Get cause id
        const causeId = typeof donation.causes === 'string' ? donation.causes : donation.causes.id
        // find the cause to get the current raisedAmount
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
            return res.status(400).json({error: 'THIS DONATION DOES NOT EXIST ANYMORE'})
        } 

        // Update donation info to verify payment on server
        await payload.update({
            collection: 'donations',
            where: {
                id: {
                    equals: donation.id
                }
            },
            data: {
                _isPaid: true
            }
        })

        // update cause recieved amount to display to users
        await payload.update({
            collection: 'causes', 
            where: {
                id: {
                    equals: cause
                }
            },
            data: {
                raisedAmount: cause.raisedAmount + donation.amount
            }
        })   
    }
}
return res.status(200).send()
}
