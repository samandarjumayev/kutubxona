"use client";

import { 
    ArrowLeft, ArrowRight, BookOpen, Bookmark, Download, Eye, 
    Heart, MessageSquare, Star, Share2, CheckCircle2, User, 
    Calendar, FileText, Globe, Folder, Hash, Headphones 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Namunaviy ma'lumot (buni backend yoki params orqali keladigan ma'lumotga almashtirasiz)
const bookDetails = {
    title: "Sun'iy intellekt asoslari",
    author: "Dr. A. Karimov",
    category: "DASTURLASH",
    format: "PDF",
    year: "2024",
    rating: "4.9",
    views: "12.4k",
    reviewsCount: "248",
    favorites: "1.2k",
    access: "BEPUL",
    pages: "412",
    language: "O'zbek",
    isbn: "978-9943-01-1234-5",
    gradient: "from-[#2A85F4] to-[#5B47F5]"
};

const chapters = [
    { id: "01", title: "Kirish: Mavzuga umumiy qarash", page: "bet 12" },
    { id: "02", title: "I bob — Asosiy tushuncha va ta'riflar", page: "bet 40" },
    { id: "03", title: "II bob — Tarixiy rivojlanish bosqichlari", page: "bet 65" },
    { id: "04", title: "III bob — Zamonaviy yondashuvlar", page: "bet 98" },
    { id: "05", title: "IV bob — Amaliy qo'llanilishi", page: "bet 124" },
    { id: "06", title: "V bob — Kelajak istiqbollari", page: "bet 152" },
    { id: "07", title: "Xulosa va tavsiyalar", page: "bet 180" },
    { id: "08", title: "Foydalanilgan adabiyotlar ro'yxati", page: "bet 208" },
];

const reviews = [
    { id: 1, name: "Aziza Karimova", role: "Talaba, TATU", date: "12 Apr 2026", rating: 5, comment: "Juda foydali kitob, har bir bobda amaliy misollar berilgan. Boshlovchilar uchun ajoyib qo'llanma.", initial: "AK" },
    { id: 2, name: "Bekzod Olimov", role: "O'qituvchi", date: "28 Mar 2026", rating: 4, comment: "Mavzular tushunarli yoritilgan, ammo ba'zi joylarda chuqurroq tahlil yetishmaydi. Umuman olganda, tavsiya qilaman.", initial: "BO" },
    { id: 3, name: "Madina Yusupova", role: "Magistrant", date: "10 Mar 2026", rating: 5, comment: "Mualliflik uslubi judayam yoqdi. Murakkab tushunchalar oddiy tilda yetkazilgan. Rahmat!", initial: "MY" },
];

export default function KitobDetails({ params }) {
    const [saved, setSaved] = useState(false);

    return (
        <div className="bg-[#F9FAFC] min-h-screen pb-[100px]">
            {/* Top Hero Section */}
            <div className="relative bg-gradient-to-r from-[#153965] via-[#2E1F7A] to-[#6A288A] pt-[40px] pb-[80px]">
                <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px]">
                    {/* Back to catalog */}
                    <Link href="/elektron-kitoblar" className="inline-flex items-center gap-[8px] text-white/80 hover:text-white text-[14px] font-[500] transition-colors mb-[40px]">
                        <ArrowLeft size={16} />
                        Kataloqqa qaytish
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-[50px] items-start">
                        {/* Book Cover Side */}
                        <div className="w-full lg:w-[320px] shrink-0">
                            <div className={`relative w-full h-[420px] rounded-[24px] bg-gradient-to-br ${bookDetails.gradient} flex flex-col justify-between p-[24px] text-white shadow-xl`}>
                                <div className="flex justify-between items-center">
                                    <span className="h-[26px] px-[12px] rounded-full bg-white/20 text-[11px] font-[700] flex items-center">
                                        {bookDetails.format}
                                    </span>
                                    <span className="h-[26px] px-[12px] rounded-full bg-[#22C55E] text-[11px] font-[800] flex items-center">
                                        {bookDetails.access}
                                    </span>
                                </div>
                                <div className="flex justify-center my-auto">
                                    <BookOpen size={80} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-white/60 text-[11px] font-[700] uppercase tracking-wider">{bookDetails.category}</p>
                                    <h2 className="text-[22px] font-[800] leading-[28px] mt-[4px]">{bookDetails.title}</h2>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-[24px] space-y-[12px]">
                                <button className="w-full h-[54px] rounded-[14px] bg-[#2A85F4] text-white font-[700] flex items-center justify-center gap-[10px] shadow-lg shadow-[#2A85F4]/20 hover:bg-[#1a75e5] active:scale-[0.98] transition-all cursor-pointer">
                                    <BookOpen size={18} />
                                    Hoziroq o'qish
                                </button>
                                <div className="grid grid-cols-2 gap-[12px]">
                                    <button className="h-[50px] rounded-[14px] border border-white/20 bg-white/10 text-white font-[600] text-[14px] flex items-center justify-center gap-[8px] hover:bg-white/20 transition-all cursor-pointer">
                                        <Download size={16} />
                                        Yuklash
                                    </button>
                                    <button 
                                        onClick={() => setSaved(!saved)}
                                        className={`h-[50px] rounded-[14px] border border-white/20 font-[600] text-[14px] flex items-center justify-center gap-[8px] transition-all cursor-pointer ${saved ? 'bg-white text-[#153965]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                    >
                                        <Bookmark size={16} className={saved ? "fill-[#153965]" : ""} />
                                        {saved ? "Saqlandi" : "Saqlash"}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Book Main Info Side */}
                        <div className="flex-1 text-white lg:pt-[20px]">
                            <div className="flex flex-wrap gap-[8px] mb-[16px]">
                                <span className="px-[12px] py-[4px] rounded-md bg-white/10 text-[12px] font-[700] tracking-wider uppercase text-white/90">{bookDetails.category}</span>
                                <span className="px-[12px] py-[4px] rounded-md bg-white/10 text-[12px] font-[700] text-white/90">{bookDetails.format}</span>
                                <span className="px-[12px] py-[4px] rounded-md bg-white/10 text-[12px] font-[700] text-white/90">{bookDetails.year}</span>
                            </div>

                            <h1 className="text-[44px] lg:text-[56px] font-[800] leading-tight lg:leading-[64px]">{bookDetails.title}</h1>
                            <p className="text-white/80 text-[16px] mt-[14px] font-[500]">
                                Muallif: <span className="text-[#2A85F4] font-[700] hover:underline cursor-pointer">{bookDetails.author}</span>
                            </p>

                            {/* Analytics Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[16px] mt-[36px] max-w-[760px]">
                                <div className="bg-white/5 border border-white/10 rounded-[18px] p-[16px] flex flex-col justify-between h-[100px]">
                                    <div className="flex items-center justify-between text-[#F5B400]">
                                        <span className="text-[13px] text-white/60 font-[600]">Reyting</span>
                                        <Star size={18} className="fill-[#F5B400]" />
                                    </div>
                                    <p className="text-[24px] font-[800]">{bookDetails.rating}</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-[18px] p-[16px] flex flex-col justify-between h-[100px]">
                                    <div className="flex items-center justify-between text-white/60">
                                        <span className="text-[13px] font-[600]">O'qishlar</span>
                                        <Eye size={18} />
                                    </div>
                                    <p className="text-[24px] font-[800]">{bookDetails.views}</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-[18px] p-[16px] flex flex-col justify-between h-[100px]">
                                    <div className="flex items-center justify-between text-white/60">
                                        <span className="text-[13px] font-[600]">Sharhlar</span>
                                        <MessageSquare size={18} />
                                    </div>
                                    <p className="text-[24px] font-[800]">{bookDetails.reviewsCount}</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-[18px] p-[16px] flex flex-col justify-between h-[100px]">
                                    <div className="flex items-center justify-between text-white/60">
                                        <span className="text-[13px] font-[600]">Sevimli</span>
                                        <Heart size={18} />
                                    </div>
                                    <p className="text-[24px] font-[800]">{bookDetails.favorites}</p>
                                </div>
                            </div>

                            {/* Additional Metadata Actions */}
                            <div className="flex flex-wrap items-center gap-[24px] mt-[30px] text-[14px] text-white/70 font-[500]">
                                <button className="flex items-center gap-[8px] hover:text-white cursor-pointer">
                                    <Share2 size={16} /> Ulashish
                                </button>
                                <span className="flex items-center gap-[8px] text-[#22C55E]">
                                    <CheckCircle2 size={16} /> Litsenziyalangan resurs
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid Block */}
            <div className="max-w-[1570px] mx-auto px-4 lg:px-[10px] mt-[40px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-[36px] items-start">
                    
                    {/* Left Column: Description, Chapters, Reviews */}
                    <div className="space-y-[36px]">
                        
                        {/* Section: Asar Tavsifi */}
                        <div className="bg-white rounded-[20px] border border-[#D7DEE8] p-[30px]">
                            <h3 className="text-[#153965] text-[18px] font-[800] uppercase tracking-[1px] mb-[18px]">Asar tavsifi</h3>
                            <div className="text-[#65758B] text-[15px] leading-[26px] space-y-[14px]">
                                <p>
                                    <span className="font-[700] text-[#153965]">“Sun'iy intellekt asoslari”</span> — dasturlash sohasidagi eng zamonaviy va keng qamrovli qo'llanmalardan biridir. Ushbu asar nazariy bilimlarni amaliy misollar bilan uyg'unlashtirib, o'quvchini boshlang'ich bosqichdan fundamental mavzular mohiyatiga olib kiradi.
                                </p>
                                <p>
                                    Kitob bilimning asosiy tushunchalaridan boshlab, eng murakkab mavzularga qadar tizimli ravishda yoritilgan. Har bir bobda mustahkamlash uchun savol-javoblar, vazifalar va qo'shimcha o'qish ro'yxati keltirilgan.
                                </p>
                            </div>

                            {/* High-quality quote block inside description */}
                            <div className="mt-[24px] bg-[#EAF3FF] border-l-4 border-[#2A85F4] rounded-r-[12px] p-[20px]">
                                <p className="text-[#153965] italic text-[15px] font-[600]">
                                    "Bu kitob — sohaga qiziquvchan har bir kishi uchun mustahkam poydevordir."
                                </p>
                                <span className="block text-[12px] text-[#65758B] font-[700] mt-[8px] uppercase tracking-wider">— Ilm va Hayot jurnali, 2024</span>
                            </div>
                        </div>

                        {/* Section: Bo'limlar ro'yxati (Mundarija) */}
                        <div className="bg-white rounded-[20px] border border-[#D7DEE8] p-[30px]">
                            <h3 className="text-[#153965] text-[18px] font-[800] uppercase tracking-[1px] mb-[20px]">Bo'limlar ro'yxati</h3>
                            <div className="divide-y divide-[#D7DEE8]/60">
                                {chapters.map((chapter) => (
                                    <div key={chapter.id} className="py-[14px] flex items-center justify-between text-[15px] hover:bg-[#F9FAFC] px-[8px] rounded-[8px] transition-colors group">
                                        <div className="flex items-center gap-[16px]">
                                            <span className="w-[28px] h-[28px] rounded-md bg-[#EAF3FF] text-[#2A85F4] font-[800] text-[12px] flex items-center justify-center">
                                                {chapter.id}
                                            </span>
                                            <p className="text-[#153965] font-[600] group-hover:text-[#2A85F4] transition-colors">{chapter.title}</p>
                                        </div>
                                        <span className="text-[#65758B] text-[13px] font-[500] bg-[#F1F5F9] px-[10px] py-[2px] rounded-full">{chapter.page}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section: Muallif Haqida */}
                        <div className="bg-white rounded-[20px] border border-[#D7DEE8] p-[30px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[20px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="w-[64px] h-[64px] rounded-full bg-[#2A85F4] text-white flex items-center justify-center font-[800] text-[20px]">
                                    DK
                                </div>
                                <div>
                                    <h4 className="text-[#153965] text-[18px] font-[800]">{bookDetails.author}</h4>
                                    <p className="text-[#65758B] text-[14px] mt-[2px]">Filologiya fanlari doktori, professor. SamDU dasturlash kafedrasi mudiri.</p>
                                    <div className="flex items-center gap-[14px] mt-[8px] text-[12px] text-[#65758B] font-[600]">
                                        <span className="flex items-center gap-[4px]"><BookOpen size={14} /> 24 asar</span>
                                        <span className="flex items-center gap-[4px]"><User size={14} /> 8.4k o'quvchi</span>
                                    </div>
                                </div>
                            </div>
                            <button className="h-[40px] px-[20px] rounded-[10px] border border-[#D7DEE8] text-[#153965] text-[13px] font-[700] hover:bg-[#F9FAFC] transition-colors whitespace-nowrap cursor-pointer">
                                Profilni ko'rish
                            </button>
                        </div>

                        {/* Section: O'quvchilar Fikri (Reviews) */}
                        <div className="bg-white rounded-[20px] border border-[#D7DEE8] p-[30px]">
                            <div className="flex items-center justify-between mb-[24px]">
                                <h3 className="text-[#153965] text-[18px] font-[800] uppercase tracking-[1px]">O'quvchilar fikri</h3>
                                <button className="h-[42px] px-[18px] rounded-[10px] bg-[#2A85F4] text-white text-[13px] font-[700] hover:bg-[#1a75e5] transition-colors cursor-pointer">
                                    Sharh yozish
                                </button>
                            </div>

                            {/* Rating breakdown box */}
                            <div className="flex flex-col md:flex-row gap-[30px] items-center bg-[#F9FAFC] rounded-[16px] p-[24px] mb-[30px]">
                                <div className="text-center md:border-r border-[#D7DEE8] md:pr-[40px]">
                                    <p className="text-[48px] font-[800] text-[#153965] leading-none">{bookDetails.rating}</p>
                                    <div className="flex justify-center gap-[2px] my-[10px]">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} size={16} className="fill-[#F5B400] text-[#F5B400]" />
                                        ))}
                                    </div>
                                    <span className="text-[12px] text-[#65758B] font-[600]">248 sharh asosida</span>
                                </div>
                                <div className="flex-1 w-full space-y-[6px]">
                                    {[
                                        { star: 5, pct: "78%" },
                                        { star: 4, pct: "14%" },
                                        { star: 3, pct: "5%" },
                                        { star: 2, pct: "2%" },
                                        { star: 1, pct: "1%" },
                                    ].map((row) => (
                                        <div key={row.star} className="flex items-center gap-[12px] text-[12px] font-[600] text-[#65758B]">
                                            <span className="w-[10px]">{row.star}</span>
                                            <div className="flex-1 h-[6px] bg-[#E2E8F0] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#2A85F4]" style={{ width: row.pct }}></div>
                                            </div>
                                            <span className="w-[30px] text-right">{row.pct}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reviews Listing */}
                            <div className="space-y-[20px]">
                                {reviews.map((rev) => (
                                    <div key={rev.id} className="border border-[#D7DEE8]/70 rounded-[14px] p-[20px] space-y-[12px]">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-[14px]">
                                                <div className="w-[42px] h-[42px] rounded-full bg-[#EAF3FF] text-[#2A85F4] font-[800] text-[14px] flex items-center justify-center">
                                                    {rev.initial}
                                                </div>
                                                <div>
                                                    <h5 className="text-[#153965] text-[14px] font-[700]">{rev.name}</h5>
                                                    <p className="text-[#65758B] text-[12px]">{rev.role} • {rev.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-[1px]">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star key={i} size={13} className={i < rev.rating ? "fill-[#F5B400] text-[#F5B400]" : "text-[#D7DEE8]"} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-[#65758B] text-[14px] leading-[22px]">{rev.comment}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full h-[46px] rounded-[11px] border border-dashed border-[#D7DEE8] text-[#153965] text-[14px] font-[700] mt-[24px] hover:bg-[#F9FAFC] transition-colors cursor-pointer">
                                Yana sharhlarni ko'rish
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Sidebar (Technical Specs & Audio Offer) */}
                    <div className="space-y-[24px]">
                        
                        {/* Box: Texnik Ma'lumotlar */}
                        <div className="bg-white rounded-[20px] border border-[#D7DEE8] p-[24px]">
                            <h3 className="text-[#153965] text-[16px] font-[800] mb-[18px]">Texnik ma'lumot</h3>
                            <div className="space-y-[14px] text-[14px]">
                                <div className="flex items-center justify-between pb-[10px] border-b border-[#F1F5F9]">
                                    <span className="text-[#65758B] flex items-center gap-[8px] font-[500]"><User size={15} /> Muallif</span>
                                    <span className="text-[#153965] font-[700]">{bookDetails.author}</span>
                                </div>
                                <div className="flex items-center justify-between pb-[10px] border-b border-[#F1F5F9]">
                                    <span className="text-[#65758B] flex items-center gap-[8px] font-[500]"><Calendar size={15} /> Nashr yili</span>
                                    <span className="text-[#153965] font-[700]">{bookDetails.year}</span>
                                </div>
                                <div className="flex items-center justify-between pb-[10px] border-b border-[#F1F5F9]">
                                    <span className="text-[#65758B] flex items-center gap-[8px] font-[500]"><FileText size={15} /> Sahifalar</span>
                                    <span className="text-[#153965] font-[700]">{bookDetails.pages}</span>
                                </div>
                                <div className="flex items-center justify-between pb-[10px] border-b border-[#F1F5F9]">
                                    <span className="text-[#65758B] flex items-center gap-[8px] font-[500]"><Globe size={15} /> Til</span>
                                    <span className="text-[#153965] font-[700]">{bookDetails.language}</span>
                                </div>
                                <div className="flex items-center justify-between pb-[10px] border-b border-[#F1F5F9]">
                                    <span className="text-[#65758B] flex items-center gap-[8px] font-[500]"><Folder size={15} /> Kategoriya</span>
                                    <span className="text-[#153965] font-[700]">{bookDetails.category}</span>
                                </div>
                                <div className="flex items-center justify-between pb-[10px] border-b border-[#F1F5F9]">
                                    <span className="text-[#65758B] flex items-center gap-[8px] font-[500]"><FileText size={15} /> Format</span>
                                    <span className="text-[#153965] font-[700]">{bookDetails.format}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#65758B] flex items-center gap-[8px] font-[500]"><Hash size={15} /> ISBN</span>
                                    <span className="text-[#153965] font-[700] text-[13px]">{bookDetails.isbn}</span>
                                </div>
                            </div>
                        </div>

                        {/* Box: Audio Versiya Promo Box */}
                        <div className="rounded-[20px] bg-gradient-to-br from-[#102B4C] to-[#6A288A] p-[24px] text-white">
                            <Headphones size={28} strokeWidth={2.2} className="text-[#2A85F4]" />
                            <h3 className="text-[17px] font-[800] leading-[24px] mt-[16px]">Audio versiya mavjud</h3>
                            <p className="text-white/60 text-[13px] font-[500] mt-[4px]">Kitobni 6 soat 24 daqiqada tinglang.</p>
                            <button className="h-[38px] px-[16px] rounded-[10px] bg-[#2A85F4] text-white text-[13px] font-[700] mt-[18px] flex items-center gap-[8px] hover:bg-[#1a75e5] transition-all cursor-pointer">
                                Tinglash <ArrowRight size={14} />
                            </button>
                        </div>

                        {/* Box: Teglar (Tags) */}
                        <div className="bg-white rounded-[20px] border border-[#D7DEE8] p-[24px]">
                            <h3 className="text-[#153965] text-[16px] font-[800] mb-[14px]">Teglar</h3>
                            <div className="flex flex-wrap gap-[8px]">
                                {["#Dasturlash", "#O'zbek", "#Akademik", "#O'quv", "#Yangi"].map((tag) => (
                                    <span key={tag} className="px-[12px] py-[6px] rounded-[8px] bg-[#F1F5F9] text-[#65758B] text-[12px] font-[600] hover:bg-[#E2E8F0] cursor-pointer transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: O'xshash kitoblar (Similar Books Slider/Grid) */}
                <div className="mt-[64px]">
                    <div className="flex items-center justify-between mb-[24px]">
                        <div>
                            <p className="text-[#2A85F4] text-[12px] font-[700] uppercase tracking-[1px]">Sizga yoqishi mumkin</p>
                            <h3 className="text-[#153965] text-[28px] font-[800] mt-[2px]">O'xshash kitoblar</h3>
                        </div>
                        <Link href="/elektron-kitoblar" className="text-[#2A85F4] text-[14px] font-[700] flex items-center gap-[6px] hover:underline">
                            Hammasi <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[24px]">
                        {[
                            { id: 101, title: "Sun'iy intellekt asoslari", cat: "Dasturlash", gradient: "from-[#2A85F4] to-[#5B47F5]", access: "BEPUL" },
                            { id: 102, title: "Zamonaviy fizika", cat: "Fizika", gradient: "from-[#2BB673] to-[#20C7E6]", access: "BEPUL" },
                            { id: 103, title: "Iqtisodiyot nazariyasi", cat: "Iqtisod", gradient: "from-[#FF9518] to-[#FF3E3E]", access: "PREMIUM" },
                            { id: 104, title: "Iqtisodiyot nazariyasi", cat: "Iqtisod", gradient: "from-[#FF9518] to-[#FF3E3E]", access: "PREMIUM" },
                            { id: 105, title: "Iqtisodiyot nazariyasi", cat: "Iqtisod", gradient: "from-[#FF9518] to-[#FF3E3E]", access: "PREMIUM" },
                        ].map((item) => (
                            <div key={item.id} className="rounded-[20px] overflow-hidden border border-[#D7DEE8] bg-white flex flex-col group hover:shadow-md transition-all">
                                <div className={`relative h-[160px] bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                                    <span className="absolute left-[12px] top-[12px] h-[22px] px-[10px] rounded-full bg-white/20 text-white text-[10px] font-[700] flex items-center">
                                        {item.cat}
                                    </span>
                                    <span className={`absolute right-[12px] top-[12px] h-[22px] px-[10px] rounded-full text-white text-[10px] font-[800] flex items-center ${item.access === "BEPUL" ? "bg-[#22C55E]" : "bg-[#FFB020]"}`}>
                                        {item.access}
                                    </span>
                                    <BookOpen size={40} className="text-white" />
                                </div>
                                <div className="p-[16px] flex-1 flex flex-col justify-between">
                                    <h4 className="text-[#153965] font-[800] text-[15px] line-clamp-2 leading-[20px]">{item.title}</h4>
                                    <div className="flex items-center justify-between mt-[14px] pt-[12px] border-t border-[#F1F5F9]">
                                        <span className="text-[12px] text-[#65758B] font-[600]">★ 4.8</span>
                                        <span className="text-[#2A85F4] text-[12px] font-[800] flex items-center gap-[4px] group-hover:translate-x-[2px] transition-transform">
                                            O'qish <ArrowRight size={13} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}