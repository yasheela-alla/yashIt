import type { Metadata } from 'next'
import './globals.css'
import AppLayout from './AppLayout'

export const metadata: Metadata = {
    title: 'Yasheela.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    )
}
