import LocaleSwitcher from "@/components/lang-switcher";
import TopNavbar from "@/components/layout/topNavbar";
import { i18n } from "../../i18n-config";


export async function generateStaticParams() {
   return i18n.locales.map((locale) => ({ lang: locale }));
}
 
export default function Root({ children, params } : any) {
  console.log("nitu",params);
  return (
    <html lang={params.lang}>
      <body><LocaleSwitcher></LocaleSwitcher>

        <TopNavbar lang={params.lang}></TopNavbar>
        {children}
      </body>
    </html>
  )
}