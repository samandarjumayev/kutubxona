import { Camera, Globe2, MessageCircle, Send } from "lucide-react"
import Image from "next/image"


export default function Footer() {
    return <div className="bg-[#153965] text-white">
        <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px] py-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[40px]">
                {/* Logo */}
                <div className="flex-1">
                    <div className="flex items-center gap-[12px]">
                        <Image src="/logo.png" alt="Elektron Kutubxona logo" width={65} height={64} className="object-contain" />
                        <h2 className="text-[20px] font-[700] leading-[24px]">
                            Elektron Kutubxona
                            <br />
                            Boshqaruv Tizimi
                        </h2>
                    </div>

                    <p className="text-white/65 text-[14px] font-[400] leading-[23px] mt-[14px]">
                        Sharof Rashidov nomidagi
                        <br />
                        Samarqand davlat universiteti
                        <br />
                        elektron kutubxonasi.
                    </p>

                    <div className="flex items-center gap-[12px] mt-[20px]">
                        <a href="#" className="w-[36px] h-[36px] rounded-full bg-white text-[#153965] flex items-center justify-center">
                            <Globe2 size={18} />
                        </a>
                        <a href="#" className="w-[36px] h-[36px] rounded-full bg-white text-[#153965] flex items-center justify-center">
                            <Camera size={18} />
                        </a>
                        <a href="#" className="w-[36px] h-[36px] rounded-full bg-white text-[#153965] flex items-center justify-center">
                            <Send size={17} fill="#153965" />
                        </a>
                        <a href="#" className="w-[36px] h-[36px] rounded-full bg-white text-[#153965] flex items-center justify-center">
                            <MessageCircle size={18} />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:contents gap-8 lg:gap-0 w-full lg:w-auto">
                    {/* Markaz */}
                    <div className="lg:pt-[8px] lg:w-[245px]">
                        <h3 className="uppercase text-[12px] font-[700] tracking-[2px]">Markaz</h3>
                        <div className="flex flex-col items-start gap-[12px] mt-[20px]">
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Biz haqimizda</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Tarix</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Jamoa</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Mukofotlar</a>
                        </div>
                    </div>

                    {/* Resurslar */}
                    <div className="lg:pt-[8px] lg:w-[245px]">
                        <h3 className="uppercase text-[12px] font-[700] tracking-[2px]">Resurslar</h3>
                        <div className="flex flex-col items-start gap-[12px] mt-[20px]">
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Kitoblar</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Audio kitoblar</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Maqolalar</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Dissertatsiyalar</a>
                        </div>
                    </div>

                    {/* Yordam */}
                    <div className="lg:pt-[8px] lg:w-[245px]">
                        <h3 className="uppercase text-[12px] font-[700] tracking-[2px]">Yordam</h3>
                        <div className="flex flex-col items-start gap-[12px] mt-[20px]">
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">FAQ</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Foydalanish qoidalari</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Aloqa</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] font-[400]">Maxfiylik</a>
                        </div>
                    </div>

                    {/* Aloqa */}
                    <div className="lg:pt-[8px] lg:w-[245px]">
                        <h3 className="uppercase text-[12px] font-[700] tracking-[2px]">Aloqa</h3>
                        <div className="flex flex-col items-start gap-[12px] mt-[20px] text-white/70 text-[14px] font-[400]">
                            <p>
                                Samarqand sh., Universitet
                                <br />
                                xiyoboni 15
                            </p>
                            <a href="tel:+998662391140" className="hover:text-white transition-colors duration-200">+998 66 239 11 40</a>
                            <a href="mailto:library@samdu.uz" className="hover:text-white transition-colors duration-200">library@samdu.uz</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer bottom */}
        <div className="relative border-t border-white/10 h-auto lg:h-[69px] py-4 lg:py-0 flex items-center justify-between text-white/60 text-[14px] font-[400]">
            <div className="relative w-full h-full max-w-[1570px] px-4 lg:px-[10px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                <p>SamDU Elektron Kutubxona © 2026, Barcha huquqlar himoyalangan</p>
                <p>Made in Samarqand</p>
            </div>
        </div>
    </div>
}
