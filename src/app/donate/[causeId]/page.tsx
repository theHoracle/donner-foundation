import CauseReel from "@/components/CauseReel"
import ImageSlider from "@/components/ImageSlider"
import MakeDonation from "@/components/MakeDonation"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ProgressBar from "@/components/ProgressBar"
import { Button } from "@/components/ui/button"
import { getPayloadClient } from "@/get-payload"
import { Check, Shield } from "lucide-react"
import { notFound } from "next/navigation"

interface PageProps {
    params: {
        causeId: string
    }
}
const Page = async ({params}: PageProps) => {
	const {causeId } =params
    const payload = await getPayloadClient()

    const {docs: causes} = await payload.find({
        collection: 'causes',
        limit: 1,
        where: {
            id: {
                equals: causeId
            }, 
            approved: {
                equals: 'approved'
            }
        },
    })
    const [cause] = causes
    if(!cause) return notFound()


    const validUrls = cause.images?.map(({image}) => (typeof image === 'string' ? image : image.url)).filter(Boolean) as string[]
    

    return  <MaxWidthWrapper className='bg-white'>
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
           

            {/* Product Details */}
            <div className='lg:max-w-lg lg:self-end '>
                <div className='mt-4'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        {cause.title}
                    </h1>
                </div>

                <section className='mt-4'>
                    {/*  */}

                    <div className='mt-4 space-y-6'>
                        <p className='text-base text-muted-foreground'>
                        {cause.description}
                        </p>
                    </div>

                </section>
            </div>

             {/* Product images */}
             <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
                <div className='aspect-square rounded-lg'>
                    <ImageSlider urls={validUrls} />
                </div>
            </div>

            <div className='lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
                <div>
                    <div className='my-6 flex flex-col gap-2 text-muted-foreground text-sm'>
                        <p>Help us get to our goal ❤️</p>
                        <ProgressBar target={cause.target} raisedAmount={cause.raisedAmount} />
                    </div>
                    <div className='bg-gray-100 px-6 py-4 rounded-lg'>
                       <MakeDonation causeId={cause.id} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <CauseReel />
</MaxWidthWrapper>

}
export default Page