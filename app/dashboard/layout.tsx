import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        
        <Sidebar />
        <div className="flex flex-col w-full">
            <Header />
        {children}
        </div>
        
    </div>
    
  )}