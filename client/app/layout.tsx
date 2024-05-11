import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import SideNav from "./layout/SideNav";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sender.",
  description: "Built for Chimoney.io's assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={inter.className}>
      <Toaster richColors position="top-right" />

      <body className="layout-wrapper">
        <SideNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
