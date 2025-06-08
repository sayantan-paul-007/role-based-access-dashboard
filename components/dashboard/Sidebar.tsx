
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
 
// Menu items.
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
  return (
    <Sidebar>
      <SidebarHeader>
         <Logo /> 
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="flex items-center gap-3 h-12">
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