import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/NavBar" // Changed to named import
import Footer from "@/components/Footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Amazon Refund Specialists",
  description: "Maximizing Your Business Refunds",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Navbar />
          {children}
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  )
}

