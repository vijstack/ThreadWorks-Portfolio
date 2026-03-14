import React from 'react'
import Hero from './Hero'
import ProblemSection from './ProblemSection'
import SolutionSection from './SolutionSection'
import GallerySection from './GallerySection'

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <GallerySection />
        </div>
    )
}
