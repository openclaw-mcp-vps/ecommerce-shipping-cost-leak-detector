import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShipAudit — Find Hidden Shipping Overcharges',
  description: 'Audit shipping invoices against carrier contracts to detect overcharges, billing errors, and missed refund opportunities.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0df3695f-ce26-439f-a790-463da2353b17"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
