"use client";
import React, { useEffect, useState } from "react";
type UserProfile = {
  id: number;
  username: string;
  email: string;
  photo: string;
};
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { parseCookies, destroyCookie } from "nookies";
import { useTranslations } from "next-intl";
import userDefault from "@/../public/images/user_default.png";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const t = useTranslations("Admin");
  const [localeLabel, setLocaleLabel] = useState("AZ");
  const [user, setUser] = useState<UserProfile | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const currentLocale =
      typeof window !== "undefined"
        ? window.location.pathname.split("/")[1]
        : "az";
    setLocaleLabel(currentLocale === "ru" ? "RU" : "AZ");
  }, []);

  // Kullanıcı profilini yükle ve custom event ile refresh et
  useEffect(() => {
    const fetchUser = () => {
      const { accessToken } = parseCookies();
      if (accessToken) {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((res) => {
            if (res.data.error) {
              destroyCookie(null, "accessToken", { path: "/" });
              router.push("/admin/login");
              return;
            }
            setUser(res.data);
          })
          .catch(() => {
            destroyCookie(null, "accessToken", { path: "/" });
            router.push("/admin/login");
            setUser(null);
          });
      } else {
        setUser(null);
      }
    };
    fetchUser();
    const handler = () => fetchUser();
    window.addEventListener("user-profile-refresh", handler);
    return () => window.removeEventListener("user-profile-refresh", handler);
  }, [router]);


  const handleLogout = async () => {
    const { accessToken } = parseCookies();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      destroyCookie(null, "accessToken", { path: "/" });
      toast.success(t("logoutSuccess"));
      setUser(null);
      router.push("/admin/login");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error(t("logoutError"));
      }
      toast.error(t("logoutError"));
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow-md fixed h-full">
          <div className="p-6 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="h-20 w-full"
                width={1000}
                height={80}
              />
            </Link>
            {user && (
              <div className="flex flex-col items-center mt-6 mb-2 p-4 rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
                <Image
                  src={user.photo ? user.photo : userDefault}
                  alt={user.username}
                  width={64}
                  height={64}
                  className="rounded-full h-16 w-16 border-2 border-purple-400 shadow cursor-pointer"
                  onClick={() => setShowModal(true)}
                />
                <div className="mt-2 font-semibold text-gray-800 text-lg">
                  {user.username}
                </div>
                <div className="text-xs text-gray-500">{user.email}</div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-center py-2 px-4 rounded hover:bg-red-100 text-red-600 font-semibold transition"
                >
                  {t("logout")}
                </button>
              </div>
            )}
          </div>
          <nav className="mt-6">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin/dashboard"
                  className="block py-2 px-4 rounded hover:bg-gray-200"
                >
                  {t("dashboard")}
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/blogs"
                  className="block py-2 px-4 rounded hover:bg-gray-200"
                >
                  {t("blogs")}
                </Link>
              </li>
              <li>
                <button
                  className="w-full text-left py-2 px-4 rounded hover:bg-gray-200 font-semibold transition uppercase"
                  onClick={() => {
                    const currentLocale =
                      typeof window !== "undefined"
                        ? window.location.pathname.split("/")[1]
                        : "az";
                    let nextLocale = "az";
                    let nextLabel = "AZ";
                    if (currentLocale === "az") {
                      nextLocale = "ru";
                      nextLabel = "RU";
                    } else {
                      nextLocale = "az";
                      nextLabel = "AZ";
                    }
                    const newPath = window.location.pathname.replace(
                      /^\/(az|ru)/,
                      "/" + nextLocale
                    );
                    window.location.pathname = newPath;
                  }}
                >
                  {localeLabel}
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="ml-64 flex-1">{children}</div>

      {/* Upload Image Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-purple-100 via-white to-purple-200 p-8 rounded-2xl shadow-2xl w-full max-w-md relative border-2 border-purple-300 animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-purple-600 text-2xl font-bold transition"
              onClick={() => { setShowModal(false); setSelectedFile(null); }}
              aria-label="Close"
            >×</button>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full border-4 border-purple-400 shadow-lg flex items-center justify-center overflow-hidden bg-white">
                  {selectedFile ? (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={user?.photo || '/images/logo.png'}
                      alt="Current"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <h2 className="text-xl font-extrabold text-purple-700 mb-2 tracking-wide">{t('photoModalTitle')}</h2>
              <p className="text-gray-600 mb-4 text-sm text-center">{t('photoModalDesc')}</p>
              <form
                className="w-full"
                onSubmit={async e => {
                  e.preventDefault();
                  if (!selectedFile) return;
                  setUploading(true);
                  const formData = new FormData();
                  formData.append('photo', selectedFile, selectedFile.name);
                  const { accessToken } = parseCookies();
                  try {
                    await axios.patch(
                      'http://localhost:3000/users/me/photo',
                      formData,
                      {
                        headers: {
                          'Authorization': `Bearer ${accessToken}`,
                          'Content-Type': 'multipart/form-data',
                        },
                      }
                    );
                    toast.success('Şəkil uğurla yeniləndi!');
                    setShowModal(false);
                    setSelectedFile(null);
                    setUploading(false);
                    window.dispatchEvent(new Event('user-profile-refresh'));
                  } catch (err) {
                    toast.error('Şəkil yenilənmədi!');
                    setUploading(false);
                  }
                }}
              >
                <label className="block mb-3 text-sm font-semibold text-purple-700">{t('photoModalLabel')}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => setSelectedFile(e.target.files?.[0] || null)}
                  className="mb-4 block w-full border border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg font-bold hover:scale-105 hover:shadow-lg transition-all duration-200"
                  disabled={uploading}
                >
                  {uploading ? (
                    <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg> {t('photoModalLoading')}</span>
                  ) : (
                    t('photoModalBtn')
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
