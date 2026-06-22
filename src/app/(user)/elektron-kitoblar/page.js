"use client";

import { ArrowRight, BookOpen, Bookmark, ChevronRight, Eye, Filter, Grid3X3, Headphones, List, Menu, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";

const books = [
    { id: 1, type: "Audio", access: "BEPUL", category: "ADABIYOT", title: "Mehrobdan chayon", author: "A. Qodiriy", rating: "4.9", views: "13.2k", gradient: "from-[#2A85F4] to-[#5B47F5]" },
    { id: 2, type: "EPUB", access: "BEPUL", category: "ADABIYOT", title: "O'zbek mumtoz adabiyoti", author: "B. Nazarov", rating: "4.8", views: "10.2k", gradient: "from-[#E8306E] to-[#FF674D]" },
    { id: 3, type: "PDF", access: "PREMIUM", category: "ILMIY", title: "Zamonaviy fizika nazariyasi", author: "Prof. N. Yusupov", rating: "4.7", views: "8.6k", gradient: "from-[#2BB673] to-[#20C7E6]" },
    { id: 4, type: "PDF", access: "PREMIUM", category: "ILMIY", title: "Zamonaviy fizika nazariyasi", author: "Prof. N. Yusupov", rating: "4.7", views: "8.6k", gradient: "from-[#2BB673] to-[#20C7E6]" },
    { id: 5, type: "PDF", access: "BEPUL", category: "IQTISOD", title: "Iqtisodiyot tarixi", author: "M. Rahimova", rating: "4.6", views: "6.8k", gradient: "from-[#FF9518] to-[#FF3E3E]" },
    { id: 6, type: "Audio", access: "BEPUL", category: "ADABIYOT", title: "Kecha va Kunduz", author: "Cho'lpon", rating: "4.9", views: "15.1k", gradient: "from-[#8C35E8] to-[#D126C5]" },
    { id: 7, type: "EPUB", access: "PREMIUM", category: "DASTURLASH", title: "Algoritmlar va ma'lumotlar", author: "S. Tursunov", rating: "4.8", views: "9.4k", gradient: "from-[#1492D6] to-[#1268E8]" },
    { id: 8, type: "EPUB", access: "PREMIUM", category: "DASTURLASH", title: "Algoritmlar va ma'lumotlar", author: "S. Tursunov", rating: "4.8", views: "9.4k", gradient: "from-[#1492D6] to-[#1268E8]" },
    { id: 9, type: "Audio", access: "BEPUL", category: "ADABIYOT", title: "O'tkan kunlar", author: "Abdulla Qodiriy", rating: "5.0", views: "22.6k", gradient: "from-[#E8306E] to-[#FF674D]" },
    { id: 10, type: "PDF", access: "PREMIUM", category: "TIBBIYOT", title: "Tibbiyot ensiklopediyasi", author: "Dr. F. Saidov", rating: "4.7", views: "7.2k", gradient: "from-[#FF9518] to-[#FF3E3E]" },
    { id: 11, type: "PDF", access: "BEPUL", category: "FALSAFA", title: "Falsafa tarixi", author: "I. Hakimov", rating: "4.5", views: "4.8k", gradient: "from-[#8C35E8] to-[#D126C5]" },
    { id: 12, type: "PDF", access: "BEPUL", category: "FALSAFA", title: "Falsafa tarixi", author: "I. Hakimov", rating: "4.5", views: "4.8k", gradient: "from-[#8C35E8] to-[#D126C5]" },
    { id: 13, type: "EPUB", access: "BEPUL", category: "TARIX", title: "Markaziy Osiyo tarixi", author: "Q. Usmonov", rating: "4.8", views: "11.4k", gradient: "from-[#2BB673] to-[#20C7E6]" },
    { id: 14, type: "Video kurs", access: "BEPUL", category: "DASTURLASH", title: "Web dasturlash", author: "A. Yo'ldoshev", rating: "4.6", views: "8.9k", gradient: "from-[#1492D6] to-[#1268E8]" },
    { id: 15, type: "Audio", access: "BEPUL", category: "ADABIYOT", title: "Mehrobdan chayon", author: "A. Qodiriy", rating: "4.9", views: "13.2k", gradient: "from-[#2A85F4] to-[#5B47F5]" },
    { id: 16, type: "Audio", access: "BEPUL", category: "ADABIYOT", title: "Mehrobdan chayon", author: "A. Qodiriy", rating: "4.9", views: "13.2k", gradient: "from-[#2A85F4] to-[#5B47F5]" },
    { id: 17, type: "PDF", access: "BEPUL", category: "ILMIY", title: "Astronomiya asoslari", author: "N. Komilov", rating: "4.6", views: "5.1k", gradient: "from-[#2BB673] to-[#20C7E6]" },
    { id: 18, type: "EPUB", access: "BEPUL", category: "TARIX", title: "Samarqand tarixi", author: "H. Karimov", rating: "4.7", views: "7.8k", gradient: "from-[#1492D6] to-[#1268E8]" },
    { id: 19, type: "Audio", access: "PREMIUM", category: "ADABIYOT", title: "Boburnoma", author: "Z. M. Bobur", rating: "4.9", views: "18.3k", gradient: "from-[#E8306E] to-[#FF674D]" },
    { id: 20, type: "PDF", access: "BEPUL", category: "IQTISOD", title: "Moliya asoslari", author: "R. Aliyev", rating: "4.5", views: "6.2k", gradient: "from-[#FF9518] to-[#FF3E3E]" },
    { id: 21, type: "EPUB", access: "BEPUL", category: "DASTURLASH", title: "JavaScript darslari", author: "S. Tursunov", rating: "4.8", views: "12.1k", gradient: "from-[#1492D6] to-[#1268E8]" },
    { id: 22, type: "PDF", access: "PREMIUM", category: "TIBBIYOT", title: "Anatomiya atlasi", author: "D. Sobirov", rating: "4.7", views: "4.9k", gradient: "from-[#FF9518] to-[#FF3E3E]" },
    { id: 23, type: "Audio", access: "BEPUL", category: "FALSAFA", title: "Tafakkur saboqlari", author: "I. Hakimov", rating: "4.6", views: "3.7k", gradient: "from-[#8C35E8] to-[#D126C5]" },
    { id: 24, type: "Video kurs", access: "BEPUL", category: "ILMIY", title: "Ilmiy maqola yozish", author: "M. Rahimova", rating: "4.8", views: "6.4k", gradient: "from-[#2BB673] to-[#20C7E6]" },
];

const categories = [
    ["Barchasi", "12,480"],
    ["Adabiyot", "4,280"],
    ["Ilmiy", "3,120"],
    ["Tarix", "1,840"],
    ["Dasturlash", "980"],
    ["Iqtisod", "740"],
    ["Tibbiyot", "620"],
    ["Falsafa", "410"],
];

const formats = [
    ["PDF", "8,420"],
    ["EPUB", "3,120"],
    ["Audio", "1,240"],
    ["Video kurs", "480"],
];

export default function ElektronKitoblar(){
    const [page, setPage] = useState(1);
    const perPage = 16;
    const demoBooks = useMemo(() => {
        return Array.from({ length: 1664 }, (_, index) => ({
            ...books[index % books.length],
            id: index + 1,
        }));
    }, []);
    const totalPages = Math.ceil(demoBooks.length / perPage);

    const currentBooks = useMemo(() => {
        const start = (page - 1) * perPage;
        return demoBooks.slice(start, start + perPage);
    }, [demoBooks, page]);

    return (
        <div>
            {/* Elektron kitoblar */}
            <div className="relative h-[373px] bg-gradient-to-r from-[#153965] via-[#2E1F7A] to-[#6A288A]">
                <div className="max-w-[1570px] mx-auto px-[10px] h-full">
                    <div className="w-full h-full mx-auto pt-[64px]">
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
                                100 000+ kitob, audio asarlar va video kurslar to'plamini bir joyda qidiring,
                                <br />
                                o'qing va yuklab oling.
                            </p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-[37px] w-full max-w-[1570px] px-[10px]">
                        <div className="h-[72px] rounded-[20px] bg-white shadow-[0_14px_35px_#15396540] px-[22px] flex items-center gap-[18px]">
                            <span className="text-[#65758B] text-[28px] leading-none">
                                <Search />
                            </span>
                            <input
                                type="text"
                                placeholder="Kitob nomi, muallif yoki ISBN..."
                                className="flex-1 h-full outline-none text-[#153965] text-[15px] placeholder:text-[#94A3B8]"
                            />

                            <button className="h-[48px] px-[20px] rounded-[12px] border border-[#D7DEE8] text-[#153965] text-[14px] font-[600] flex items-center gap-[10px] cursor-pointer">
                                <span className="text-[18px]">
                                    <Menu size={18} />
                                </span>
                                Kengaytirilgan
                            </button>

                            <button className="h-[48px] px-[24px] rounded-[12px] bg-[#2A85F4] text-white text-[14px] font-[700] flex items-center gap-[10px] cursor-pointer active:scale-95 transition-all duration-150">
                                Qidirish
                                <span className="text-[20px]">
                                    <ArrowRight size={18} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="h-[1960px] bg-[#F9FAFC] pt-[64px] mt-17">
                <div className="max-w-[1570px] mx-auto px-[10px] flex gap-[36px]">
                    {/* Filters */}
                    <div className="w-[280px] shrink-0">
                        <div className="rounded-[16px] border border-[#D7DEE8] bg-white p-[24px]">
                            <div className="flex items-center gap-[10px] text-[#153965]">
                                <Filter size={18} strokeWidth={2.2} className="text-[#2A85F4]" />
                                <h3 className="text-[16px] font-[800] leading-[22px]">Kategoriyalar</h3>
                            </div>

                            <div className="mt-[18px] space-y-[4px]">
                                {categories.map((item, index) => (
                                    <button
                                        key={item[0]}
                                        className={`h-[40px] w-full rounded-[8px] px-[12px] flex items-center justify-between text-[14px] leading-[18px] ${index === 0 ? "bg-[#EAF3FF] text-[#2A85F4] font-[800]" : "text-[#65758B] font-[600]"}`}
                                    >
                                        <span>{item[0]}</span>
                                        <span className="text-[12px]">{item[1]}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#D7DEE8] bg-white p-[24px] mt-[24px]">
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px]">Format</h3>
                            <div className="mt-[18px] space-y-[12px]">
                                {formats.map((item) => (
                                    <label key={item[0]} className="flex items-center justify-between text-[#65758B] text-[14px] font-[500] leading-[18px]">
                                        <span className="flex items-center gap-[10px]">
                                            <input type="checkbox" className="w-[15px] h-[15px] accent-[#2A85F4]" />
                                            {item[0]}
                                        </span>
                                        <span className="text-[12px]">{item[1]}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#D7DEE8] bg-white p-[24px] mt-[24px]">
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px]">Til</h3>
                            <div className="mt-[18px] flex flex-wrap gap-[10px]">
                                {["O'zbek", "Rus", "Ingliz", "Arab"].map((language) => (
                                    <button key={language} className="h-[30px] px-[14px] rounded-full border border-[#D7DEE8] bg-white text-[#65758B] text-[12px] font-[700]">
                                        {language}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#D7DEE8] bg-white p-[24px] mt-[24px]">
                            <h3 className="text-[#153965] text-[16px] font-[800] leading-[22px]">Reyting</h3>
                            <div className="mt-[18px] space-y-[10px]">
                                {[5, 4, 3].map((rating) => (
                                    <label key={rating} className="flex items-center gap-[10px] text-[#65758B] text-[12px] font-[500]">
                                        <input type="checkbox" className="w-[15px] h-[15px] accent-[#2A85F4]" />
                                        <span className="flex items-center gap-[2px]">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <Star key={index} size={14} className={index < rating ? "fill-[#F5B400] text-[#F5B400]" : "text-[#D7DEE8]"} />
                                            ))}
                                        </span>
                                        <span>va yuqori</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="h-[167px] rounded-[16px] bg-gradient-to-br from-[#102B4C] to-[#6A288A] mt-[24px] p-[24px] text-white">
                            <Headphones size={28} strokeWidth={2.2} className="text-[#2A85F4]" />
                            <h3 className="text-[18px] font-[800] leading-[24px] mt-[22px]">Audio kitoblar</h3>
                            <p className="text-white/60 text-[13px] font-[500] leading-[18px] mt-[3px]">1200+ asarni tinglang</p>
                            <button className="text-[#2A85F4] text-[13px] font-[800] leading-[18px] mt-[18px] flex items-center gap-[8px]">
                                Boshlash <ArrowRight size={15} strokeWidth={2.4} />
                            </button>
                        </div>
                    </div>

                    {/* Books */}
                    <div className="flex-1">
                        <div className="h-[42px] flex items-center justify-between mb-[24px]">
                            <p className="text-[#153965] text-[14px] font-[800] leading-[20px]">{currentBooks.length} ta natija topildi</p>

                            <div className="flex items-center gap-[10px]">
                                <button className="h-[40px] w-[139px] rounded-[8px] border border-[#D7DEE8] bg-white px-[14px] flex items-center justify-between text-[#153965] text-[13px] font-[700]">
                                    Mashhurlik
                                    <ChevronRight size={15} strokeWidth={2.2} className="rotate-90 text-[#65758B]" />
                                </button>
                                <div className="h-[40px] rounded-[8px] border border-[#D7DEE8] bg-white p-[4px] flex items-center gap-[4px]">
                                    <button className="w-[31px] h-[31px] rounded-[7px] bg-[#153965] text-white flex items-center justify-center">
                                        <Grid3X3 size={17} strokeWidth={2.1} />
                                    </button>
                                    <button className="w-[31px] h-[31px] rounded-[7px] text-[#65758B] flex items-center justify-center">
                                        <List size={18} strokeWidth={2.1} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 justify-between gap-y-[24px]">
                            {currentBooks.map((book) => (
                                <div key={book.id} className="w-[294px] h-[411px] rounded-[20px] overflow-hidden border border-[#D7DEE8] bg-white flex flex-col">
                                    <div className={`relative h-[192px] bg-gradient-to-br ${book.gradient} flex items-center justify-center`}>
                                        <span className="absolute left-[16px] top-[14px] h-[26px] px-[12px] rounded-full bg-white/20 text-white text-[11px] font-[700] flex items-center">
                                            {book.type}
                                        </span>
                                        <span className={`absolute right-[16px] top-[14px] h-[26px] px-[12px] rounded-full text-white text-[11px] font-[800] flex items-center ${book.access === "BEPUL" ? "bg-[#22C55E]" : "bg-[#FFB020]"}`}>
                                            {book.access}
                                        </span>
                                        <BookOpen size={54} strokeWidth={2.2} className="text-white" />
                                        <button className="absolute right-[16px] bottom-[16px] w-[40px] h-[40px] rounded-full bg-white/20 text-white flex items-center justify-center">
                                            <Bookmark size={18} strokeWidth={2.2} />
                                        </button>
                                    </div>

                                    <div className="flex-1 px-[22px] pt-[24px] flex flex-col gap-2">
                                        <p className="text-[#2A85F4] text-[11px] font-[800] leading-[14px] tracking-[1px]">{book.category}</p>
                                        <h3 className="text-[#153965] text-[18px] font-[800] leading-[24px]">{book.title}</h3>
                                        <p className="text-[#65758B] text-[13px] font-[500] leading-[18px] mt-[30px]">{book.author}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-[6px]">
                                                <Star size={16} className="fill-[#F5B400] text-[#F5B400]" />
                                                <span className="text-[#153965] text-[13px] font-[800]">{book.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-[6px] text-[#65758B] text-[13px] font-[500]">
                                                <Eye size={15} strokeWidth={2} />
                                                {book.views}
                                            </div>
                                        </div>

                                        <button className="w-full h-[46px] rounded-[11px] bg-[#EAF3FF] text-[#2A85F4] text-[14px] font-[800] flex items-center justify-center gap-[8px]">
                                            <BookOpen size={17} strokeWidth={2.2} />
                                            O'qish
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="h-[40px] mt-[36px] flex items-center justify-between">
                            <p className="text-[#65758B] text-[13px] font-[700] leading-[18px]">{Math.min(page * perPage, 12480)} / 12 480 ko'rsatilmoqda</p>

                            <div className="flex items-center gap-[7px]">
                                {[1, 2, 3, 4, 5].map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => setPage(number)}
                                        className={`w-[38px] h-[38px] rounded-[10px] border text-[13px] font-[800] ${page === number ? "bg-[#153965] border-[#153965] text-white" : "bg-white border-[#D7DEE8] text-[#153965]"}`}
                                    >
                                        {number}
                                    </button>
                                ))}
                                <span className="text-[#65758B] text-[13px] font-[800] px-[5px]">...</span>
                                <button
                                    onClick={() => setPage(totalPages)}
                                    className={`w-[42px] h-[38px] rounded-[10px] border text-[13px] font-[800] ${page === totalPages ? "bg-[#153965] border-[#153965] text-white" : "bg-white border-[#D7DEE8] text-[#153965]"}`}
                                >
                                    {totalPages}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
