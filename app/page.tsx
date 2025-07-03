import Themetoggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Home = () => {
  return (
    <main>
      <Themetoggle />
      <Link href="/login">
      <Button>Login</Button>
      </Link>
    </main>
  )
}

export default Home