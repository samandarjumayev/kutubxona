
import { ArrowRight, Award, BookOpenCheck, Building2, ChevronRight, Clock, Compass, Download, GraduationCap, Mail, MapPin, Phone, ShieldCheck, Sparkles, Target, Users } from "lucide-react"


export default function Markaz() {
    return (
        <div>
            {/* Hero */}
            <div className="min-h-[300px] lg:h-[463px] relative bg-gradient-to-r from-[#102B4C] via-[#2E1F7A] to-[#1B2D87]">
                <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px] py-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-[12px] text-[12px] font-[400] mt-[28px]">
                        <a href="#" className="text-white/60">Bosh sahifa</a>
                        <span className="text-white/45">
                            <ChevronRight size={14} />
                        </span>
                        <p className="text-white">Markaz</p>
                    </div>

                    {/* Hero title */}
                    <div className="mt-[34px]">
                        <p className="uppercase text-white/70 text-[12px] font-[700] tracking-[3px]">Biz haqimizda</p>
                        <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[60px] font-[800] leading-[42px] sm:leading-[54px] lg:leading-[64px] mt-[12px]">
                            SamDU Axborot-resurs
                            <br />
                            <span className="text-[#2A85F4]">markazi</span>
                        </h1>
                        <p className="max-w-[720px] text-white/75 text-[15px] lg:text-[18px] font-[400] leading-[24px] lg:leading-[28px] mt-[18px]">
                            Bir asrdan ortiq tarixga ega kutubxona — bugungi kunda zamonaviy raqamli
                            platforma sifatida talabalar, professorlar va tadqiqotchilarga xizmat qilmoqda.
                        </p>
                    </div>
                </div>

                {/* Info card - desktop: absolute, mobile: relative */}
                <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-[-65px] w-full max-w-[1232px] lg:w-[1232px] mx-auto px-4 lg:px-0 mt-8 lg:mt-0 pb-8 lg:pb-0 z-10">
                    <div className="h-auto lg:h-[130px] rounded-[20px] bg-white shadow-[0_18px_40px_#15396530] px-[24px] lg:px-[42px] py-6 lg:py-0 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
                        <div>
                            <p className="text-[#153965] text-[28px] lg:text-[36px] font-[800] leading-[36px] lg:leading-[42px]">1927</p>
                            <p className="uppercase text-[#65758B] text-[11px] lg:text-[12px] font-[500] mt-[8px]">Tashkil etilgan</p>
                        </div>
                        <div>
                            <p className="text-[#153965] text-[28px] lg:text-[36px] font-[800] leading-[36px] lg:leading-[42px]">100K+</p>
                            <p className="uppercase text-[#65758B] text-[11px] lg:text-[12px] font-[500] mt-[8px]">Kitoblar fondi</p>
                        </div>
                        <div>
                            <p className="text-[#153965] text-[28px] lg:text-[36px] font-[800] leading-[36px] lg:leading-[42px]">25K</p>
                            <p className="uppercase text-[#65758B] text-[11px] lg:text-[12px] font-[500] mt-[8px]">Faol o&apos;quvchilar</p>
                        </div>
                        <div>
                            <p className="text-[#153965] text-[28px] lg:text-[36px] font-[800] leading-[36px] lg:leading-[42px]">180+</p>
                            <p className="uppercase text-[#65758B] text-[11px] lg:text-[12px] font-[500] mt-[8px]">Xodimlar</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Markaz haqida */}
            <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px] pt-10 lg:pt-[150px] pb-16 lg:mb-30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[90px] items-center">
                    {/* Chap qism */}
                    <div>
                        <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Markaz haqida</p>
                        <h2 className="text-[#153965] text-[28px] lg:text-[40px] font-[800] leading-[34px] lg:leading-[48px] mt-[10px]">
                            Bilim, ilm va innovatsiyalar
                            <br />
                            markazida
                        </h2>

                        <p className="text-[#65758B] text-[15px] lg:text-[17px] font-[400] leading-[24px] lg:leading-[26px] mt-[24px]">
                            Sharof Rashidov nomidagi Samarqand davlat universiteti Axborot-resurs
                            markazi — mintaqamizdagi eng yirik akademik kutubxonalardan biri. Bizning
                            maqsadimiz — har bir talabaga, professorga va tadqiqotchiga zamonaviy
                            bilim manbalariga oson va tez kirish imkonini taqdim etish.
                        </p>

                        <p className="text-[#65758B] text-[15px] lg:text-[17px] font-[400] leading-[24px] lg:leading-[26px] mt-[16px]">
                            Markaz tarkibida fondlari boyitilgan oltita ixtisoslashgan o'qish zali,
                            raqamli laboratoriya, audio-vizual studiya va xalqaro ilmiy bazalarga
                            ulangan tadqiqotchilar maydoni faoliyat yuritadi.
                        </p>

                        <div className="flex flex-wrap items-center gap-[12px] mt-[30px]">
                            <button className="h-[46px] px-[22px] rounded-full bg-[#2A85F4] text-white text-[14px] font-[700] flex items-center gap-[10px] cursor-pointer active:scale-95 transition-all duration-150">
                                Virtual sayohat
                                <ArrowRight size={16} strokeWidth={2} />
                            </button>
                            <button className="h-[46px] px-[22px] rounded-full border border-[#153965] text-[#153965] text-[14px] font-[700] flex items-center gap-[10px] cursor-pointer active:scale-95 transition-all duration-150">
                                Hisobotlarni yuklash
                                <Download size={16} strokeWidth={2} />
                            </button>
                        </div>
                    </div>

                    {/* O'ng qism */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="hidden lg:block absolute -top-[40px] -right-[49px] w-[118px] h-[118px] rounded-full bg-[#EBF4FF]"></div>
                        <div className="hidden lg:block absolute left-9 -bottom-9 w-[152px] h-[152px] rounded-[24px] bg-[#2A85F4] shadow-[0_18px_35px_#2A85F440]"></div>

                        <div className="relative w-full lg:w-[648px] h-[300px] sm:h-[420px] lg:h-[735px] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#153965] via-[#2E1F7A] to-[#6A288A]">
                            <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>

                            <div className="relative h-full flex items-center justify-center">
                                <Building2 size={140} strokeWidth={1.3} className="text-white/35" />
                            </div>

                            <div className="absolute left-[24px] right-[24px] bottom-[24px] h-[82px] rounded-[16px] border border-white/20 bg-white/10 backdrop-blur-sm px-[24px] flex items-center gap-[18px]">
                                <Award size={34} strokeWidth={1.8} className="text-[#FACC15]" />
                                <div>
                                    <p className="text-white/60 text-[12px] font-[400]">2024-yil mukofoti</p>
                                    <p className="text-white text-[16px] font-[700] mt-[2px]">Eng yaxshi raqamli kutubxona</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Qadriyatlarimiz */}
            <div className="bg-[#EBF4FF66] py-[48px] lg:py-0 lg:h-[505px]">
                <div className="max-w-[1570px] px-4 lg:px-[10px] mx-auto h-full">
                    <div className="text-center pt-0 lg:pt-[70px]">
                        <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Qadriyatlarimiz</p>
                        <h2 className="text-[#153965] text-[26px] lg:text-[36px] font-[800] leading-[32px] lg:leading-[44px] mt-[8px]">Bizni harakatga keltiradigan g&apos;oyalar</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px] mt-[50px]">
                        <div className="h-auto lg:h-[227px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[32px] flex flex-col justify-between gap-6 lg:gap-0">
                            <div className="w-[56px] h-[56px] rounded-[14px] bg-gradient-to-br from-[#2A85F4] to-[#5B47F5] text-white flex items-center justify-center shadow-[0_8px_16px_#2A85F440]">
                                <Target size={28} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-[#153965] text-[22px] font-[700] leading-[28px]">Maqsadimiz</h3>
                                <p className="text-[#65758B] text-[15px] font-[400] leading-[24px] mt-[8px]">
                                    Talabalar va olimlarga jahon ilmiy resurslariga cheksiz kirish imkonini yaratish.
                                </p>
                            </div>
                        </div>

                        <div className="h-auto lg:h-[227px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[32px] flex flex-col justify-between gap-6 lg:gap-0">
                            <div className="w-[56px] h-[56px] rounded-[14px] bg-gradient-to-br from-[#E8306E] to-[#FF674D] text-white flex items-center justify-center shadow-[0_8px_16px_#E8306E40]">
                                <Compass size={28} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-[#153965] text-[22px] font-[700] leading-[28px]">Vazifamiz</h3>
                                <p className="text-[#65758B] text-[15px] font-[400] leading-[24px] mt-[8px]">
                                    An&apos;anaviy kutubxona xizmatlarini raqamli innovatsiyalar bilan birlashtirish.
                                </p>
                            </div>
                        </div>

                        <div className="h-auto lg:h-[227px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[32px] flex flex-col justify-between gap-6 lg:gap-0">
                            <div className="w-[56px] h-[56px] rounded-[14px] bg-gradient-to-br from-[#8C35E8] to-[#D126C5] text-white flex items-center justify-center shadow-[0_8px_16px_#A72EDB40]">
                                <Sparkles size={28} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-[#153965] text-[22px] font-[700] leading-[28px]">Qadriyatimiz</h3>
                                <p className="text-[#65758B] text-[15px] font-[400] leading-[24px] mt-[8px]">
                                    Bilimga ochiqlik, sifat, doimiy o&apos;sish va akademik halollik.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Xizmatlar */}
            <div className="py-[48px] lg:py-0 lg:h-[478px]">
                <div className="max-w-[1570px] px-4 lg:px-[10px] mx-auto h-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pt-0 lg:pt-[70px] gap-4">
                        <div>
                            <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Xizmatlar</p>
                            <h2 className="text-[#153965] text-[26px] lg:text-[36px] font-[800] leading-[32px] lg:leading-[44px] mt-[8px]">Markaz taklif etadi</h2>
                        </div>
                        <a href="#" className="flex items-center gap-[6px] text-[#2A85F4] text-[14px] font-[700] pb-[6px] shrink-0">
                            Barchasi
                            <ArrowRight size={15} strokeWidth={2.5} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[36px]">
                        <div className="h-auto lg:h-[197px] rounded-[14px] border border-[#D7DEE8] bg-white px-[24px] py-[26px] flex flex-col justify-between gap-4 lg:gap-0">
                            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <BookOpenCheck size={22} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-[#153965] text-[16px] font-[700] leading-[22px]">Elektron katalog</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[20px] mt-[6px]">100 000+ resurs onlayn qidiruv tizimi orqali</p>
                                <ArrowRight size={15} strokeWidth={1.8} className="-rotate-45 text-[#153965] mt-[8px]" />
                            </div>
                        </div>

                        <div className="h-auto lg:h-[197px] rounded-[14px] border border-[#D7DEE8] bg-white px-[24px] py-[26px] flex flex-col justify-between gap-4 lg:gap-0">
                            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <GraduationCap size={22} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-[#153965] text-[16px] font-[700] leading-[22px]">Akademik qo&apos;llab-quvvatlash</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[20px] mt-[6px]">Ilmiy ish va dissertatsiyalar uchun konsultatsiya</p>
                                <ArrowRight size={15} strokeWidth={1.8} className="-rotate-45 text-[#153965] mt-[8px]" />
                            </div>
                        </div>

                        <div className="h-auto lg:h-[197px] rounded-[14px] border border-[#D7DEE8] bg-white px-[24px] py-[26px] flex flex-col justify-between gap-4 lg:gap-0">
                            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <ShieldCheck size={22} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-[#153965] text-[16px] font-[700] leading-[22px]">Xalqaro bazalar</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[20px] mt-[6px]">Scopus, Web of Science, EBSCOhost kirish</p>
                                <ArrowRight size={15} strokeWidth={1.8} className="-rotate-45 text-[#153965] mt-[8px]" />
                            </div>
                        </div>

                        <div className="h-auto lg:h-[197px] rounded-[14px] border border-[#D7DEE8] bg-white px-[24px] py-[26px] flex flex-col justify-between gap-4 lg:gap-0">
                            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <Users size={22} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-[#153965] text-[16px] font-[700] leading-[22px]">O&apos;qish zallari</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[20px] mt-[6px]">8 ta zal, 600+ ish o&apos;rin, kunduzi 24/7 ochiq</p>
                                <ArrowRight size={15} strokeWidth={1.8} className="-rotate-45 text-[#153965] mt-[8px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tariximiz */}
            <div className="w-full bg-[#153965] mb-10 py-[60px] lg:py-0 lg:h-[793px]">
                <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px]">
                    <div className="text-center pt-0 lg:pt-[80px]">
                        <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Tariximiz</p>
                        <h2 className="text-white text-[26px] lg:text-[36px] font-[800] leading-[32px] lg:leading-[44px] mt-[10px]">Asrlarga o&apos;zlashgan yo&apos;l</h2>
                    </div>

                    {/* Mobile timeline */}
                    <div className="lg:hidden flex flex-col gap-[28px] mt-[40px]">
                        {[
                            { year: "1927", text: "SamDU kutubxonasi tashkil etildi" },
                            { year: "1965", text: "Yangi binoga ko'chirildi (5 qavatli)" },
                            { year: "2003", text: "Ilk elektron katalog ishga tushdi" },
                            { year: "2018", text: "Xalqaro ilmiy bazalarga ulanish" },
                            { year: "2024", text: "Yangi raqamli platforma ochilishi" },
                        ].map((item, i, arr) => (
                            <div key={item.year} className="flex items-start gap-[16px]">
                                <div className="flex flex-col items-center shrink-0">
                                    <div className="w-[13px] h-[13px] rounded-full bg-[#2A85F4] shadow-[0_0_12px_#2A85F4] mt-[10px]"></div>
                                    {i < arr.length - 1 && <div className="w-[1px] h-[28px] bg-white/15 mt-[4px]"></div>}
                                </div>
                                <div>
                                    <p className="text-[#2A85F4] text-[28px] font-[800] leading-[32px]">{item.year}</p>
                                    <p className="text-white text-[13px] font-[500] leading-[20px] mt-[4px]">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop timeline */}
                    <div className="hidden lg:block relative w-full h-[508px] mx-auto mt-[52px]">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-white/15"></div>

                        <div className="absolute top-[8px] left-[552px] w-[180px] text-right">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">1927</p>
                        </div>
                        <div className="absolute top-[0px] right-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">SamDU kutubxonasi tashkil etildi</p>
                        </div>

                        <div className="absolute top-[116px] left-[838px] w-[180px]">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">1965</p>
                        </div>
                        <div className="absolute top-[108px] left-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">Yangi binoga ko&apos;chirildi (5 qavatli)</p>
                        </div>

                        <div className="absolute top-[224px] left-[552px] w-[180px] text-right">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">2003</p>
                        </div>
                        <div className="absolute top-[216px] right-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">Ilk elektron katalog ishga tushdi</p>
                        </div>

                        <div className="absolute top-[332px] left-[838px] w-[180px]">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">2018</p>
                        </div>
                        <div className="absolute top-[324px] left-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">Xalqaro ilmiy bazalarga ulanish</p>
                        </div>

                        <div className="absolute top-[440px] left-[552px] w-[180px] text-right">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">2024</p>
                        </div>
                        <div className="absolute top-[432px] right-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">Yangi raqamli platforma ochilishi</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Jamoa */}
            <div className="w-full bg-[#F8FAFC] mb-10 py-[48px] lg:py-0 lg:h-[619px]">
                <div className="max-w-[1570px] px-4 lg:px-[10px] mx-auto">
                    <div className="text-center pt-0 lg:pt-[66px]">
                        <p className="text-[#2A85F4] uppercase text-[12px] font-[800] tracking-[2px] leading-[16px]">Jamoa</p>
                        <h2 className="text-[#153965] text-[28px] lg:text-[40px] font-[800] leading-[34px] lg:leading-[48px] mt-[12px]">Markaz rahbariyati</h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[36px] mt-[50px]">
                        {[
                            { init: "NK", name: "Prof. N. Karimova", role: "Direktor", grad: "from-[#2A85F4] to-[#5B47F5]" },
                            { init: "AY", name: "Dr. A. Yusupov", role: "Direktor o'rinbosari", grad: "from-[#E8306E] to-[#FF674D]" },
                            { init: "MR", name: "M. Rahimova", role: "Bo'lim boshlig'i", grad: "from-[#2BB673] to-[#20C7E6]" },
                            { init: "ST", name: "S. Tursunov", role: "Bosh kutubxonachi", grad: "from-[#FF9518] to-[#FF3E3E]" },
                        ].map((p) => (
                            <div key={p.init} className="rounded-[20px] overflow-hidden bg-white border border-[#D7DEE8]">
                                <div className={`h-[180px] lg:h-[289px] bg-gradient-to-br ${p.grad} flex items-center justify-center`}>
                                    <p className="text-white text-[32px] lg:text-[38px] font-[800]">{p.init}</p>
                                </div>
                                <div className="px-[20px] pt-[18px] pb-[18px]">
                                    <h3 className="text-[#153965] text-[15px] lg:text-[16px] font-[800] leading-[20px]">{p.name}</h3>
                                    <p className="text-[#65758B] text-[13px] font-[400] leading-[18px] mt-[6px]">{p.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote */}
            <div className="w-full mb-10 py-[48px] lg:py-[64px]">
                <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px]">
                    <div className="w-full lg:w-[1280px] lg:mx-auto rounded-[24px] bg-gradient-to-r from-[#102B4C] via-[#2E1F7A] to-[#6A288A] flex flex-col items-center justify-center text-center px-6 lg:px-0 py-12 lg:h-[352px]">
                        <p className="text-[#2A85F4] text-[56px] lg:text-[72px] font-[800] leading-[40px] lg:leading-[54px] mb-[24px] lg:mb-[30px]">"</p>
                        <h2 className="max-w-[790px] text-white text-[20px] lg:text-[30px] font-[800] leading-[28px] lg:leading-[38px]">
                            "Kutubxona — bu xalqning ruhi, millat tafakkurining
                            xazinasidir. Uni asrash va boyitish — hammamizning
                            burchimizdir."
                        </h2>
                        <p className="text-white/60 text-[15px] font-[400] leading-[20px] mt-[24px] lg:mt-[30px]">— Sharof Rashidov</p>
                    </div>
                </div>
            </div>

            {/* Contact us */}
            <div className="w-full bg-[#EBF4FF66] py-[48px] lg:py-0 lg:h-[460px] lg:pt-[80px]">
                <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px] lg:gap-[36px]">
                        <div className="h-auto lg:h-[205px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[28px] lg:pt-[32px]">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <MapPin size={24} strokeWidth={2.2} />
                            </div>
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px] mt-[24px]">Manzil</h3>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px] mt-[6px]">Samarqand sh., Universitet xiyoboni 15</p>
                        </div>

                        <div className="h-auto lg:h-[205px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[28px] lg:pt-[32px]">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <Phone size={24} strokeWidth={2.2} />
                            </div>
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px] mt-[24px]">Telefon</h3>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px] mt-[6px]">+998 66 239 11 40</p>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px]">+998 66 239 12 51</p>
                        </div>

                        <div className="h-auto lg:h-[205px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[28px] lg:pt-[32px]">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <Mail size={24} strokeWidth={2.2} />
                            </div>
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px] mt-[24px]">Elektron pochta</h3>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px] mt-[6px]">info@samdu.uz</p>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px]">library@samdu.uz</p>
                        </div>
                    </div>

                    <div className="h-auto lg:h-[69px] rounded-[20px] border border-[#D7DEE8] bg-white mt-[24px] px-[25px] py-4 lg:py-0 flex flex-wrap items-center gap-[12px] lg:gap-[18px]">
                        <Clock size={20} strokeWidth={2.2} className="text-[#2A85F4] shrink-0" />
                        <p className="text-[#153965] text-[14px] font-[800] leading-[20px]">Ish vaqti:</p>
                        <p className="text-[#65758B] text-[14px] font-[400] leading-[20px]">Dushanba–Juma 8:00–22:00 · Shanba 9:00–18:00 · Yakshanba dam olish</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
