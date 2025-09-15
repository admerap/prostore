import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <Image src="/images/logo.svg" alt={`${APP_NAME}`} width={48} height={48} priority={true} />
            <div className="p-6 w-full max-w-md rounded-lg shadow-lg text-center mt-4">
                <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-red-600">Sorry, the page you are looking for does not exist.</p>
                <Button variant='outline' className="mt-6" asChild>
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;