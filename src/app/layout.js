import { ContactFormProvider, MenuProvider } from "@/components/Provider";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Portfolio",
  description: "Husain Bhattiwala Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MenuProvider>
          <ContactFormProvider>
            <Toaster />
            <div className='flex'>
              <Sidebar />
              <ContactForm />
              <main className='flex-1 pl-0 lg:pl-[300px]'>
                <Navbar />

                {children}
              </main>
            </div>
          </ContactFormProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
