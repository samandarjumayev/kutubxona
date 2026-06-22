
import { ArrowRight, Award, BookOpenCheck, Building2, ChevronRight, Clock, Compass, Download, GraduationCap, Mail, MapPin, Phone, ShieldCheck, Sparkles, Target, Users } from "lucide-react"


export default function Markaz() {
    return (
        <div>
            {/* Hero */}
            <div className="h-[463px] relative bg-gradient-to-r from-[#102B4C] via-[#2E1F7A] to-[#1B2D87]">
                <div className="h-full max-w-[1570px] mx-auto px-[10px] py-10">
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
                        <h1 className="text-white text-[60px] font-[800] leading-[64px] mt-[12px]">
                            SamDU Axborot-resurs
                            <br />
                            <span className="text-[#2A85F4]">markazi</span>
                        </h1>
                        <p className="max-w-[720px] text-white/75 text-[18px] font-[400] leading-[28px] mt-[18px]">
                            Bir asrdan ortiq tarixga ega kutubxona — bugungi kunda zamonaviy raqamli
                            <br />
                            platforma sifatida talabalar, professorlar va tadqiqotchilarga xizmat qilmoqda.
                        </p>
                    </div>
                </div>

                {/* Info component */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-65px] w-[1232px] z-10">
                    <div className="h-[130px] rounded-[20px] bg-white shadow-[0_18px_40px_#15396530] px-[42px] grid grid-cols-4 items-center">
                        <div>
                            <p className="text-[#153965] text-[36px] font-[800] leading-[42px]">1927</p>
                            <p className="uppercase text-[#65758B] text-[12px] font-[500] mt-[8px]">Tashkil etilgan</p>
                        </div>
                        <div>
                            <p className="text-[#153965] text-[36px] font-[800] leading-[42px]">100K+</p>
                            <p className="uppercase text-[#65758B] text-[12px] font-[500] mt-[8px]">Kitoblar fondi</p>
                        </div>
                        <div>
                            <p className="text-[#153965] text-[36px] font-[800] leading-[42px]">25K</p>
                            <p className="uppercase text-[#65758B] text-[12px] font-[500] mt-[8px]">Faol o&apos;quvchilar</p>
                        </div>
                        <div>
                            <p className="text-[#153965] text-[36px] font-[800] leading-[42px]">180+</p>
                            <p className="uppercase text-[#65758B] text-[12px] font-[500] mt-[8px]">Xodimlar</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Markaz haqida */}
            <div className="max-w-[1570px] mx-auto px-[10px] h-[895px] pt-[150px] mb-30">
                <div className="grid grid-cols-2 gap-[90px] items-center h-full">
                    {/* Chap qism */}
                    <div>
                        <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Markaz haqida</p>
                        <h2 className="text-[#153965] text-[40px] font-[800] leading-[48px] mt-[10px]">
                            Bilim, ilm va innovatsiyalar
                            <br />
                            markazida
                        </h2>

                        <p className="max-w-[680px] text-[#65758B] text-[17px] font-[400] leading-[26px] mt-[24px]">
                            Sharof Rashidov nomidagi Samarqand davlat universiteti Axborot-resurs
                            markazi — mintaqamizdagi eng yirik akademik kutubxonalardan biri. Bizning
                            maqsadimiz — har bir talabaga, professorga va tadqiqotchiga zamonaviy
                            bilim manbalariga oson va tez kirish imkonini taqdim etish.
                        </p>

                        <p className="max-w-[680px] text-[#65758B] text-[17px] font-[400] leading-[26px] mt-[16px]">
                            Markaz tarkibida fondlari boyitilgan oltita ixtisoslashgan o'qish zali,
                            raqamli laboratoriya, audio-vizual studiya va xalqaro ilmiy bazalarga
                            ulangan tadqiqotchilar maydoni faoliyat yuritadi.
                        </p>

                        <div className="flex items-center gap-[12px] mt-[30px]">
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
                    <div className="relative h-full flex items-center justify-end">
                        <div className="absolute -top-[40px] -right-[49px] w-[118px] h-[118px] rounded-full bg-[#EBF4FF]"></div>
                        <div className="absolute left-9 -bottom-9 w-[152px] h-[152px] rounded-[24px] bg-[#2A85F4] shadow-[0_18px_35px_#2A85F440]"></div>

                        <div className="relative w-[648px] h-[735px] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#153965] via-[#2E1F7A] to-[#6A288A]">
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
            <div className="h-[505px] bg-[#EBF4FF66]">
                <div className="max-w-[1570px] px-[10px] mx-auto h-full">
                    {/* Title */}
                    <div className="text-center pt-[70px]">
                        <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Qadriyatlarimiz</p>
                        <h2 className="text-[#153965] text-[36px] font-[800] leading-[44px] mt-[8px]">Bizni harakatga keltiradigan g&apos;oyalar</h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-3 gap-[24px] mt-[50px]">
                        {/* Card 1 */}
                        <div className="h-[227px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[32px] flex flex-col justify-between">
                            <div className="w-[56px] h-[56px] rounded-[14px] bg-gradient-to-br from-[#2A85F4] to-[#5B47F5] text-white flex items-center justify-center shadow-[0_8px_16px_#2A85F440]">
                                <Target size={28} strokeWidth={2} />
                            </div>

                            <div>
                                <h3 className="text-[#153965] text-[22px] font-[700] leading-[28px]">Maqsadimiz</h3>
                                <p className="text-[#65758B] text-[15px] font-[400] leading-[24px] mt-[8px]">
                                    Talabalar va olimlarga jahon ilmiy resurslariga
                                    <br />
                                    cheksiz kirish imkonini yaratish.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="h-[227px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[32px] flex flex-col justify-between">
                            <div className="w-[56px] h-[56px] rounded-[14px] bg-gradient-to-br from-[#E8306E] to-[#FF674D] text-white flex items-center justify-center shadow-[0_8px_16px_#E8306E40]">
                                <Compass size={28} strokeWidth={2} />
                            </div>

                            <div>
                                <h3 className="text-[#153965] text-[22px] font-[700] leading-[28px]">Vazifamiz</h3>
                                <p className="text-[#65758B] text-[15px] font-[400] leading-[24px] mt-[8px]">
                                    An&apos;anaviy kutubxona xizmatlarini raqamli
                                    <br />
                                    innovatsiyalar bilan birlashtirish.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="h-[227px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] py-[32px] flex flex-col justify-between">
                            <div className="w-[56px] h-[56px] rounded-[14px] bg-gradient-to-br from-[#8C35E8] to-[#D126C5] text-white flex items-center justify-center shadow-[0_8px_16px_#A72EDB40]">
                                <Sparkles size={28} strokeWidth={2} />
                            </div>

                            <div>
                                <h3 className="text-[#153965] text-[22px] font-[700] leading-[28px]">Qadriyatimiz</h3>
                                <p className="text-[#65758B] text-[15px] font-[400] leading-[24px] mt-[8px]">
                                    Bilimga ochiqlik, sifat, doimiy o&apos;sish va akademik
                                    <br />
                                    halollik.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Xizmatlar */}
            <div className="h-[478px]">
                <div className="max-w-[1570px] px-[10px] mx-auto h-full">
                    {/* Title */}
                    <div className="flex items-end justify-between pt-[70px]">
                        <div>
                            <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Xizmatlar</p>
                            <h2 className="text-[#153965] text-[36px] font-[800] leading-[44px] mt-[8px]">Markaz taklif etadi</h2>
                        </div>

                        <a href="#" className="flex items-center gap-[6px] text-[#2A85F4] text-[14px] font-[700] pb-[6px]">
                            Barchasi
                            <ArrowRight size={15} strokeWidth={2.5} />
                        </a>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-4 gap-[24px] mt-[36px]">
                        {/* Card 1 */}
                        <div className="h-[197px] rounded-[14px] border border-[#D7DEE8] bg-white px-[24px] py-[26px] flex flex-col justify-between">
                            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <BookOpenCheck size={22} strokeWidth={2} />
                            </div>

                            <div>
                                <h3 className="text-[#153965] text-[16px] font-[700] leading-[22px]">Elektron katalog</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[20px] mt-[6px]">100 000+ resurs onlayn qidiruv tizimi orqali</p>
                                <ArrowRight size={15} strokeWidth={1.8} className="-rotate-45 text-[#153965] mt-[8px]" />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="h-[197px] rounded-[14px] border border-[#D7DEE8] bg-white px-[24px] py-[26px] flex flex-col justify-between">
                            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <GraduationCap size={22} strokeWidth={2} />
                            </div>

                            <div>
                                <h3 className="text-[#153965] text-[16px] font-[700] leading-[22px]">Akademik qo&apos;llab-quvvatlash</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[20px] mt-[6px]">
                                    Ilmiy ish va dissertatsiyalar uchun
                                    <br />
                                    konsultatsiya
                                </p>
                                <ArrowRight size={15} strokeWidth={1.8} className="-rotate-45 text-[#153965] mt-[8px]" />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="h-[197px] rounded-[14px] border border-[#D7DEE8] bg-white px-[24px] py-[26px] flex flex-col justify-between">
                            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <ShieldCheck size={22} strokeWidth={2} />
                            </div>

                            <div>
                                <h3 className="text-[#153965] text-[16px] font-[700] leading-[22px]">Xalqaro bazalar</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[20px] mt-[6px]">Scopus, Web of Science, EBSCOhost kirish</p>
                                <ArrowRight size={15} strokeWidth={1.8} className="-rotate-45 text-[#153965] mt-[8px]" />
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="h-[197px] rounded-[14px] border border-[#D7DEE8] bg-white px-[24px] py-[26px] flex flex-col justify-between">
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
            <div className="h-[793px] w-full bg-[#153965] mb-10">
                <div className="h-full max-w-[1570px] mx-auto">
                    {/* Title */}
                    <div className="text-center pt-[80px]">
                        <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Tariximiz</p>
                        <h2 className="text-white text-[36px] font-[800] leading-[44px] mt-[10px]">Asrlarga o&apos;zlashgan yo&apos;l</h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative w-full h-[508px] mx-auto mt-[52px]">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-white/15"></div>

                        {/* 1927 */}
                        <div className="absolute top-[8px] left-[552px] w-[180px] text-right">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">1927</p>
                        </div>
                        <div className="absolute top-[0px] right-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">SamDU kutubxonasi tashkil etildi</p>
                        </div>

                        {/* 1965 */}
                        <div className="absolute top-[116px] left-[838px] w-[180px]">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">1965</p>
                        </div>
                        <div className="absolute top-[108px] left-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">Yangi binoga ko&apos;chirildi (5 qavatli)</p>
                        </div>

                        {/* 2003 */}
                        <div className="absolute top-[224px] left-[552px] w-[180px] text-right">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">2003</p>
                        </div>
                        <div className="absolute top-[216px] right-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">Ilk elektron katalog ishga tushdi</p>
                        </div>

                        {/* 2018 */}
                        <div className="absolute top-[332px] left-[838px] w-[180px]">
                            <p className="text-[#2A85F4] text-[36px] font-[800] leading-[42px]">2018</p>
                        </div>
                        <div className="absolute top-[324px] left-0 w-[732px] h-[76px] rounded-[14px] border border-white/10 bg-white/5 px-[24px] flex items-center">
                            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-[#2A85F4] shadow-[0_0_14px_#2A85F4]"></span>
                            <p className="text-white text-[12px] font-[500] leading-[16px]">Xalqaro ilmiy bazalarga ulanish</p>
                        </div>

                        {/* 2024 */}
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
            <div className="h-[619px] w-full bg-[#F8FAFC] mb-10">
                <div className="h-full max-w-[1570px] px-[10px] mx-auto">
                    <div className="text-center pt-[66px]">
                        <p className="text-[#2A85F4] uppercase text-[12px] font-[800] tracking-[2px] leading-[16px]">Jamoa</p>
                        <h2 className="text-[#153965] text-[40px] font-[800] leading-[48px] mt-[12px]">Markaz rahbariyati</h2>
                    </div>

                    <div className="grid grid-cols-4 gap-[36px] mt-[50px]">
                        <div className="h-[374px] rounded-[20px] overflow-hidden bg-white border border-[#D7DEE8]">
                            <div className="h-[289px] bg-gradient-to-br from-[#2A85F4] to-[#5B47F5] flex items-center justify-center">
                                <p className="text-white text-[38px] font-[800] leading-[44px]">NK</p>
                            </div>
                            <div className="h-[85px] px-[20px] pt-[22px]">
                                <h3 className="text-[#153965] text-[16px] font-[800] leading-[20px]">Prof. N. Karimova</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[18px] mt-[6px]">Direktor</p>
                            </div>
                        </div>

                        <div className="h-[374px] rounded-[20px] overflow-hidden bg-white border border-[#D7DEE8]">
                            <div className="h-[289px] bg-gradient-to-br from-[#E8306E] to-[#FF674D] flex items-center justify-center">
                                <p className="text-white text-[38px] font-[800] leading-[44px]">AY</p>
                            </div>
                            <div className="h-[85px] px-[20px] pt-[22px]">
                                <h3 className="text-[#153965] text-[16px] font-[800] leading-[20px]">Dr. A. Yusupov</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[18px] mt-[6px]">Direktor o&apos;rinbosari</p>
                            </div>
                        </div>

                        <div className="h-[374px] rounded-[20px] overflow-hidden bg-white border border-[#D7DEE8]">
                            <div className="h-[289px] bg-gradient-to-br from-[#2BB673] to-[#20C7E6] flex items-center justify-center">
                                <p className="text-white text-[38px] font-[800] leading-[44px]">MR</p>
                            </div>
                            <div className="h-[85px] px-[20px] pt-[22px]">
                                <h3 className="text-[#153965] text-[16px] font-[800] leading-[20px]">M. Rahimova</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[18px] mt-[6px]">Bo&apos;lim boshlig&apos;i</p>
                            </div>
                        </div>

                        <div className="h-[374px] rounded-[20px] overflow-hidden bg-white border border-[#D7DEE8]">
                            <div className="h-[289px] bg-gradient-to-br from-[#FF9518] to-[#FF3E3E] flex items-center justify-center">
                                <p className="text-white text-[38px] font-[800] leading-[44px]">ST</p>
                            </div>
                            <div className="h-[85px] px-[20px] pt-[22px]">
                                <h3 className="text-[#153965] text-[16px] font-[800] leading-[20px]">S. Tursunov</h3>
                                <p className="text-[#65758B] text-[13px] font-[400] leading-[18px] mt-[6px]">Bosh kutubxonachi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            {/* Quote */}
            <div className="w-full mb-10 py-[64px]">
                <div className="h-full max-w-[1570px] mx-auto ">
                    <div className="w-[1280px] h-[352px] mx-auto rounded-[24px] bg-gradient-to-r from-[#102B4C] via-[#2E1F7A] to-[#6A288A] flex flex-col items-center justify-center text-center">
                        <p className="text-[#2A85F4] text-[72px] font-[800] leading-[54px] mb-[30px]">”</p>
                        <h2 className="max-w-[790px] text-white text-[30px] font-[800] leading-[38px]">
                            "Kutubxona — bu xalqning ruhi, millat tafakkurining
                            <br />
                            xazinasidir. Uni asrash va boyitish — hammamizning
                            <br />
                            burchimizdir."
                        </h2>
                        <p className="text-white/60 text-[15px] font-[400] leading-[20px] mt-[30px]">— Sharof Rashidov</p>
                    </div>
                </div>
            </div>

            {/* Contact us */}
            <div className="h-[460px] w-full bg-[#EBF4FF66] pt-[80px]">
                <div className="h-full max-w-[1570px] mx-auto">
                    <div className="grid grid-cols-3 gap-[36px]">
                        <div className="h-[205px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] pt-[32px]">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <MapPin size={24} strokeWidth={2.2} />
                            </div>
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px] mt-[24px]">Manzil</h3>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px] mt-[6px]">Samarqand sh., Universitet xiyoboni 15</p>
                        </div>

                        <div className="h-[205px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] pt-[32px]">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <Phone size={24} strokeWidth={2.2} />
                            </div>
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px] mt-[24px]">Telefon</h3>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px] mt-[6px]">+998 66 239 11 40</p>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px]">+998 66 239 12 51</p>
                        </div>

                        <div className="h-[205px] rounded-[20px] border border-[#D7DEE8] bg-white px-[32px] pt-[32px]">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                                <Mail size={24} strokeWidth={2.2} />
                            </div>
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px] mt-[24px]">Elektron pochta</h3>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px] mt-[6px]">info@samdu.uz</p>
                            <p className="text-[#65758B] text-[14px] font-[400] leading-[22px]">library@samdu.uz</p>
                        </div>
                    </div>

                    <div className="h-[69px] rounded-[20px] border border-[#D7DEE8] bg-white mt-[24px] px-[25px] flex items-center gap-[18px]">
                        <Clock size={20} strokeWidth={2.2} className="text-[#2A85F4]" />
                        <p className="text-[#153965] text-[14px] font-[800] leading-[20px]">Ish vaqti:</p>
                        <p className="text-[#65758B] text-[14px] font-[400] leading-[20px]">Dushanba–Juma 8:00–22:00 · Shanba 9:00–18:00 · Yakshanba dam olish</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
