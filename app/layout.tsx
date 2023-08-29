import "./globals.css";
import { Inter } from "next/font/google";
import First from "@/components/first";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rocket Panda Replica",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} absolute bg-[#2c0ac4]`}>
          {children}
      </body>
    </html>
  );
}
