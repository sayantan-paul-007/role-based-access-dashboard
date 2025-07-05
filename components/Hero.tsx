import HeroImage from "@/components/HeroImage"

const Hero = () => {
  
  return (
    <section className='px-4 md:px-8 bg-gradient-to-t  from-primary/30 via-secondary/70 to-background' aria-label="Hero">
      <div className="container flex flex-col items-center justify-center h-full">
        <div className='py-20'>
            <h1 className="text-4xl px-20 text-center  md:text-5xl font-bold tracking-tight">
    Full Control. Zero Confusion — Even with Multiple Admins.
  </h1>
   <p className="mt-4 text-md md:text-lg text-center mx-auto text-muted-foreground">
    SpectraPanel gives you seamless role-based access for effortless user and data management — without overcomplicating the dashboard.
  </p>
  
        </div>
       <HeroImage />



      
      </div>
    </section>
  )
}

export default Hero
