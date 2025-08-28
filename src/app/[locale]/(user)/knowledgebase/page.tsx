"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function KnowledgeBasePage() {
  const t = useTranslations("KnowledgeBase");
  const th = useTranslations("HomePage");

  return (
    <div
      className="relative min-h-screen min-w-full z-0"
      style={{ maxWidth: "100vw" }}
    >
      {/* Navbar handled by layout */}

      {/* Main Content */}
      <main className="bg-white">
        <div className="pt-48 max-w-screen-lg w-full mx-auto px-4">
          <div className="max-w-screen-sm w-full mx-auto text-center">
            <h1 className="text-2xl font-bold">{t("title")}</h1>
            <div className="my-8">{t("subtitle")}</div>
          </div>

          <ul className="w-full border-sorbifer-light border-b pt-8">
            <li className="border-sorbifer-light border-t">
              <Link href="/knowledgebase/1" className="block w-full py-8 items-center">
                <h1 className="text-2xl text-sorbifer-dark">
                  {t("kbItem1Title")}
                </h1>
                <div className="my-2">{t("kbItem1Date")}</div>
              </Link>
            </li>
            <li className="border-sorbifer-light border-t">
              <Link href="/knowledgebase/2" className="block w-full py-8 items-center">
                <h1 className="text-2xl text-sorbifer-dark">
                  {t("kbItem2Title")}
                </h1>
                <div className="my-2">{t("kbItem2Date")}</div>
              </Link>
            </li>
            <li className="border-sorbifer-light border-t">
              <Link href="/knowledgebase/3" className="block w-full py-8 items-center">
                <h1 className="text-2xl text-sorbifer-dark">
                  {t("kbItem3Title")}
                </h1>
                <div className="my-2">{t("kbItem3Date")}</div>
              </Link>
            </li>
            <li className="border-sorbifer-light border-t">
              <Link href="/knowledgebase/4" className="block w-full py-8 items-center">
                <h1 className="text-2xl text-sorbifer-dark">
                  {t("kbItem4Title")}
                </h1>
                <div className="my-2">{t("kbItem4Date")}</div>
              </Link>
            </li>
            <li className="border-sorbifer-light border-t">
              <Link href="/knowledgebase/5" className="block w-full py-8 items-center">
                <h1 className="text-2xl text-sorbifer-dark">
                  {t("kbItem5Title")}
                </h1>
                <div className="my-2">{t("kbItem5Date")}</div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="relative max-w-screen-xl w-full mx-auto mt-12">
          <div className="lg:absolute left-0 right-0 flex justify-center lg:justify-end">
            <div
              className="px-4 lg:px-32 pt-12 lg:pt-24 flex lg:justify-end"
              id="benefits"
            >
              <h1 className="text-2xl text-sorbifer-dark font-bold">
                <span
                  dangerouslySetInnerHTML={{ __html: th("benefitsTitle") }}
                />
              </h1>
            </div>
          </div>
          <Image
            src="/images/girl.png"
            alt="Girl"
            width={868}
            height={540}
            className="w-full max-w-[868px]"
            priority
          />
          <div className="lg:absolute left-0 top-0 right-0 flex justify-center lg:justify-end">
            <div className="px-4 lg:px-32 pt-12 lg:pt-24 flex lg:justify-end">
              <ul className="lg:mt-32">
                <li className="mb-8 flex items-end">
                  <Image
                    src="/images/checkmark.png"
                    alt=""
                    width={22}
                    height={22}
                    className="mr-8"
                  />
                  <span dangerouslySetInnerHTML={{ __html: th("benefit1") }} />
                </li>
                <li className="mb-8 flex items-end">
                  <Image
                    src="/images/checkmark.png"
                    alt=""
                    width={22}
                    height={22}
                    className="mr-8"
                  />
                  <span dangerouslySetInnerHTML={{ __html: th("benefit2") }} />
                </li>
                <li className="mb-8 flex items-end">
                  <Image
                    src="/images/checkmark.png"
                    alt=""
                    width={22}
                    height={22}
                    className="mr-8"
                  />
                  <span dangerouslySetInnerHTML={{ __html: th("benefit3") }} />
                </li>
                <li className="mb-8 flex items-end">
                  <Image
                    src="/images/checkmark.png"
                    alt=""
                    width={22}
                    height={22}
                    className="mr-8"
                  />
                  <span dangerouslySetInnerHTML={{ __html: th("benefit4") }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
