
import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { GeistPixelLine } from 'geist/font/pixel'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${GeistPixelLine.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
