"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function LoginPage() {
  const t = useTranslations("Login");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      router.push("/");
    } else {
      setError(t("error"));
    }
  };

  return (
    <div className="font-sans text-gray-900 antialiased min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[rgb(243,244,246)]">
      <div>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={40} />
        </Link>
      </div>
      <div className="flex max-w-screen-lg w-full justify-center gap-2 flex-wrap md:flex-nowrap">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <div className="my-6">
            <h1 className="text-center text-2xl font-bold">{t("title")}</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-sm text-gray-700" htmlFor="email">{t("emailLabel")}</label>
              <input className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full" id="email" type="email" name="email" required autoFocus value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="password">{t("passwordLabel")}</label>
              <input className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full" id="password" type="password" name="password" required autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="block mt-4">
              <label htmlFor="remember_me" className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="remember_me" name="remember" />
                <span className="ml-2 text-sm text-gray-600">{t("rememberMe")}</span>
              </label>
            </div>
            {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
            <div className="flex items-center justify-end mt-4">
              <Link className="underline text-sm text-gray-600 hover:text-gray-900" href="/forgot-password">{t("forgotPassword")}</Link>
              <button type="submit" disabled={loading} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                {loading ? t("loading") : t("loginBtn")}
              </button>
              <Link className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4" href="/register">
                {t("registerBtn")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
