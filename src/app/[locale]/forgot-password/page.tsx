"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const t = useTranslations("ForgotPassword");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Simulate sending email
    if (!email) {
      setError(t("error"));
      return;
    }
    setSent(true);
  };
  return (
    <div className="font-sans text-gray-900 antialiased min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div>
        <Link href="/">
          <Image src={typeof window !== 'undefined' && window.location.pathname.split('/')[1] === 'az' ? '/images/logo_az.png' : '/images/logo.png'} alt="Logo" width={200} height={80} />
        </Link>
      </div>
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="mb-4 text-sm text-gray-600">
          {t("info")}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="block">
            <label className="block font-medium text-sm text-gray-700" htmlFor="email">
              {t("emailLabel")}
            </label>
            <input className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full" id="email" type="email" name="email" required autoFocus value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
          <div className="flex items-center justify-end mt-4">
            <button type="submit" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150">
              {t("submitBtn")}
            </button>
          </div>
          {sent && <div className="text-green-600 mt-4 text-sm">{t("sentMsg")}</div>}
        </form>
      </div>
    </div>
  );
}
