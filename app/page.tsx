import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Snapshot } from "@/components/sections/Snapshot"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Achievements } from "@/components/sections/Achievements"
import { Certifications } from "@/components/sections/Certifications"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Snapshot />
        <FeaturedProjects />
        <Skills />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

