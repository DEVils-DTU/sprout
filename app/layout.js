import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sprout™",
  description: "Created with ❤️ by the sprout™ team",
};

export default function RootLayout({ children }) {
  const bodyClass = "w-full h-full bg-transparent flex " + inter.className;
  return (
    <html lang="en">
      <body className={bodyClass}>
        <NavBar />
        <div className={`
            w-[96%] h-[96vh] 
            bg-white 
            rounded-2xl 
            mx-[2%] my-[2vh] 
            overflow-auto
        `}>
          {children}
        </div>
      </body>
    </html>
  );
}
