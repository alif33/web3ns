import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import StoreProvider from "./StoreProvider"
import LogoutButton from "@/components/LogoutButton"
import AuthProvider from "@/components/authProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3NS.ai | Agent powered high frequency trading (HFT)",
  description: "Name Stack for HFT Digital Asset Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> 
        <StoreProvider> 
         <AuthProvider>
          {children}
         </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
