'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user-actions";
import { useSearchParams } from "next/navigation";

const CredentialsSignInForm = () => {
    const [data, action] = useActionState(signInWithCredentials, {
        success: false,
        message: ''
    });

    const searchParams = useSearchParams();

    const callbackUrl = searchParams.get('callbackUrl') || '/';

    function SignInButton() {
        const { pending } = useFormStatus();
        return (
            <Button className="w-full" variant='default' disabled={pending}>
                {pending ? 'Signing In...' : 'Sign In'}
            </Button>
        );
    }

    return (

        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div className="space-y-6">
                <div>
                    <Label htmlFor="email" className="mb-2">Email</Label>
                    <Input id="email" name="email" type="email" defaultValue={signInDefaultValues.email} placeholder="Email" />
                </div>
                <div>
                    <Label htmlFor="password" className="mb-2">Password</Label>
                    <Input id="password" name="password" type="password" defaultValue={signInDefaultValues.password} placeholder="Password" />
                </div>
                <div>
                    <SignInButton />
                </div>
                {
                    data && !data.success && (
                        <div className="text-sm text-center text-red-600">
                            {data.message}
                        </div>
                    )
                }
                <div className="text-sm text-center text-muted-foreground">
                    Don&apos;t have an account?
                    <Link href="/sign-up" className="text-primary hover:underline ml-1">Sign Up</Link>
                </div>
            </div>
        </form>

    );
};

export default CredentialsSignInForm;