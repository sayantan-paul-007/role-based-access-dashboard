'use client'
import { HomeIcon, Tag, ShoppingBasket, Group } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Logo from "../logo"
import { usePathname } from "next/navigation"

const items = [
  {
        name:'Home',
        href:'/dashboard',
        icon: HomeIcon
    },
    {
        name:'Category',
        href:'/dashboard/category',
        icon:Tag
    },
   {
        name:'Products',
        href:'/dashboard/products',
        icon: ShoppingBasket
    },
    {
        name:'Inventory',
        href:'/dashboard/inventory',
        icon: Group
    }
]
const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
         <Logo size={34} /> 
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.name} className={` ${pathname.startsWith(item.href)?'bg-sidebar-accent':''} rounded-md`}>
                  <SidebarMenuButton asChild className="flex items-center gap-3 h-10">
                    <Link href={item.href}>
                      <item.icon style={{ width: 20, height: 20 }} />
                      <span className="text-md">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar