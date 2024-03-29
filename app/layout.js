import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from './ui/sideBar';
import { AuthProvider } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="es">
        <body className={inter.className}>
          <div className="flex flex-row">
            <SideBar />
            <div className="bg-slate-200 basis-[80vw] rounded-lg shadow-lg h-[94vh] m-3 p-2 overflow-y-scroll">
              {children}
            </div>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
