import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar  from "@/components/dashboard/Sidebar"
import Themetoggle from '@/components/theme-toggle';
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
   <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <Themetoggle />
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout