"use client"
import { usePathname } from "next/navigation"
import Navbar from "./Navbar"

export default function ConditionalNavbar() {
  const pathname = usePathname()
  
  // Admin sayfalarında navbar gösterme
  const isAdminPage = pathname.includes('/admin') || pathname.includes('/login') || pathname.includes('/register') || pathname.includes('/forgot-password')
  
  if (isAdminPage) {
    return null
  }
  
  return <Navbar />
}