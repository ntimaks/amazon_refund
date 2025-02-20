import { Book, Menu, DollarSign, RefreshCcw, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { JSX } from "react"

interface MenuItem {
    title: string
    url: string
    description?: string
    icon?: JSX.Element
    items?: MenuItem[]
}

interface NavbarProps {
    logo?: {
        url: string
        src: string
        alt: string
        title: string
    }
    menu?: MenuItem[]
    mobileExtraLinks?: {
        name: string
        url: string
    }[]
    auth?: {
        login: {
            text: string
            url: string
        }
        signup: {
            text: string
            url: string
        }
    }
}

const Navbar = ({
    logo = {
        url: "/",
        src: "/logo.svg",
        alt: "Amazon Refund Specialists",
        title: "ARS",
    },
    menu = [
        { title: "Home", url: "/" },
        {
            title: "Services",
            url: "#",
            items: [
                {
                    title: "Refund Analysis",
                    description: "Expert analysis of your Amazon account for refund opportunities",
                    icon: <DollarSign className="size-5 shrink-0" />,
                    url: "/services/refund-analysis",
                },
                {
                    title: "Claim Processing",
                    description: "Efficient handling of refund claims with Amazon",
                    icon: <RefreshCcw className="size-5 shrink-0" />,
                    url: "/services/claim-processing",
                },
                {
                    title: "Account Optimization",
                    description: "Strategies to minimize future refund issues",
                    icon: <Book className="size-5 shrink-0" />,
                    url: "/services/account-optimization",
                },
            ],
        },
        { title: "About Us", url: "/about" },
        { title: "Pricing", url: "/pricing" },
        {
            title: "Resources",
            url: "#",
            items: [
                {
                    title: "FAQ",
                    description: "Answers to common questions about our services",
                    icon: <HelpCircle className="size-5 shrink-0" />,
                    url: "/faq",
                },
                {
                    title: "Blog",
                    description: "Latest insights on Amazon refunds and seller strategies",
                    icon: <Book className="size-5 shrink-0" />,
                    url: "/blog",
                },
            ],
        },
    ],
    mobileExtraLinks = [
        { name: "Terms of Service", url: "/terms" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Contact", url: "/contact" },
    ],
    auth = {
        login: { text: "Client Login", url: "/login" },
        signup: { text: "Get Started", url: "/apply" },
    },
}: NavbarProps) => {
    return (
        <section className="py-4">
            <div className="container mx-auto px-4 max-w-7xl">
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        <a href={logo.url} className="flex items-center gap-2">
                            <img src={logo.src || "/placeholder.svg"} className="w-8" alt={logo.alt} />
                            <span className="text-lg font-semibold">{logo.title}</span>
                        </a>
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                            <a href={auth.login.url}>{auth.login.text}</a>
                        </Button>
                        <Button asChild size="sm">
                            <a href={auth.signup.url}>{auth.signup.text}</a>
                        </Button>
                    </div>
                </nav>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <a href={logo.url} className="flex items-center gap-2">
                            <img src={logo.src || "/placeholder.svg"} className="w-8" alt={logo.alt} />
                            <span className="text-lg font-semibold">{logo.title}</span>
                        </a>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <a href={logo.url} className="flex items-center gap-2">
                                            <img src={logo.src || "/placeholder.svg"} className="w-8" alt={logo.alt} />
                                            <span className="text-lg font-semibold">{logo.title}</span>
                                        </a>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="my-6 flex flex-col gap-6">
                                    <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>
                                    <div className="border-t py-4">
                                        <div className="grid grid-cols-2 justify-start">
                                            {mobileExtraLinks.map((link, idx) => (
                                                <a
                                                    key={idx}
                                                    className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                                                    href={link.url}
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Button asChild variant="outline">
                                            <a href={auth.login.url}>{auth.login.text}</a>
                                        </Button>
                                        <Button asChild>
                                            <a href={auth.signup.url}>{auth.signup.text}</a>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    )
}

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title} className="text-muted-foreground">
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="w-80 p-3">
                        <NavigationMenuLink>
                            {item.items.map((subItem) => (
                                <li key={subItem.title}>
                                    <a
                                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                                        href={subItem.url}
                                    >
                                        {subItem.icon}
                                        <div>
                                            <div className="text-sm font-semibold">{subItem.title}</div>
                                            {subItem.description && (
                                                <p className="text-sm leading-snug text-muted-foreground">{subItem.description}</p>
                                            )}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </NavigationMenuLink>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        )
    }

    return (
        <a
            key={item.title}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
            href={item.url}
        >
            {item.title}
        </a>
    )
}

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="py-0 font-semibold hover:no-underline">{item.title}</AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <a
                            key={subItem.title}
                            className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href={subItem.url}
                        >
                            {subItem.icon}
                            <div>
                                <div className="text-sm font-semibold">{subItem.title}</div>
                                {subItem.description && (
                                    <p className="text-sm leading-snug text-muted-foreground">{subItem.description}</p>
                                )}
                            </div>
                        </a>
                    ))}
                </AccordionContent>
            </AccordionItem>
        )
    }

    return (
        <a key={item.title} href={item.url} className="font-semibold">
            {item.title}
        </a>
    )
}

export { Navbar }

