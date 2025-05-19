import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { UserProvider } from "@/context/UserContext";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <UserProvider>
    <div className="flex">
        
        <Sidebar />
        <div className="flex flex-col w-full">
            <Header />
            
              {children}

         
        
        </div>
        
    </div>
       </UserProvider>
  )}