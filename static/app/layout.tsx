// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TEXTAS Healthcare - Healthcare Business Solutions',
  description: 'Healthcare Business Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Textas Healthcare – Home & Specialized Health Services</title>
        <meta name="title" content="Textas Healthcare – Home & Specialized Health Services" />
        <meta
          name="description"
          content="Trusted home healthcare providers offering personalized medical care, nursing, and rehabilitation services for elderly, post-surgery, and chronic care patients."
        />
        <meta
          name="keywords"
          content="Home Healthcare, Nursing, Elderly Care, Post-Surgery Care, Rehabilitation, Chronic Care, Personalized Medical Care, Textas Healthcare"
        />



        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <meta name="google-site-verification" content="QaZlsYPlbPGq9kveuTn1vz-XRQhDGcEkStjN6kDi5VY" />


<meta name="google-adsense-account" content="ca-pub-9165803123871431">


      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}