import "./globals.css";
import { Open_Sans as OpenSansFont } from "next/font/google";
import NavBar from "./(shared)/NavBar";
import Footer from "./(shared)/Footer";


const openSans = OpenSansFont({
  subsets: ["latin"],

})


export const metadata = {
  title: "Blog AI App",
  description: "Blog built in Next JS that uses AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <NavBar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
