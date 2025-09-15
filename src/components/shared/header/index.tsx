import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
    return (
        <header className="w-full border-b p-3">
            <div className="flex justify-between items-center px-5 md:px-10 w-full">
                <div className="flex items-center justify-start">
                    <Link href="/" className="flex items-center justify-start">
                        <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={48} priority={true} />
                        <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
                    </Link>
                </div>
                <Menu />
            </div>
        </header>
    );
};

export default Header;