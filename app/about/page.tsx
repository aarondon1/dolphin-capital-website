import type { Metadata } from "next"
import AboutHero from "../components/AboutHero"
import AboutNavigation from "../components/AboutNavigation"
import AboutHistory from "../components/AboutHistory"
import AboutEducation from "../components/AboutEducation"
import AboutCoverage from "../components/AboutCoverage"
import ContactInfo from "../components/ContactInfo"

export const metadata: Metadata = {
  title: "About - Dolphin Capital | Our Mission & Story",
  description:
    "Learn about Dolphin Capital's journey, educational approach, and comprehensive investment coverage across multiple sectors.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutNavigation />
      <AboutHistory />
      <AboutEducation />
      <AboutCoverage />
      <div className="pb-8">
        <ContactInfo />
      </div>
    </div>
  )
}
