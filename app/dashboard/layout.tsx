import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar  from "@/components/dashboard/Sidebar"
import Header from '@/components/dashboard/Header';
import { UserProvider } from '@/context/userContext';
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <UserProvider>
   <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        
        <SidebarTrigger className='md:hidden' />
        <Header />
        {children}
      </main>
    </SidebarProvider>
    </UserProvider>
  )
}

export default DashboardLayout