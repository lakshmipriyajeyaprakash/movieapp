import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import ThemeChange from "./ThemeChange";

const inter = Inter({ subsets: ["latin"] });

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
          {children}
        </ThemeChange>
      </body>
    </html>
  );
}
