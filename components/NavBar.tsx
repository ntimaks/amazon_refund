import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold text-xl">ARS</span>
                </Link>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Home
                        </Link>
                        <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Features
                        </Link>
                        <Link href="#process" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Process
                        </Link>
                        <Link href="#faq" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            FAQ
                        </Link>
                    </nav>
                    <Link href="/apply">
                        <Button>Apply Now</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

