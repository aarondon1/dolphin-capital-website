import type { Metadata } from "next"
import JoinHero from "../components/JoinHero"
import HowToJoin from "../components/HowToJoin"

export const metadata: Metadata = {
  title: "Join Us - Dolphin Capital | Student Investment Fund",
  description:
    "Join Dolphin Capital and gain hands-on investment experience. Learn about our application process and requirements.",
}

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <JoinHero />
      <HowToJoin />
    </div>
  )
}
