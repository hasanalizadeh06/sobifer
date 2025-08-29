"use client";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [success, setSuccess] = useState(false);
  const t = useTranslations('Register');

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
          <p className="text-green-600 font-semibold">{t('success')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900 antialiased bg-white">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" width={200} height={80} alt="Logo" />
          </Link>
        </div>
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <form
            onSubmit={e => {
              e.preventDefault();
              setSuccess(true);
            }}
          >
            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="phone">
                {t('phoneLabel')}
              </label>
              <input
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
                type="tel"
                name="phone"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="name">
                {t('nameLabel')}
              </label>
              <input
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
                id="name"
                type="text"
                name="name"
                autoFocus
                autoComplete="name"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="lastname">
                {t('lastnameLabel')}
              </label>
              <input
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
                id="lastname"
                type="text"
                name="lastname"
                autoComplete="lastname"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="speciality">
                {t('specialityLabel')}
              </label>
              <select
                id="speciality"
                className="block mt-1 w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                name="speciality"
                required
              >
                <option value=""></option>
                {Object.entries(t.raw('specialityOptions') as Record<string, string>).map(([key, value]) => (
                  <option key={key} value={key}>{String(value)}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="email">
                {t('emailLabel')}
              </label>
              <input
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="password">
                {t('passwordLabel')}
              </label>
              <input
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
                id="password"
                name="password"
                autoComplete="new-password"
                required
                type="password"
              />
            </div>
            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="password_confirmation">
                {t('passwordConfirmLabel')}
              </label>
              <input
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
                id="password_confirmation"
                name="password_confirmation"
                autoComplete="new-password"
                required
                type="password"
              />
            </div>
            <div className="mt-4 mb-8 font-bold text-sm">
              {t('doctorConfirm')}
            </div>
            <div className="flex items-center justify-end mt-4">
              <Link
                className="underline text-sm text-gray-600 hover:text-gray-900"
                href="/login"
              >
                {t('alreadyRegistered')}
              </Link>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4"
              >
                {t('registerBtn')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
