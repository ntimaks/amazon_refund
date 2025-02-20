import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ConfirmationPage() {
    return (
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Application Submitted!</CardTitle>
                    <CardDescription className="text-center">
                        Thank you for your interest in our Amazon Refund Service.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        We have received your application and will review it shortly. Our team will be in touch with you soon to
                        discuss the next steps.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/">
                        <Button>Return to Home</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}