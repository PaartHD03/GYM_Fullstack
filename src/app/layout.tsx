import { Metadata } from "next";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import TopLoader from "@/components/loaders/top-loader";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark overflow-x-hidden"
      >
        {
          //@ts-expect-error://
          <Header />
        }
        <main>
          {children}
        </main>
        <TopLoader />
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Gym-Fluencer",
    template: "%s | Gym-Fluencer",
  },
  icons: [
    {
      url: "/logo.png"
    },
  ],
  description: "GymFluencer is the ultimate fitness hub designed to help you crush your goals. From tailored workout and diet plans to advanced progress tracking, it's your all-in-one platform for building strength, losing weight, and staying motivated. Whether you're a beginner or a pro, GymFluencer is here to fuel your fitness journey."
}