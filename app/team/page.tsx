import type { Metadata } from "next"
import TeamHero from "../components/TeamHero"
import TeamGrid from "../components/TeamGrid"

export const metadata: Metadata = {
  title: "Our Team - Dolphin Capital | Meet Our Student Managers",
  description: "Meet the dedicated student managers and analysts who drive Dolphin Capital's investment success.",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <TeamGrid />
    </div>
  )
}
