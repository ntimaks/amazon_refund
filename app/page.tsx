import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, RefreshCcw, DollarSign } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Maximize Your Amazon Refunds
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We specialize in helping businesses recover lost revenue through expert Amazon refund management.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/apply">
                <Button className="h-11 px-8">Get Started</Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" className="h-11 px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CheckCircle className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our team of experts thoroughly analyzes your Amazon account to identify all potential refund
                  opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <RefreshCcw className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Automated Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We use advanced automation to streamline the refund process, ensuring quick and efficient results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Maximized Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our strategies are designed to maximize your refund potential, recovering revenue you might have
                  otherwise lost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Process</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Submit Details", description: "Provide your business and Amazon account information." },
              { title: "Account Review", description: "Our experts analyze your account for refund opportunities." },
              {
                title: "Refund Processing",
                description: "We handle all communication with Amazon to process refunds.",
              },
              { title: "Regular Updates", description: "Receive consistent updates on the status of your refunds." },
            ].map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Maximize Your Refunds?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                Join thousands of businesses that have recovered millions in lost revenue.
              </p>
            </div>
            <Link href="/apply">
              <Button className="h-11 px-8" variant="secondary">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

