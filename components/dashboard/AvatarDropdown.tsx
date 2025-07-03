import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser } from "@/context/userContext";
const AvatarDropdown = () => {
    const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    document.cookie = "token=; Max-Age=0; path=/";
    window.location.href = '/login';
  };
  const {user} =useUser()
  return (
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <Avatar>
                <AvatarImage src={user?.imageURL || "https://github.com/shadcn.png"} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarDropdown