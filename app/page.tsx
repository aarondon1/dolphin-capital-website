import type { Metadata } from "next"
import Hero from "./components/Hero"
import YearInReview from "./components/YearInReview"
import HighlightsCarousel from "./components/HighlightsCarousel"
import CallToAction from "./components/CallToAction"

export const metadata: Metadata = {
  title: "Home - Dolphin Capital | Student-Managed Investment Fund",
  description:
    "Welcome to Dolphin Capital, the premier student-managed investment fund at CSI. Discover our performance, team, and opportunities to join.",
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <YearInReview />
      <HighlightsCarousel />
      <CallToAction />
    </div>
  )
}
