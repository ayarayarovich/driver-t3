import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Anta } from "next/font/google";
import { type Metadata } from "next";
import SessionProvider from "./session-provider";

import { Providers } from "./providers";
import { auth } from "@/server/auth";

export const metadata: Metadata = {
  title: "Driver App",
  description:
    "At Driver, we are committed to providing reliable, efficient, and cost-effective cargo transportation solutions. Whether you're moving goods locally or across the country, our fleet of modern vehicles and experienced team ensure your shipments arrive safely and on time—every time.",
  icons: [{ rel: "icon", url: "/driver-logo.svg" }],
};

const anta = Anta({
  weight: "400",
  variable: "--font-anta",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <html
      lang="en"
      className={`bg-background text-foreground dark ${GeistSans.variable} ${anta.variable}`}
    >
      <body>
        <SessionProvider session={session}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
