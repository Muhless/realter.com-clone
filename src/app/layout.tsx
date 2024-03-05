import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigations/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "realtor.com | Homes for Sale, Apartments & Houses for Rent",
  description: "Realter.com",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
