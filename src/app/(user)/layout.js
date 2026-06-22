import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function UserLayout({children}){

    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}