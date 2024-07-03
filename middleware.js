import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";
 
// Get the preferred locale, similar to the above or using a library

 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  console.log(pathname);
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) {
    return
  }
 
  // Redirect if there is no locale
  const locale = i18n.defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect('/home', request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}