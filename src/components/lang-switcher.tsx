"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../i18n-config";


export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: any) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    console.log(pathName);
    segments[1] = locale;
    console.log(segments)
    return segments.join("/");
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}