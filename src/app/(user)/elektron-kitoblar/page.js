import { ChevronRight } from "lucide-react";

export default function ElektronKitoblar(){
    return (
        <div className="min-h-100 pb-10">
            {/* Elektron kitoblar */}
            <div className="max-w-[1570px] mx-auto px-[10px] h-[476px] border">
                <div className="relative w-screen h-[373px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#153965] via-[#2E1F7A] to-[#6A288A]">
                    <div className="max-w-[1570px] h-full mx-auto px-[10px] pt-[64px]">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-[12px] text-[13px] font-[400]">
                            <a href="#" className="text-white/60">Bosh sahifa</a>
                            <span className="text-white/45">
                                <ChevronRight size={14} />
                            </span>
                            <p className="text-white">Elektron kitoblar</p>
                        </div>

                        {/* Title */}
                        <div className="mt-[34px]">
                            <p className="uppercase text-white/65 text-[12px] font-[700] tracking-[3px]">Raqamli katalog</p>
                            <h1 className="text-white text-[64px] font-[800] leading-[72px] mt-[10px]">
                                Elektron <span className="text-[#2A85F4]">kitoblar</span>
                            </h1>
                            <p className="max-w-[650px] text-white/70 text-[18px] font-[400] leading-[28px] mt-[14px]">
                                100 000+ kitob, audio asarlar va video kurslar to&apos;plamini bir joyda qidiring,
                                <br />
                                o&apos;qing va yuklab oling.
                            </p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-38px] w-full max-w-[1570px] px-[10px]">
                        <div className="h-[76px] rounded-[20px] bg-white shadow-[0_14px_35px_#15396540] px-[22px] flex items-center gap-[18px]">
                            <span className="text-[#65758B] text-[28px] leading-none">&#8981;</span>
                            <input
                                type="text"
                                placeholder="Kitob nomi, muallif yoki ISBN..."
                                className="flex-1 h-full outline-none text-[#153965] text-[15px] placeholder:text-[#94A3B8]"
                            />

                            <button className="h-[48px] px-[20px] rounded-[12px] border border-[#D7DEE8] text-[#153965] text-[14px] font-[600] flex items-center gap-[10px] cursor-pointer">
                                <span className="text-[18px]">&#9776;</span>
                                Kengaytirilgan
                            </button>

                            <button className="h-[48px] px-[24px] rounded-[12px] bg-[#2A85F4] text-white text-[14px] font-[700] flex items-center gap-[10px] cursor-pointer active:scale-95 transition-all duration-150">
                                Qidirish
                                <span className="text-[20px]">&#8594;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
