import "./globals.css";
import { Inter } from "next/font/google";
import First from "@/components/logo";

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
      <body className={`${inter.className} absolute`}>
          {children}
      </body>
    </html>
  );
}
