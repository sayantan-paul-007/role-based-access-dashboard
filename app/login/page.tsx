import LoginForm from "@/components/login/login-form";
import Logo from "@/components/logo";
import Themetoggle from "@/components/theme-toggle";

export default function Login(){
    return(
        <main className="bg-background dark:bg-dark-background h-screen">
       <div className="flex w-full  items-center justify-between px-6 py-8">
         <Logo />

        <Themetoggle />
       </div>
       
        <div className="flex w-full mt-16 justify-center items-center">
            <LoginForm />
        </div>
        </main>
    )
}