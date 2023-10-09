import { MenuProvider } from "@/components/Provider";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Portfolio",
  description: "Husain Bhattiwala Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MenuProvider>
          <div className='flex'>
            <Sidebar />

            <main className='flex-1 pl-0 lg:pl-[300px]'>
              <Navbar />
              {children}
            </main>
          </div>
        </MenuProvider>
      </body>
    </html>
  );
}
