import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import ThemeChange from "./ThemeChange";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FilmFlix Clone",
  description: "Movie Collections Directory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeChange>
          <Header />
          <Navbar />
          <Search />
          {children}
        </ThemeChange>
      </body>
    </html>
  );
}
