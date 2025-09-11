"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

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
      <div>
        {t('companyInfo')}<br />
        {t('representation')}<br />
        {t('address')}<br />
        <Link href={`https://${t('web')}`} target="_blank" rel="noopener noreferrer">{t('web')}</Link><br />
        {t('mobile')}<br />
        {t('phone')}<br />
        {t('email') && (
        <Link href={`mailto:${t('email')}`}>{t('email')}</Link>
        )}
      </div>
      </div>
    </footer>
    </div>
  );
}


