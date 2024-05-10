import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import SideNav from "./layout/SideNav";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
