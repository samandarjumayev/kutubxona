import "./globals.css";

export const metadata = {
  title: "Elektron Kutubxona Boshqaruv Tizimi",
  description: "100,000+ kitob, ilmiy maqolalar va audiokitoblardan iborat raqamli kutubxonaga xush kelibsiz. O'qing, eshiting, kashf eting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
