import ApplicationForm from "@/components/ApplicationForm"

export default function ApplyPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Apply for Amazon Refund Service</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                    Fill out the form below to get started with our Amazon Refund Service. We'll review your application and get
                    back to you shortly.
                </p>
                <ApplicationForm />
            </div>
        </div>
    )
}

