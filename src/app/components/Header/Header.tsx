import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { UserRound, Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="h-[76px] bg-[#FBEBB5] w-svw border border-[#e2c464] shadow">
      <div id="navbar" className=" grid grid-cols-3  pt-2">
        <div className="md:hidden ">
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
            </main>
          </SidebarProvider>
        </div>
        <div className="h-[76px] w-[150px] flex justify-center items-start  mb-10 overflow-hidden">
          <Link href={"/"}>
            <Image
              src="/Meubel House_Logos-05.svg"
              alt=""
              width={60}
              height={150}
            />
          </Link>
        </div>
        <div className="hidden md:flex text-[16px] font-[500]  md:justify-center md:items-center  h-[56px]">
          <ul className="flex space-x-8 font-[700]">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end pt-4 md:pt-2 pr-3">
          <Link href={"/account"}>
            <UserRound />
          </Link>
          <div className="hidden md:block px-2">
            <Link href={"/"}>
              <Search />
            </Link>
          </div>
          <div className="hidden md:block px-2">
            <Link href={"/"}>
              <Heart />
            </Link>
          </div>
          <div className="hidden md:block px-2">
            <Link href={"/cart"}>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
