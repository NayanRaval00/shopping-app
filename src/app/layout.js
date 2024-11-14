"use client";

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ProgressBarProvider from "@/providers/ProgressBarProvider";
import { ToastContainer } from "react-toastify";
import { usePathname } from 'next/navigation';
import { SidebarProvider, useSidebar } from "@/context/SidebarContext"; // Import SidebarProvider
import Link from "next/link";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={pathname === '/login' ? 'page-login' : ''}>
        <AuthProvider>
          <SidebarProvider>
            <RootContent>{children}</RootContent>
          </SidebarProvider>
        </AuthProvider>
        <ToastContainer autoClose={true} />
      </body>
    </html>
  );
}

function RootContent({ children }) {
  const { showSideBarData } = useSidebar();

  return (
    <div className={showSideBarData ? "overflow offcanvas" : ""}>
      <ProgressBarProvider>{children}</ProgressBarProvider>
      <div id="colorlib-offcanvas">
        <ul>
          <li className="active"><Link href="/">Home</Link></li>
          <li className=''>
            <Link href={'/men'}>Men</Link>
          </li>
          <li><span style={{ cursor: 'pointer' }}><Link href="/women">women</Link></span></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}