import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

const inter = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "leesang portfolio",
  description: "toss portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
