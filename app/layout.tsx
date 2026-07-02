
import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Geist } from 'next/font/google'
import { GeistPixelLine } from 'geist/font/pixel'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: "Obsidian Agent - An Intelligent CLI Obsidian Automation Tool",
  description: "Transform your work flow with AI-Powered automation",
}

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${GeistPixelLine.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
