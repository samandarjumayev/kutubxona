import { ArrowRight, Bookmark, BookOpen, ChevronLeft, ChevronRight, Code2, Headphones, Library, Newspaper, PenTool, Star, TrendingUp } from "lucide-react";
import Image from "next/image";


export default function Home() {

  const products = [
    {
      img: '/products/huquqshunoslik.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    },
    {
      img: '/products/kecha_va_kunduz.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    },
    {
      img: '/public/products/yulduzli_tunlar.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    },
    {
      img: '/products/jinoyat_va_jazo.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    },
    {
      img: '/products/kichkina_shahzoda.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    },
    {
      img: '/products/kichkina_shahzoda.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    },
    {
      img: '/products/yulduzli_tunlar.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    }, 
    {
      img: '/products/huquqshunoslik.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    },
    {
      img: '/products/kecha_va_kunduz.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    }, 
    {
      img: '/products/jinoyat_va_jazo.png', rate: 4.8, subtitle: "Adabiyot", title: "Yulduzli tunlar. Tarixiy roman.", author: "Primqul Qodirov • 2006", badge: "Bepul"
    },
  ]

  return (
    <div className="">

      {/* 📦 Hero Section Start 📦 */}
      <div className="h-[759px] relative">
        <div className="flex items-center justify-between gap-5 max-w-[1570px] mx-auto px-[10px] text-white h-full">
          {/* Chap qism */}
          <div className="flex-1 h-[572px] flex flex-col justify-center gap-[24px]">
            <p className="uppercase text-[#64748B] text-[12px] font-[700] leading-[16px]">sharof rashidov nomidagi Samarqand davlat universiteti</p>
            <h1 className="text-[72px] font-[800] leading-[76px]">
              Elektron  Kutubxona
              <br />
              <span className="text-[#266BE3]">Boshqaruv Tizimi</span>
            </h1>
            <p className="text-[#FCF8FF] h-auto size-[20px] font-[300] w-[80%]">100,000+ kitob, ilmiy maqolalar va audiokitoblardan iborat raqamli kutubxonaga xush kelibsiz. O'qing, eshiting, kashf eting.</p>

            {/* Tugmalar */}
            <div className="flex items-center gap-3">
              <button className="px-[24px] py-[10px] rounded-[28px] text-white bg-[#0439A1] border border-[#0439A1] cursor-pointer active:scale-95 transition-all duration-150 active:duration-75">Bepul boshlang</button>
              <button className="px-[24px] py-[10px] rounded-[28px] border text-white cursor-pointer active:scale-95 transition-all duration-150 active:duration-75">O'qishni boshlash</button>
            </div>

            {/* Dashed lin */}
            <div className="border-b-2 w-full border-dashed border-[#FCF8FF] mt-9"></div>

            <div className="h-[88px] flex items-end gap-[32px]">
              <div className="flex flex-col">
                <p className="text-[28px] font-[700] leading-[28px]">65K+</p>
                <p className="text-[12px] text-[#FCF8FF]">Kitoblar</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[28px] font-[700] leading-[28px]">24</p>
                <p className="text-[12px] text-[#FCF8FF]">Janrlar</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[28px] font-[700] leading-[28px]">10K</p>
                <p className="text-[12px] text-[#FCF8FF]">O'quvchilar</p>
              </div>
            </div>
          </div>

          {/* O'ng qism */}
          <div className="flex-1 h-[572px] flex flex-col justify-between pt-[22px]">
            <div className="flex items-end justify-end gap-[8px] h-[226px]">
              <div className="group w-[100px] h-[164px] hover:h-[174px] rounded-t-[3px] bg-gradient-to-b from-[#8B2252] to-[#4A1230] hover:from-[#f14492] hover:to-[#d7337d] hover:shadow-[0_0_24px_#C93778] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#F8EAF2] group-hover:text-black transition-colors duration-300">Adabiyot</p>
              </div>
              <div className="group w-[101px] h-[196px] hover:h-[206px] rounded-t-[3px] bg-gradient-to-b from-[#29447A] to-[#0D2545] hover:from-[#f14492] hover:to-[#d7337d] hover:shadow-[0_0_24px_#3F65B0] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#EEF4FF] group-hover:text-black transition-colors duration-300">Matematika</p>
              </div>
              <div className="group w-[100px] h-[138px] hover:h-[148px] rounded-t-[3px] bg-gradient-to-b from-[#2D6A2D] to-[#15351A] hover:from-[#5fdd5f] hover:to-[#439d43] hover:shadow-[0_0_24px_#3D8E3D] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#EEFFEE] group-hover:text-black transition-colors duration-300">Fizika</p>
              </div>
              <div className="group w-[100px] h-[226px] hover:h-[236px] rounded-t-[3px] bg-gradient-to-b from-[#8A5A1A] to-[#3A2A1A] hover:from-[#e8982f] hover:to-[#f8a334] hover:shadow-[0_0_24px_#B97825] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#FFF1D8] group-hover:text-black transition-colors duration-300">Dasturlash</p>
              </div>
              <div className="group w-[100px] h-[165px] hover:h-[175px] rounded-t-[3px] bg-gradient-to-b from-[#4A1A6A] to-[#25083A] hover:from-[#aa3de9] hover:to-[#782aac] hover:shadow-[0_0_24px_#70289B] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#F6EAFE] group-hover:text-black transition-colors duration-300">Olimlar</p>
              </div>
              <div className="group w-[100px] h-[196px] hover:h-[206px] rounded-t-[3px] bg-gradient-to-b from-[#1A5A5A] to-[#0A2E2E] hover:from-[#39c5c5] hover:to-[#278585] hover:shadow-[0_0_24px_#257F7F] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#E9FFFF] group-hover:text-black transition-colors duration-300">Dunyo siyosati</p>
              </div>
            </div>

            <div className="w-[641px] self-end h-[10px] bg-[#2A1E0E]"></div>

            <div className="flex items-end justify-end gap-[8px] h-[260px]">
              <div className="group w-[100px] h-[193px] hover:h-[203px] rounded-t-[3px] bg-gradient-to-b from-[#8A5A1A] to-[#3A2A1A] hover:from-[#e8982f] hover:to-[#f8a334] hover:shadow-[0_0_24px_#B97825] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#FFF1D8] group-hover:text-black transition-colors duration-300">Tarix</p>
              </div>
              <div className="group w-[101px] h-[160px] hover:h-[170px] rounded-t-[3px] bg-gradient-to-b from-[#2D6A2D] to-[#15351A] hover:from-[#5fdd5f] hover:to-[#439d43] hover:shadow-[0_0_24px_#3D8E3D] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#EEFFEE] group-hover:text-black transition-colors duration-300">Maqolalar</p>
              </div>
              <div className="group w-[100px] h-[222px] hover:h-[232px] rounded-t-[3px] bg-gradient-to-b from-[#8B2252] to-[#4A1230] hover:from-[#f14492] hover:to-[#d7337d] hover:shadow-[0_0_24px_#C93778] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#F8EAF2] group-hover:text-black transition-colors duration-300">Jadidlar</p>
              </div>
              <div className="group w-[100px] h-[178px] hover:h-[188px] rounded-t-[3px] bg-gradient-to-b from-[#29447A] to-[#0D2545] hover:from-[#f14492] hover:to-[#d7337d] hover:shadow-[0_0_24px_#3F65B0] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#EEF4FF] group-hover:text-black transition-colors duration-300">Arxitektura</p>
              </div>
              <div className="group w-[100px] h-[207px] hover:h-[217px] rounded-t-[3px] bg-gradient-to-b from-[#8A5A1A] to-[#3A2A1A] hover:from-[#e8982f] hover:to-[#f8a334] hover:shadow-[0_0_24px_#B97825] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#FFF1D8] group-hover:text-black transition-colors duration-300">Jamiyat va siyosat</p>
              </div>
              <div className="group w-[100px] h-[149px] hover:h-[159px] rounded-t-[3px] bg-gradient-to-b from-[#4A1A6A] to-[#25083A] hover:from-[#aa3de9] hover:to-[#782aac] hover:shadow-[0_0_24px_#70289B] flex items-end justify-center pb-[12px] cursor-pointer transition-all duration-500 hover:duration-300">
                <p className="[writing-mode:vertical-rl] rotate-180 text-[13px] text-[#F6EAFE] group-hover:text-black transition-colors duration-300">San'at</p>
              </div>
            </div>

            <div className="w-[641px] self-end h-[10px] bg-[#2A1E0E]"></div>
          </div>
        </div>

        {/* Bg rasm uchun */}
        <div className="absolute w-full h-full top-0 left-0 -z-10">
          <Image src={`/hero_bg.png`} alt="Hero bg" fill />
        </div>
        {/* Blur bg uchun */}
        <div className="absolute left-0 top-0 w-full h-full -z-5 bg-[#001E40D9]"></div>

      </div>
      {/* 📦 Hero Section End 📦 */}



      {/* 📦 Tavsiya etilgan kitoblar Start 📦 */}
      <div className="max-w-[1570px] px-[10px] mx-auto py-10">
        <h2 className="text-[#153965] text-[32px] font-[700] mb-[28px]">Tavsiya etilgan kitoblar</h2>

        {/* Products */}
        <div className="grid grid-cols-5 gap-x-[50px] gap-y-[32px]">
          {products.map((item, index) => {
            return (
              <div key={index} className="w-[272px] h-[450px] flex flex-col">
                <div className="relative w-full h-[374px] rounded-tr-[8px] rounded-br-[8px] overflow-hidden">
                  <Image src={item.img} fill alt={item.title} className="object-cover" />

                  <div className="absolute top-[10px] right-[10px] px-[10px] py-[4px] rounded-[14px] bg-[#D29343]">
                    <p className="uppercase text-white text-[10px] font-[700] leading-[12px]">{item.badge}</p>
                  </div>
                </div>

                <div className="flex-1 relative flex flex-col items-start justify-end">
                  <div className="flex items-center justify-between gap-2 w-full">
                    <p className="text-[14px] font-[400]">{item.subtitle}</p>
                    <div className="flex items-center gap-2 text-[12px] font-[500]">
                      <p className="text-[#F59E0B] text-[18px] leading-[18px]">
                        <Star size={13} fill="#F59E0B" />
                      </p>
                      {item.rate}
                    </div>
                  </div>
                  <h3 className="text-[#1F2330] text-[18px] font-[700] leading-[22px]">{item.title}</h3>
                  <p className="text-[#464652] text-[12px] font-[400] leading-[18px] mt-[4px]">{item.author}</p>
                </div>
              </div>
            )
          })}
        </div>


      </div>
      {/* 📦 Tavsiya etilgan kitoblar End 📦 */}


      {/* 📦 Kutubxonadan yangiliklar 📦 */}
      <div className="mb-10 max-w-[1570px] mx-auto px-[10px] border-blue-500 py-[48px]">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#2A85F4] uppercase text-[12px] font-[700]">So'ngi yangiliklar</p>
              <h3 className="text-[#153965] text-[30px] font-[800]">Kutubxona yangiliklari</h3>
              <p className="text-[#65758B] text-[14px] font-[400]">Yangi tadbirlar, nashrlar va e'lonlardan birinchi bo'lib xabardor bo'ling</p>
            </div>
            
            <a href="#" className="flex items-center gap-1 text-[#2A85F4] text-[14px] font-[700] border-b-2 border-white/0 hover:underline hover:border-b-[#2A85F4]">
              Barcha yangiliklar
              <ArrowRight size={14} strokeWidth={3} />
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-[36px] mt-[36px] items-start">
            {/* Card 1 */}
            <div className="relative h-[480px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#102B4C] via-[#2E1F7A] to-[#6A288A] text-white px-[32px] py-[28px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>

              <div className="relative flex items-center justify-between">
                <p className="uppercase text-[11px] font-[700] tracking-[1px] px-[14px] py-[6px] rounded-[20px] bg-white/15">Yangilik</p>
                <ArrowRight size={26} strokeWidth={1.5} className="-rotate-45 text-white/80" />
              </div>

              <div className="relative">
                <h4 className="max-w-[390px] text-[32px] font-[800] leading-[36px]">
                  Kutubxonaga 5 000+
                  <br />
                  yangi ilmiy maqola
                  <br />
                  qo'shildi.
                </h4>
                <p className="max-w-[390px] text-[15px] font-[400] leading-[24px] text-white/75 mt-[14px]">
                  SamDU professorlari tomonidan tayyorlangan
                  <br />
                  yangi nashrlar barcha foydalanuvchilar uchun
                  <br />
                  ochiq kirimga qo'yildi.
                </p>

                <div className="flex items-center gap-[18px] text-[13px] font-[400] text-white/75 mt-[22px]">
                  <p>28 Apr 2026</p>
                  <span className="w-[4px] h-[4px] rounded-full bg-white/60"></span>
                  <p>4 daqiqa</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[228px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#E8306E] to-[#F57A3D] text-white px-[24px] py-[24px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>

              <div className="relative">
                <p className="inline-block uppercase text-[10px] font-[700] tracking-[1px] px-[12px] py-[5px] rounded-[20px] bg-white/15">Tadbir</p>
              </div>

              <div className="relative">
                <h4 className="text-[19px] font-[700] leading-[24px]">
                  Halqaro kitobxonlar haftaligi
                  <br />
                  boshlanmoqda
                </h4>
                <p className="text-[12px] font-[400] leading-[17px] text-white/75 mt-[6px]">
                  Mehmon yozuvchilar bilan jonli muloqot, kitob taqdimotlari va viktorinalar.
                </p>

                <div className="flex items-center justify-between text-[12px] font-[400] text-white/75 mt-[12px]">
                  <p>5 May 2026</p>
                  <ArrowRight size={20} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-[228px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#28AF60] to-[#1AC3E6] text-white px-[24px] py-[24px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>

              <div className="relative">
                <p className="inline-block uppercase text-[10px] font-[700] tracking-[1px] px-[12px] py-[5px] rounded-[20px] bg-white/15">E&apos;lon</p>
              </div>

              <div className="relative">
                <h4 className="text-[19px] font-[700] leading-[24px]">Audio-kitoblar bo'limi yangilandi</h4>
                <p className="text-[12px] font-[400] leading-[17px] text-white/75 mt-[6px]">
                  Endi 1200+ asarni ovozli formatda tinglashingiz mumkin.
                </p>

                <div className="flex items-center justify-between text-[12px] font-[400] text-white/75 mt-[12px]">
                  <p>22 Apr 2026</p>
                  <ArrowRight size={20} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Trendda */}
      <div className="h-[594px] bg-[#153965] mb-10">
        <div className="max-w-[1570px] mx-auto px-[10px] py-[48px]">
          <div className="flex items-end justify-between">
            <div>
              <p className="inline-block uppercase text-white text-[11px] font-[700] tracking-[1px] px-[14px] py-[6px] rounded-[20px] bg-white/10">
                Trendda
              </p>
              <h2 className="text-white text-[36px] font-[800] leading-[44px] mt-[14px]">Bu hafta eng ko'p o'qilayotgan kitoblar</h2>
              <p className="text-white/60 text-[14px] font-[400] leading-[20px] mt-[4px]">
                Kitobxonlar tomonidan tanlangan eng yuqori reytingli asarlar
                <br />
                to'plami
              </p>
            </div>

            <div className="flex items-center gap-[10px] pb-[4px]">
              <button className="w-[44px] h-[44px] rounded-full border border-white/20 text-white text-[28px] font-[300] flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-150">
                <ChevronLeft />
              </button>
              <button className="w-[44px] h-[44px] rounded-full bg-[#2A85F4] text-white text-[28px] font-[300] flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-150">
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Trenddagi kitoblar */}
          <div className="flex items-start justify-between gap-[24px] mt-[36px]">
            {products.slice(0, 7).map((item, index) => {
              return (
                <div key={index} className="w-[186px] shrink-0">
                  <div className="relative w-[186px] h-[247px] rounded-[16px] overflow-hidden bg-[#102B4C]">
                    <div className="relative w-[186px] h-[248px]">
                      <Image src={item.img.replace("/public", "")} fill alt={item.title} className="object-cover" />
                    </div>

                    <div className="absolute top-[12px] left-[12px] z-1">
                      {(index === 0 || index === 2 || index === 5) && (
                        <p className="uppercase text-[#153965] text-[10px] font-[800] leading-[18px] px-[10px] rounded-[12px] bg-white">
                          {index === 0 ? "Top" : index === 5 ? "Yangi" : "Hit"}
                        </p>
                      )}
                    </div>

                    <button className="absolute top-[12px] right-[12px] w-[34px] h-[34px] rounded-full bg-white/20 text-white text-[20px] flex items-center justify-center cursor-pointer z-1">
                      <Bookmark size={18} strokeWidth={2} />
                    </button>

                    <div className="absolute left-0 bottom-0 w-full h-[78px] px-[16px] pb-[14px] flex flex-col justify-end z-1">
                      <p className="text-[#FFFFFF] text-[10px] font-[700]">#{index + 1}</p>
                      <h3 className="text-white text-[14px] font-[700] leading-[18px] line-clamp-1">{item.title}</h3>
                    </div>

                    {/* blur */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-black/0"></div>
                  </div>

                  <div className="mt-[10px]">
                    <div className="flex items-center justify-between gap-[8px]">
                      <p className="text-white/70 text-[12px] font-[400] leading-[18px] truncate">{item.author}</p>
                      <div className="flex items-center gap-[4px] text-[#FACC15] text-[12px] font-[700] shrink-0">
                        <Star size={12} fill="#FACC15" />
                        <p>{item.rate}</p>
                      </div>
                    </div>
                    <p className="text-white/50 text-[11px] font-[400] leading-[16px] mt-[2px]">{(6.4 + index * 0.8).toFixed(1)}k o&apos;qishlar</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Kategoriyalar */}
      <div className="h-[373px] mb-10">
        <div className="max-w-[1570px] px-[10px] mx-auto h-full">
          {/* Title */}
          <div className="flex items-end justify-between pt-[48px]">
            <div>
              <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Kategoriyalar</p>
              <h2 className="text-[#153965] text-[30px] font-[800] leading-[38px] mt-[6px]">O'zingizga mos bo'limni tanlang</h2>
              <p className="text-[#65758B] text-[14px] font-[400] leading-[20px] mt-[4px]">Ilm va adabiyotning barcha sohalari bir joyda</p>
            </div>

            <a href="#" className="flex items-center gap-[6px] text-[#2A85F4] text-[14px] font-[700] pb-[4px]">
              Barchasi
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>

          {/* Kategoriya cardlar */}
          <div className="grid grid-cols-6 gap-[32px] mt-[30px]">
            {/* Card 1 */}
            <div className="relative h-[148px] border border-[#D7DEE8] rounded-[12px] px-[18px] py-[20px] flex flex-col justify-between hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 hover:duration-150">
              <ArrowRight size={13} strokeWidth={1.5} className="absolute top-[14px] right-[14px] -rotate-45 text-[#153965]" />
              <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[#E8306E] to-[#FF674D] text-white flex items-center justify-center shadow-[0_6px_12px_#E8306E40]">
                <BookOpen size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[#153965] text-[16px] font-[700]">Adabiyot</h3>
                <p className="text-[#65758B] text-[12px] font-[400]">12 480 ta resurs</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[148px] border border-[#D7DEE8] rounded-[12px] px-[18px] py-[20px] flex flex-col justify-between hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 hover:duration-150">
              <ArrowRight size={13} strokeWidth={1.5} className="absolute top-[14px] right-[14px] -rotate-45 text-[#153965]" />
              <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[#2A85F4] to-[#5B47F5] text-white flex items-center justify-center shadow-[0_6px_12px_#2A85F440]">
                <Newspaper size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[#153965] text-[16px] font-[700]">Ilmiy maqolalar</h3>
                <p className="text-[#65758B] text-[12px] font-[400]">8 240 ta resurs</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-[148px] border border-[#D7DEE8] rounded-[12px] px-[18px] py-[20px] flex flex-col justify-between hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 hover:duration-150">
              <ArrowRight size={13} strokeWidth={1.5} className="absolute top-[14px] right-[14px] -rotate-45 text-[#153965]" />
              <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[#FF8A24] to-[#FF4F3D] text-white flex items-center justify-center shadow-[0_6px_12px_#FF6B3040]">
                <Library size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[#153965] text-[16px] font-[700]">Tarix</h3>
                <p className="text-[#65758B] text-[12px] font-[400]">4 130 ta resurs</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative h-[148px] border border-[#D7DEE8] rounded-[12px] px-[18px] py-[20px] flex flex-col justify-between hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 hover:duration-150">
              <ArrowRight size={13} strokeWidth={1.5} className="absolute top-[14px] right-[14px] -rotate-45 text-[#153965]" />
              <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[#168DE2] to-[#075BDE] text-white flex items-center justify-center shadow-[0_6px_12px_#168DE240]">
                <Code2 size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[#153965] text-[16px] font-[700]">Dasturlash</h3>
                <p className="text-[#65758B] text-[12px] font-[400]">2 760 ta resurs</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative h-[148px] border border-[#D7DEE8] rounded-[12px] px-[18px] py-[20px] flex flex-col justify-between hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 hover:duration-150">
              <ArrowRight size={13} strokeWidth={1.5} className="absolute top-[14px] right-[14px] -rotate-45 text-[#153965]" />
              <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[#8C35E8] to-[#D126C5] text-white flex items-center justify-center shadow-[0_6px_12px_#A72EDB40]">
                <Headphones size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[#153965] text-[16px] font-[700]">Audio kitoblar</h3>
                <p className="text-[#65758B] text-[12px] font-[400]">1 200 ta resurs</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="relative h-[148px] border border-[#D7DEE8] rounded-[12px] px-[18px] py-[20px] flex flex-col justify-between hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 hover:duration-150">
              <ArrowRight size={13} strokeWidth={1.5} className="absolute top-[14px] right-[14px] -rotate-45 text-[#153965]" />
              <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[#22B573] to-[#0DBBC4] text-white flex items-center justify-center shadow-[0_6px_12px_#18B99B40]">
                <PenTool size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[#153965] text-[16px] font-[700]">Mualliflar</h3>
                <p className="text-[#65758B] text-[12px] font-[400]">640 ta resurs</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Yangi qo'shilganlar */}
      <div className="w-full h-[616px] py-10">
        <div className="h-full max-w-[1570px] mx-auto px-[10px]">
          {/* Title */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Yangi qo'shildi</p>
              <h2 className="text-[#153965] text-[30px] font-[800] leading-[36px] mt-[6px]">So'nggi qo'shilgan asarlar</h2>
            </div>

            <a href="#" className="flex items-center gap-[6px] text-[#2A85F4] text-[14px] font-[700] pb-[4px]">
              Hammasi
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>

          {/* Yangi qo'shilgan kitoblar */}
          <div className="grid grid-cols-4 gap-[24px] mt-[34px]">
            {/* Card 1 */}
            <div className="h-[386px] border border-[#D7DEE8] rounded-[24px] overflow-hidden bg-white hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="relative h-[216px] bg-gradient-to-br from-[#2A85F4] to-[#5B47F5] flex items-center justify-center">
                <p className="absolute top-[14px] right-[14px] uppercase text-white text-[10px] font-[700] px-[12px] py-[5px] rounded-[14px] bg-[#22B573]">Bepul</p>
                <BookOpen size={58} strokeWidth={1.7} className="text-white" />
                <p className="absolute left-[14px] bottom-[12px] text-white text-[10px] font-[500] px-[12px] py-[5px] rounded-[14px] bg-white/20">Dasturlash</p>
              </div>

              <div className="h-[170px] p-[20px] flex flex-col justify-between">
                <h3 className="text-[#153965] text-[17px] font-[700] leading-[22px]">Suniy intellekt asoslari</h3>

                <div className="flex items-center gap-[10px] text-[#65758B]">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#EAF3FF] text-[#2A85F4] text-[9px] font-[700] flex items-center justify-center">DA</div>
                  <p className="text-[12px] font-[400]">Dr. A. Karimov</p>
                </div>

                <div className="border-t border-[#D7DEE8] pt-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[5px] text-[#65758B] text-[12px]">
                    <Star size={14} fill="#F5B800" className="text-[#F5B800]" />
                    <p>4.6</p>
                  </div>
                  <a href="#" className="flex items-center gap-[6px] text-[#2A85F4] text-[12px] font-[700]">
                    O'qish
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="h-[386px] border border-[#D7DEE8] rounded-[24px] overflow-hidden bg-white hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="relative h-[216px] bg-gradient-to-br from-[#28AF60] to-[#1AC3E6] flex items-center justify-center">
                <p className="absolute top-[14px] right-[14px] uppercase text-white text-[10px] font-[700] px-[12px] py-[5px] rounded-[14px] bg-[#18A96B]">Bepul</p>
                <BookOpen size={58} strokeWidth={1.7} className="text-white" />
                <p className="absolute left-[14px] bottom-[12px] text-white text-[10px] font-[500] px-[12px] py-[5px] rounded-[14px] bg-white/20">Fizika</p>
              </div>

              <div className="h-[170px] p-[20px] flex flex-col justify-between">
                <h3 className="text-[#153965] text-[17px] font-[700] leading-[22px]">Zamonaviy fizika</h3>

                <div className="flex items-center gap-[10px] text-[#65758B]">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#EAF3FF] text-[#2A85F4] text-[9px] font-[700] flex items-center justify-center">PN</div>
                  <p className="text-[12px] font-[400]">Prof. N. Yusupov</p>
                </div>

                <div className="border-t border-[#D7DEE8] pt-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[5px] text-[#65758B] text-[12px]">
                    <Star size={14} fill="#F5B800" className="text-[#F5B800]" />
                    <p>4.7</p>
                  </div>
                  <a href="#" className="flex items-center gap-[6px] text-[#2A85F4] text-[12px] font-[700]">
                    O'qish
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="h-[386px] border border-[#D7DEE8] rounded-[24px] overflow-hidden bg-white hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="relative h-[216px] bg-gradient-to-br from-[#FF8A24] to-[#F43B4F] flex items-center justify-center">
                <p className="absolute top-[14px] right-[14px] uppercase text-white text-[10px] font-[700] px-[12px] py-[5px] rounded-[14px] bg-[#FF9F24]">Premium</p>
                <BookOpen size={58} strokeWidth={1.7} className="text-white" />
                <p className="absolute left-[14px] bottom-[12px] text-white text-[10px] font-[500] px-[12px] py-[5px] rounded-[14px] bg-white/20">Iqtisod</p>
              </div>

              <div className="h-[170px] p-[20px] flex flex-col justify-between">
                <h3 className="text-[#153965] text-[17px] font-[700] leading-[22px]">Iqtisodiyot nazariyasi</h3>

                <div className="flex items-center gap-[10px] text-[#65758B]">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#EAF3FF] text-[#2A85F4] text-[9px] font-[700] flex items-center justify-center">MR</div>
                  <p className="text-[12px] font-[400]">M. Rahimova</p>
                </div>

                <div className="border-t border-[#D7DEE8] pt-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[5px] text-[#65758B] text-[12px]">
                    <Star size={14} fill="#F5B800" className="text-[#F5B800]" />
                    <p>4.8</p>
                  </div>
                  <a href="#" className="flex items-center gap-[6px] text-[#2A85F4] text-[12px] font-[700]">
                    O'qish
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="h-[386px] border border-[#D7DEE8] rounded-[24px] overflow-hidden bg-white hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="relative h-[216px] bg-gradient-to-br from-[#E8306E] to-[#FF674D] flex items-center justify-center">
                <p className="absolute top-[14px] right-[14px] uppercase text-white text-[10px] font-[700] px-[12px] py-[5px] rounded-[14px] bg-[#22B573]">Bepul</p>
                <BookOpen size={58} strokeWidth={1.7} className="text-white" />
                <p className="absolute left-[14px] bottom-[12px] text-white text-[10px] font-[500] px-[12px] py-[5px] rounded-[14px] bg-white/20">Adabiyot</p>
              </div>

              <div className="h-[170px] p-[20px] flex flex-col justify-between">
                <h3 className="text-[#153965] text-[17px] font-[700] leading-[22px]">O'zbek mumtoz adabiyoti</h3>

                <div className="flex items-center gap-[10px] text-[#65758B]">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#EAF3FF] text-[#2A85F4] text-[9px] font-[700] flex items-center justify-center">BN</div>
                  <p className="text-[12px] font-[400]">B. Nazarov</p>
                </div>

                <div className="border-t border-[#D7DEE8] pt-[12px] flex items-center justify-between">
                  <div className="flex items-center gap-[5px] text-[#65758B] text-[12px]">
                    <Star size={14} fill="#F5B800" className="text-[#F5B800]" />
                    <p>4.9</p>
                  </div>
                  <a href="#" className="flex items-center gap-[6px] text-[#2A85F4] text-[12px] font-[700]">
                    O'qish
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mualliflar */}
      <div className="w-full py-10">
        <div className="h-[482px] max-w-[1570px] px-[10px] mx-auto">
          <div className="grid grid-cols-3 gap-[20px] h-[280px]">
            {/* Mashhur yozuvchilar */}
            <div className="col-span-2 border border-[#D7DEE8] rounded-[24px] px-[34px] py-[28px] bg-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#2A85F4] uppercase text-[12px] font-[700] tracking-[1px]">Mualliflar</p>
                  <h2 className="text-[#153965] text-[22px] font-[700] leading-[28px] mt-[4px]">Mashhur yozuvchilar</h2>
                </div>

                <a href="#" className="text-[#2A85F4] text-[14px] font-[500]">Barchasi</a>
              </div>

              <div className="grid grid-cols-6 gap-[24px] mt-[28px]">
                <div className="flex flex-col items-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#2A85F4] to-[#5B47F5] text-white text-[18px] font-[700] flex items-center justify-center">CH</div>
                  <h3 className="text-[#153965] text-[12px] font-[600] mt-[10px]">Cho'lpon</h3>
                  <p className="text-[#65758B] text-[10px] font-[400]">24 asar</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#E8306E] to-[#FF674D] text-white text-[18px] font-[700] flex items-center justify-center">AQ</div>
                  <h3 className="text-[#153965] text-[12px] font-[600] mt-[10px]">A. Qodiriy</h3>
                  <p className="text-[#65758B] text-[10px] font-[400]">18 asar</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#28AF60] to-[#1AC3E6] text-white text-[18px] font-[700] flex items-center justify-center">OH</div>
                  <h3 className="text-[#153965] text-[12px] font-[600] mt-[10px]">O. Hoshimov</h3>
                  <p className="text-[#65758B] text-[10px] font-[400]">32 asar</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#FF8A24] to-[#F43B4F] text-white text-[18px] font-[700] flex items-center justify-center">SA</div>
                  <h3 className="text-[#153965] text-[12px] font-[600] mt-[10px]">Said Ahmad</h3>
                  <p className="text-[#65758B] text-[10px] font-[400]">21 asar</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#8C35E8] to-[#D126C5] text-white text-[18px] font-[700] flex items-center justify-center">XT</div>
                  <h3 className="text-[#153965] text-[12px] font-[600] mt-[10px]">X. To'xtaboyev</h3>
                  <p className="text-[#65758B] text-[10px] font-[400]">15 asar</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#168DE2] to-[#075BDE] text-white text-[18px] font-[700] flex items-center justify-center">EV</div>
                  <h3 className="text-[#153965] text-[12px] font-[600] mt-[10px]">Erkin Vohidov</h3>
                  <p className="text-[#65758B] text-[10px] font-[400]">27 asar</p>
                </div>
              </div>
            </div>

            {/* Premium */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#102B4C] via-[#2E1F7A] to-[#6A288A] px-[32px] py-[28px] text-white">
              <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>

              <div className="relative h-full flex flex-col justify-between">
                <div className="flex flex-col items-start">
                  <p className="flex items-center gap-1 uppercase text-[10px] font-[700] tracking-[1px] px-[12px] py-[5px] rounded-[16px] bg-white/15">
                    <TrendingUp size={14} />
                    Premium
                  </p>
                  <h2 className="text-[24px] font-[800] leading-[30px] mt-[16px]">
                    Cheksiz kirish bilan bilim
                    <br />
                    olamiga sho'ng'ing
                  </h2>
                  <p className="text-white/70 text-[14px] font-[400] leading-[20px] mt-[8px]">
                    100 000+ kitob, audio va ilmiy maqolalar — bir obuna ostida.
                  </p>
                </div>

                <button className="w-fit px-[20px] py-[11px] rounded-[12px] bg-white text-[#153965] text-[13px] font-[700] flex items-center gap-[10px] cursor-pointer transition-all duration-200 active:duration-75 active:scale-97">
                  Bepul boshlash
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          {/* Statistika */}
          <div className="h-[114px] border border-[#D7DEE8] rounded-[24px] bg-white mt-[18px] px-[34px] grid grid-cols-4 items-center">
            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                <BookOpen size={23} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[#153965] text-[24px] font-[800] leading-[28px]">100K+</p>
                <p className="text-[#65758B] text-[12px] font-[400]">Kitoblar</p>
              </div>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                <PenTool size={23} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[#153965] text-[26px] font-[800] leading-[28px]">25K</p>
                <p className="text-[#65758B] text-[11px] font-[400]">Faol o&apos;quvchilar</p>
              </div>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                <Headphones size={23} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[#153965] text-[26px] font-[800] leading-[28px]">1.2K</p>
                <p className="text-[#65758B] text-[11px] font-[400]">Audio kitoblar</p>
              </div>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EAF3FF] text-[#2A85F4] flex items-center justify-center">
                <Library size={23} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[#153965] text-[26px] font-[800] leading-[28px]">24</p>
                <p className="text-[#65758B] text-[11px] font-[400]">Janrlar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
