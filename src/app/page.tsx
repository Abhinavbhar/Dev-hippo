import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowDownToLine, CheckCircle, Ghost, Leaf } from "lucide-react"
import Link from "next/link"
const perks = [{
  name: "Instant Delivery",
  Icon: ArrowDownToLine,
  description: "get your assets delivered to your e-mail in seconds"

},
{
  name: "Guranteed quality",
  Icon: CheckCircle,
  description: "every asset is verified by our team to maintain quality"

},
{
  name: "for the pllanet",
  Icon: Leaf,
  description: "we have pledged 1% of sales to enviroment"

}]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center fllex flex-col item center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">your market place for high quality{
            ' '}
            <span className="text-blue-600"> digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">welcome to devhippo. Every asset on your platform is verified by our team to ensure our highest quality standard</p>
          <div className="flex flex-row sm:flex-row gap-4 mt-6">
            <Link href='/products' className={buttonVariants()}> browse trendings</Link>
            <Button variant='ghost'>
              our quality promise &rarr;
            </Button>
          </div>

        </div>
        {/*product list will go here */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-col-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-col-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perks) => (
              <div key={perks.name} className="text-center md:flex md:item-start md:text-left lg:blok lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perks.Icon className="w-1/3 h-1/3"></perks.Icon>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:mk-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perks.name}

                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perks.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
