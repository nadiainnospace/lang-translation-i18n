import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  return i18n.defaultLocale;
}
 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  console.log(pathname);
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 console.log('ss', pathnameHasLocale);
  if (pathnameHasLocale) {
    return
  }
 
  // Redirect if there is no locale
  const locale = getLocale(request);
  
 console.log('locale:', locale);
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.rewrite(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}