"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import { usePathname } from "next/navigation";

export default function Navbar(): React.JSX.Element {
  const t = useTranslations("HomePage");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [localeLabel, setLocaleLabel] = useState('AZ');

  useEffect(() => {
    const currentLocale = window.location.pathname.split('/')[1];
    setLocaleLabel(currentLocale === 'ru' ? 'RU' : 'AZ');
  }, []);
  console.log(pathname);

  return (
    <header>
      {/* Desktop */}
      <div className="fixed flex justify-center w-full h-24 bg-white/60 backdrop-blur-sm z-10 md:z-20">
        <div className="flex mx-4 max-w-screen-xl w-full h-full justify-between items-center">
            <Link className="block" href="/">
            <span className="block h-[66px] w-[100px] relative">
              <Image
              src={logo}
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
              sizes="160px"
              priority
              />
            </span>
            </Link>
          <ul className="hidden md:flex flex-nowrap pt-4">
            <li className="relative ml-8">
              <Link href="/" className={`block py-2 ${["/1", "/2", "/3"].includes(pathname.slice(3)) ? "font-bold" : ""}`}>{t('navigation.interactiveTest')}</Link>
            </li>
            <li className="relative ml-8">
              <Link href="/knowledgebase" className={`block py-2 ${pathname.slice(3) == "/knowledgebase" ? "font-bold" : ""}`}>{t('navigation.knowledgeBase')}</Link>
            </li>
          </ul>
          <ul className="hidden md:block">
            <li>
              <button
                className="py-2 px-4 -mr-4 uppercase text-sm bg-transparent border-none cursor-pointer"
                onClick={() => {
                  const currentLocale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'az';
                  let nextLocale = 'az';
                  if (currentLocale === 'az') {
                    nextLocale = 'ru';
                  } else {
                    nextLocale = 'az';
                  }
                  const newPath = window.location.pathname.replace(/^\/(az|ru)/, '/' + nextLocale);
                  window.location.pathname = newPath;
                }}
              >
                {localeLabel}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <nav>
        <div className={`fixed overflow-hidden w-full min-h-full bg-black/60 -z-10 bg-opacity-0 delay-300 ${open ? 'z-30 bg-black/0' : '-z-10 bg-opacity-0 delay-300'}`} style={{ transitionDuration: '0ms' }}>
          <div className={`absolute w-10/12 right-0 h-full bg-sorbifer-dark transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col justify-between">
          <ul className="mt-16 mx-12 md:hidden font-bold text-white">
            <li className="relative mb-4">
          <Link href="/" className="block py-2" onClick={() => setOpen(false)}>{t('navigation.interactiveTest')}</Link>
            </li>
            <li className="relative mb-4">
          <Link href="/knowledgebase" className="block py-2" onClick={() => setOpen(false)}>{t('navigation.knowledgeBase')}</Link>
            </li>
          </ul>
          <div className="px-12 pt-8 pb-8 border-t border-sorbifer-light">
            <ul className="font-bold text-white uppercase ml-4">
          <li>
            <button
              className="py-2 px-4 -mr-4 uppercase text-sm bg-transparent border-none cursor-pointer"
              onClick={() => {
            const currentLocale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'az';
            let nextLocale = 'az';
            if (currentLocale === 'az') {
              nextLocale = 'ru';
            } else {
              nextLocale = 'az';
            }
            const newPath = window.location.pathname.replace(/^\/(az|ru)/, '/' + nextLocale);
            window.location.pathname = newPath;
              }}
            >
              {localeLabel}
            </button>
          </li>
            </ul>
          </div>
        </div>
          </div>
        </div>
        <div className="fixed flex justify-end items-center top-0 right-4 h-20 md:h-24 md:hidden z-30">
          <button
        onClick={(e) => { e.preventDefault(); setOpen(!open); }}
        className="relative block h-6 w-6 text-sorbifer-dark"
        aria-label="Toggle menu"
          >
        <svg className={`block absolute top-0 h-6 w-6 transition-opacity duration-75 delay-300 ${open ? 'opacity-0' : 'delay-300'}`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <div className={`opacity-0 transition-opacity duration-75 text-sorbifer-light delay-300 ${open ? 'opacity-100' : 'opacity-0 delay-300'}`}>
          <svg className={`block absolute top-0 h-6 w-6 transition-transform duration-300 ${open ? 'rotate-360' : ''}`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
          </button>
        </div>
      </nav>
    </header>
  );
}


