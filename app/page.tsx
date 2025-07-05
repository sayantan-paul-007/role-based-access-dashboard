import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main >
      <Hero />
      <Footer />
    </main>
    </>
  )
}

export default Home