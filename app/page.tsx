import Logo from "@/components/logo";
import Themetoggle from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
return(
  <main className="bg-background dark:bg-dark-background h-screen">
    <div className="flex px-6 py-4 justify-between">
      <Logo />
       <Themetoggle />
    </div>
  <h1 className="text-center">This is home page</h1>
  <div className="flex items-center justify-center">
    <Link href='/login'>
      <button className="bg-accent py-2 px-5 rounded-md">
        Login
      </button>
      </Link>
  </div>
      
  </main>
)  
}
