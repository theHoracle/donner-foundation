'use client'

import { trpc } from "@/trpc/client"
import { Check, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface PaymentStatusProps {
    isPaid: boolean
    donationId: string
    donationEmail: string
}
const PaymentStatus = ({isPaid, donationEmail, donationId}: PaymentStatusProps) => {
    const router = useRouter()

    const {data} = trpc.payment.pollDonationStatus.useQuery({donationId}, {
        enabled: isPaid === false,
        refetchInterval: (data) => data?.isPaid ? false : 1000, 
    })

    useEffect(() => {
        if(data?.isPaid) router.refresh()
    }, [data?.isPaid, router])
    return <div className="">
       {!isPaid && <Loader2 className="animate-spin ml-auto h-5 w-5" />}
       {isPaid && <Check className="h-5 ml-auto w-5"/>}
    </div>
}

export default PaymentStatus