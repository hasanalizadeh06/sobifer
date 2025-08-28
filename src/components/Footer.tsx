"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-white">
    <footer className="max-w-screen-xl w-full mx-auto py-24 lg:py-32 px-4 lg:px-32">
      <div className="bg-[#1d3f78] text-center text-white w-full rounded-xl py-12">
        <Image
          src="/images/egis.png"
          alt="Egis logo"
          width={160}
          height={80}
          className="mx-auto w-[62px] h-[32px] object-contain rounded"
        />
        <div className="my-12 underline">{t('disclaimer')}</div>
        <div className="">
          {t('companyInfo')}<br />
          {t('representation')}<br />
          {t('address')}<br />
          {t('phone')}<br />
          <a href={`mailto:${t('email')}`}>{t('email')}</a>
        </div>
      </div>
    </footer>
    </div>
  );
}


