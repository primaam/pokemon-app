import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "@/redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pokemon App",
    description: "Website to show Pokemon",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
