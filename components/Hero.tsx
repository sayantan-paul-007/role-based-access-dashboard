import HeroImage from "@/components/HeroImage"
import { Button } from "./ui/button"
import Link from "next/link"

const Hero = () => {

  return (
    <section className='px-4 md:px-8 bg-gradient-to-t  from-primary/30  to-background' aria-label="Hero">
      <div className="container flex flex-col items-center justify-center h-full">
        <div className='py-16 md:py-24 md:w-1/2 flex flex-col items-center justify-center gap-4 md:gap-6 text-center'>
          <h1 className="text-4xl text-center text-balance md:text-5xl font-bold tracking-tight ">
            Full Control. Zero Confusion, Even with Multiple Admins.
          </h1>
          <p className="mt-4 text-md md:text-xl text-center mx-auto text-muted-foreground  ">
            Seamless role-based access for effortless user and data management — without the complexity.
          </p>
          <Link href="/login">
            <Button className='mt-4 md:text-lg md:px-6 md:h-10 rounded-lg bg-primary/85 '>Get Started</Button>
          </Link>
        </div>
        <HeroImage />
      </div>
    </section>
  )
}

export default Hero
