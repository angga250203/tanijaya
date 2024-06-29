import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { NavItem } from '@/app/type'


interface navMobileProps {
    datanav:NavItem[],
}

export default function Navmobile ({datanav}:navMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="py-24">
         {datanav.map(({title,href}:NavItem) => (
                <Link href={href} key={title}>
                    <p className='text-lg my-5 py-4 flex justify-center rounded-lg items-center bg-gray-200'>{title}</p>
                </Link>
         ))}   
       
       
      </SheetContent>
    </Sheet>
  )
}
