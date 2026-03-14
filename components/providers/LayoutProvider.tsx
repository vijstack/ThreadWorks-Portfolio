import React from 'react'
import { Toaster } from 'sonner'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Toaster richColors position='top-center' />
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}
