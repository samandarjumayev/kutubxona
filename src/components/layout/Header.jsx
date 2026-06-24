"use client"
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/markaz", label: "Markaz" },
    { href: "/bulimlar", label: "Bo'limlar" },
    { href: "/elektron-kitoblar", label: "Elektron Kitoblar" },
]

export default function Header() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const isActive = (href) => {
        if (href === "/elektron-kitoblar") return pathname.startsWith("/elektron-kitoblar")
        return pathname === href
    }

    return (
        <div className="h-[103px] bg-white shadow-lg relative z-50">
            <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px] flex items-center justify-between h-full">
                <a href="/" className="flex items-center gap-3 cursor-pointer">
                    <Image src={'/logo.png'} width={65} height={64} alt="Web logo image" />
                    <h1 className="text-[#0439A1] font-[700] text-[15px] sm:text-[20px] leading-[24px]">Elektron Kutubxona <br /> Boshqaruv Tizimi</h1>
                </a>

                <div className="hidden lg:flex items-center justify-between gap-[64px]">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={`text-[20px] font-[500] border-b-2 transition-all duration-200
                            ${isActive(href)
                                ? "text-[#0439A1] border-[#0439A1]"
                                : "text-[#64748B] border-transparent hover:text-[#0439A1] hover:border-[#0439A1]"
                            }`}>{label}</Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-[24px]">
                    <button className="text-[14px] font-[600] w-[110px] h-[44px] rounded-[8px] text-[#0439A1] border flex items-center justify-center gap-[3px] cursor-pointer active:scale-95 transition-all duration-150 active:duration-75">
                        O'zbek tili
                        <ChevronDown size={20} />
                    </button>
                    <button className="text-[14px] font-[600] w-[110px] h-[44px] rounded-[8px] bg-[#0439A1] text-white cursor-pointer active:scale-95 transition-all duration-150 active:duration-75">
                        Kirish
                    </button>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden p-2 text-[#0439A1] cursor-pointer"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {menuOpen && (
                <div className="lg:hidden absolute top-[103px] left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50">
                    <div className="max-w-[1570px] mx-auto px-4 py-4 flex flex-col gap-1">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={`px-4 py-3 rounded-[8px] text-[16px] font-[500] transition-all duration-200
                                    ${isActive(href)
                                        ? "text-[#0439A1] bg-[#EAF3FF]"
                                        : "text-[#64748B] hover:bg-gray-50"
                                    }`}
                            >{label}</Link>
                        ))}
                        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                            <button className="flex-1 h-[44px] rounded-[8px] text-[#0439A1] border flex items-center justify-center gap-[3px] text-[14px] font-[600] cursor-pointer">
                                O'zbek tili <ChevronDown size={18} />
                            </button>
                            <button className="flex-1 h-[44px] rounded-[8px] bg-[#0439A1] text-white text-[14px] font-[600] cursor-pointer">
                                Kirish
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
