'use client';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer">
                    {
                        theme === "system" ? (
                            <SunMoon className="w-8 h-8" />
                        ) : (
                            theme === "dark" ? (
                                <MoonIcon className="w-8 h-8" />
                            ) : (
                                <SunIcon className="w-8 h-8" />
                            )
                        )
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem className="cursor-pointer" checked={theme === "dark"} onCheckedChange={() => setTheme("dark")}>
                    dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="cursor-pointer" checked={theme === "light"} onCheckedChange={() => setTheme("light")}>
                    Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="cursor-pointer" checked={theme === "system"} onCheckedChange={() => setTheme("system")}>
                    System
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;