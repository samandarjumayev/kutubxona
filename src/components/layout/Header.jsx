"use client"
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()

    return <div className={`h-[103px] bg-white shadow-lg`}>
        <div className="max-w-[1570px] mx-auto px-[10px] flex items-center justify-between h-full">
            <div className="flex items-center justify-between gap-3">
                <Image src={'/logo.png'} width={65} height={64} alt="Web logo image" />
                <h1 className="text-[#0439A1] font-[700] text-[20px] leading-[24px]">Elektron Kutubxona <br /> Boshqaruv Tizimi</h1>
            </div>

            <div className="flex items-center justify-between gap-[64px]">
                <Link href={`/`} className={`text-[20px] font-[500] border-b-2 transition-all duration-200 
                        ${pathname === "/"
                        ? "text-[#0439A1] border-[#0439A1]"
                        : "text-[#64748B] border-transparent hover:text-[#0439A1] hover:border-[#0439A1]"
                    }`}>Bosh sahifa</Link>
                <Link href={`/markaz`} className={`text-[20px] font-[500] border-b-2 transition-all duration-200 
                        ${pathname === "/markaz"
                        ? "text-[#0439A1] border-[#0439A1]"
                        : "text-[#64748B] border-transparent hover:text-[#0439A1] hover:border-[#0439A1]"
                    }`}>Markaz</Link>
                <Link href={`/bulimlar`} className={`text-[20px] font-[500] border-b-2 transition-all duration-200 
                        ${pathname === "/bulimlar"
                        ? "text-[#0439A1] border-[#0439A1]"
                        : "text-[#64748B] border-transparent hover:text-[#0439A1] hover:border-[#0439A1]"
                    }`}>Bo'limlar</Link>
                <Link href={`/elektron-kitoblar`} className={`text-[20px] font-[500] border-b-2 transition-all duration-200 
                        ${pathname.startsWith("/elektron-kitoblar")
                        ? "text-[#0439A1] border-[#0439A1]"
                        : "text-[#64748B] border-transparent hover:text-[#0439A1] hover:border-[#0439A1]"
                    }`}>Elektron Kitoblar</Link>
            </div>

            <div className="h-full flex items-center justify-between gap-[24px]">
                <button className="text-[14px] font-[600] w-[110px] h-[44px] rounded-[8px] text-[#0439A1] border flex items-center justify-center gap-[3px] cursor-pointer active:scale-95 transition-all duration-150 active:duration-75">
                    O'zbek tili
                    <ChevronDown size={20} />
                </button>
                <button className="text-[14px] font-[600] w-[110px] h-[44px] rounded-[8px] bg-[#0439A1] text-white  cursor-pointer active:scale-95 transition-all duration-150 active:duration-75">
                    Kirish
                </button>
            </div>


        </div>
    </div>
}