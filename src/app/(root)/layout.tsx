import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1 px-5 md:px-10 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}