import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EllipsisVertical, ShoppingCartIcon, User } from "lucide-react";
const Menu = () => {
    return (
        <div className="flex justify-content-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <ModeToggle />
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/cart">
                        <ShoppingCartIcon className="w-8 h-8" />
                        <span className="hidden lg:block">Cart</span>
                    </Link>
                </Button>
                <Button size="sm" asChild>
                    <Link href="/sign-in">
                        <User className="w-8 h-8" />
                        <span className="hidden lg:block">Sign In</span>
                    </Link>
                </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical className="w-8 h-8 cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start gap-3 p-5">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle />
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/cart">
                                <ShoppingCartIcon className="w-8 h-8" />
                                <span className="">Cart</span>
                            </Link>
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="/sign-in">
                                <User className="w-8 h-8" />
                                <span className="">Sign In</span>
                            </Link>
                        </Button>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};

export default Menu;