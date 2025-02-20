import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-blue-800">Amazon Refund Specialists</h1>
        <p className="mt-2 text-xl text-blue-600">Maximizing Your Business Refunds</p>
      </header>

      <main className="container mx-auto mt-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Expert knowledge of Amazon's refund policies</li>
            <li>Dedicated team to handle your refund cases</li>
            <li>Maximize your refund potential</li>
            <li>Save time and resources for your business</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Submit your business details</li>
            <li>We review your Amazon account</li>
            <li>Identify potential refund opportunities</li>
            <li>Process refund requests on your behalf</li>
            <li>Regular updates on refund status</li>
          </ol>
        </section>

        <Link href="/apply">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply Now</Button>
        </Link>
      </main>

      <footer className="container mx-auto mt-12 py-4 text-center text-gray-600">
        © 2025 Amazon Refund Specialists. All rights reserved.
      </footer>
    </div>
  );
}
