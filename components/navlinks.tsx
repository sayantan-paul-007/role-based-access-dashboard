'use client'
import Link from "next/link"
import { HomeIcon, Tag, ShoppingBasket, Group } from "lucide-react"
import { usePathname } from "next/navigation"
import clsx from 'clsx';
const links =[
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
export default function Navlinks(){
    const pathname = usePathname()
    return(
        <>
        {
            links.map((link)=>{
                const Linkicon = link.icon
                return(
                    <Link key={link.name} href={link.href}
                     className={clsx(
              'flex items-center h-12 justify-center gap-4 rounded-md p-4 text-md font-regular hover:bg-accentHighlight dark:hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
               'text-accent bg-accentHighlight dark:bg-dark-accentHighlight dark:text-white':pathname === link.href,
      'text-textPrimary dark:text-dark-textPrimary': pathname !== link.href,
              },
            )}
                    >
                        <Linkicon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })
        }
        </>
    )
}