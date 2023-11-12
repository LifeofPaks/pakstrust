"use client"
import React from 'react'
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login'
  const isSignupPage = pathname === '/register'
  return (
    ! isLoginPage && !isSignupPage&&
    <div>Footer</div>
  )
}

export default Footer