import type { Metadata } from "next";
import "./globals.css";
import CommonHeader from "../_components/CommonHeader";
import CommonFooter from "../_components/CommonFooter";

export const metadata: Metadata = {
  title: "Ready Recipe",
  description: "Dummy Recipe App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="home">
        <CommonHeader />
        {children}
        <CommonFooter />
      </body>
    </html>
  );
}
