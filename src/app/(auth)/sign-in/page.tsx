import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CredentialsSignInForm from "./creadentials-signin-form";
import { auth} from '@/auth'
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Sign In'
};
const SignInPage = async(props: {searchParams: Promise<{callbackUrl: string}>}) => {
    
    const {callbackUrl} = await props.searchParams;
    const session = await auth();

    if (session) {
        return redirect(callbackUrl || '/'); // Redirect to home if already signed in
    }
  return ( 
    <div className="w-full max-w-md mx-auto">
        <Card>
            <CardHeader className="space-y-4">
                <Link href='/' className="flex justify-center items-center">
                    <Image src='/images/logo.svg' width={80} height={80} alt={`${APP_NAME} logo`} priority={true} />
                </Link>
                <CardTitle className="text-center text-2xl">Sign In</CardTitle>
                <CardDescription className="text-center">Sign in to your acount</CardDescription>
                <CardContent>
                    <CredentialsSignInForm />
                </CardContent>
            </CardHeader>
        </Card>
    </div>
   );
};

export default SignInPage;