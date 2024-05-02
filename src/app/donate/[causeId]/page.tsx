import CauseReel from "@/components/CauseReel"
import ImageSlider from "@/components/ImageSlider"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
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


    const validUrls = cause.images?.map(({images}) => (typeof images === 'string' ? images : images.url)).filter(Boolean) as string[]
    

    return  <MaxWidthWrapper className='bg-white'>
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            {/* Product images */}
            <div className='mt-10 lg:col-start-1 lg:row-span-2 lg:mt-0 lg:self-center'>
                <div className='aspect-square rounded-lg'>
                    <ImageSlider urls={validUrls} />
                </div>
            </div>

            {/* Product Details */}
            <div className='lg:max-w-lg lg:self-end'>
                <div className='mt-4'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        {cause.title}
                    </h1>
                </div>

                <section className='mt-4'>
                    <div className='flex items-center'>
                        <p className='font-medium text-gray-900'>
                            {/* {formatPrice(product.price)} */}price
                        </p>
                    </div>

                    <div className='mt-4 space-y-6'>
                        <p className='text-base text-muted-foreground'>
                            {/* {product.description} */}Description
                        </p>
                    </div>

                    <div className='mt-6 flex items-center'>
                        <Check
                            aria-hidden='true'
                            className='h-5 w-5 flex-shrink-0 text-green-500'
                        />
                        <p className='ml-2 text-sm text-muted-foreground'>
                            Naira Payment
                        </p>
                    </div>
                </section>
            </div>

            {/* Add to cart part */}
            <div className='mt-10 lg:col-start-2 lg:row-start-2 lg:max-w-lg lg:self-start'>
                <div>
                    <div className='mt-10'>
                        {/* <AddToCartButton product={product} /> */}
                    </div>
                    <div className='mt-6 text-center'>
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
                </div>
            </div>
        </div>
    </div>

    <CauseReel />
</MaxWidthWrapper>

}
export default Page