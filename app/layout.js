
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Finsack - Best Loan Solutions",
  description: "Best loan solutions",
   icons: {
    icon: "/logos.svg",
  },
};
export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
