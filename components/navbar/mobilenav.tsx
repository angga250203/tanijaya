import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTitle,
  SheetContent,

  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { NavItem } from '@/app/type'
import { CiMenuFries } from "react-icons/ci";


interface navMobileProps {
    datanav:NavItem[],
}

export default function Navmobile ({datanav}:navMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuFries className="text-3xl font-bold"/>
      </SheetTrigger>
      <SheetContent side="right" className="py-24 w-full">
      <SheetTitle className="text-3xl">Menu</SheetTitle>
         {datanav.map(({title,href}:NavItem) => (
                <Link href={href} key={title}>
                    <h1 className='text-2xl my-12'>{title}</h1>
                </Link>
         ))}   
       
       
      </SheetContent>
    </Sheet>
  )
}
