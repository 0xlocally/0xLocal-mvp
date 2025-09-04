import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '0xLocal MVP',
  description: 'Cooperative loyalty program for local commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
