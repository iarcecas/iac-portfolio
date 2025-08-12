import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { ThemeProvider } from "../../components/theme-provider"
import "../styles/globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["300", "400", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Ignacio Arce - Portfolio",
  description: "Building Beautiful Experiences, One Pixel at a Time",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.variable}>
      <body className="font-nunito antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
