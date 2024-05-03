'use client'
import { trpc } from "@/trpc/client"
import { Check, Loader2, Shield } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import React, { useState } from "react"
import { ZodError, z } from "zod"
import { toast } from "sonner"


interface MakeDonationProps {
    causeId: string
}

const MakeDonation = ({causeId}: MakeDonationProps) => {
    const [amount, setAmount] = useState<number | undefined>(undefined)
    const [error, setError] = useState<string | undefined>()
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const inputValue = e.target.value.trim(); // Remove leading/trailing spaces
            if (!inputValue) {
                setAmount(0);
                setError(undefined);
                return;
            }
        
            const parsedValue = parseFloat(inputValue);
            if (isNaN(parsedValue)) {
                setError('Only valid numbers are allowed.');
            } else {
                setAmount(parsedValue);
                setError(undefined);
            }
        } catch (error) {
            setError('Only valid number is allowed.')
            return
            
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
          const parsedAmount = z.number().min(100).parse(amount)
            createPaymentSession({unitAmountDonated: parsedAmount, causeId})
        } catch (error) {
            if(error instanceof ZodError) {
                const errMessage = error.errors.map((error) => error.message).join('\n')
                setError(errMessage)
                return;
            }
        }
    }
     
    const router = useRouter()
    const {mutate: createPaymentSession, isLoading} = trpc.payment.createSession.useMutation({
        onSuccess: ({url}) => {
            if(url) router.push(url)
        },
        onError: (error) => {
            toast.error(error.message)
        }
   
    })

    return (<div className="flex flex-col">
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
    <Label>Enter amount to donate:</Label>
    <Input placeholder="₦100.00" value={amount} onChange={handleInputChange}/>
    {error ?? <span className="text-xs text-red-500">{error}</span>}
    <Button disabled={isLoading || !!error} className="flex items-center w-full" >
        Donate{' '} 
            {isLoading && <Loader2 className="h-5 w-5 animate-spin" />} 
            </Button>
    </form>
      
        <div className="flex items-center justify-between px-10 pt-4">
                <div className='flex items-center'>
                    <Check
                        aria-hidden='true'
                        className='h-5 w-5 flex-shrink-0 text-green-500'
                        />
                    <p className='ml-2 text-sm text-muted-foreground'>
                    Naira is accepted
                </p>
            </div>
            <div className='group inline-flex text-sm text-medium'>
              <Shield
                   aria-hidden='true'
                   className='mr-2 h-5 w-5 flex-shrink-0 text-gray-400'
                />
                <span className='text-muted-foreground hover:text-gray-700'>
                    Secure Payments
                </span>
            </div>
        </div>
    </div>)
}
export default MakeDonation