import PaymentStatus from "@/components/PaymentStatus";
import { getPayloadClient } from "@/get-payload";
import { getServerSideUser } from "@/lib/payload-utils";
import { formatPrice } from "@/lib/utils";
import { Cause, User } from "@/payload-types";
import { cookies } from "next/headers";
import Image from "next/image"
import Link from "next/link";
import { notFound, redirect } from "next/navigation";


interface PageProps {
    searchParams: {[key: string]: string | string[] | undefined}
}

const Page = async ({searchParams}: PageProps) => {
    const donationId = searchParams.donationId

    const nextCookies = cookies()
    const { user } = await getServerSideUser(nextCookies)

    const payload = await getPayloadClient()
    const {docs: donations} = await payload.find({
        collection: 'donations',
        where: {
            id: {
                equals: donationId
            }
        }
    })
    const [donation] = donations
    if(!donation) return notFound()
    
    const donationUserId = typeof donation.user === 'string' ? donation.user  : donation.user.id
    
    if(user?.id !== donationUserId) return redirect(`/sign-in?origin=thank-you?donationId=${donation.id}`)
    
    const cause = (donation.causes) as Cause
    const {image} = cause.images[0]
    

    return <main className="relative lg:min-h-full">
        <div className="h-full px-4 hidden lg:block overflow-hidden  lg:absolute lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          fill
          src="/care-package.jpg"
          alt="Thanks you for your donation"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
        <div className="lg:col-start-2">
          <p className="text-sm font-medium text-red-600">Order successful</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Thanks for your donation
          </h1>
          {donation._isPaid ? (
            <p className="mt-2 text-base text-muted-foreground">
              Your donation was processed successfully and your graciously recieved. We&apos;ve sent your reciept 
              and all details to{" "}
              {typeof donation.user !== "string" ? (
                  <span className="font-medium text-gray-900">
                  {donation.user.email}
                </span>
              ) : null}
            </p>
          ) : (
              <p className="mt-2 text-base text-muted-foreground">
              We appreciate your donation, and we&apos;re currently working on it.
              So just chill and we&apos;ll send a confirmation mail soon.😘
            </p>
          )}

          <div className="mt-16 text-sm font-medium">
            <div className="text-muted-foreground">Transaction nr.</div>
            <div className="mt-2 text-gray-900">{donation.id}</div>
          </div>

          <div className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-muted-foreground">
                <div className="flex space-x-5 py-6">
                  <div className="relative h-24 min-w-24">
                    {/* add image.url back */}
                    {typeof image !== "string" && '!image.url' ? (
                        <Image
                        src='/flat-lay-paper-hand-holding-heart-with-copy-space.jpeg'
                        alt={`${cause.title} image`}
                        fill
                        className="flex-none rounded-md bg-gray-100 object-cover object-center"
                        />
                    ) : null}
                  </div>
                  <div className="flex-auto flex flex-col">
                    <div className="space-y-1">
                      <h3 className="text-gray-900 text-lg"> {cause.title}</h3>
                    </div>
                    <p>We are deeply grateful for your generous donation of {formatPrice(donation.amount)} - it will make a real difference!</p>
                  </div>

                 
                  <div className="flex-none  font-medium text-gray-900">
                    {formatPrice(donation.amount)}
                  </div>
                  </div>

          </div>
          
          {/* Payment status */}
          <PaymentStatus
            isPaid={donation._isPaid}
            donationId={donation.id}
            donationEmail={(donation.user as User).email}
        />
          <div className="m-8 border-t border-gray-200 text-right">
            <Link
              href="/causes"
              className="text-sm font-medium text-red-600 hover:text-red-500"
              >
              Want to make another donation? &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
    </main>     
}
export default Page