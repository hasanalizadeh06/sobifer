"use client";
import AddBlog from "@/components/AddBlog";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import axios from "axios";

import Image from "next/image";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface Blog {
  id: string;
  title: Record<string, string>;
  content: Record<string, string>;
  images: string[];
}

function BlogsPage() {
  const cookies = parseCookies();
  if (!cookies.accessToken) {
    redirect("/admin/login");
  }
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const fetchBlogs = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch blogs");
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Get current locale from next-intl
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className="p-6">
      <AddBlog onSuccess={fetchBlogs} />
  <h2 className="text-2xl font-bold mt-8 mb-4">{t('Admin.blogs')}</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex items-center gap-2">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg bg-gray-200 p-4 shadow"
          >
            <button
              className="w-full py-14 bg-gradient-to-r from-purple-500 to-blue-500 text-black text-2xl font-extrabold rounded-2xl shadow-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 border-4 border-purple-200"
              onClick={() => setOpen(true)}
            >
              {(blog.title && blog.title[locale] && blog.title[locale].trim() !== "") ? blog.title[locale] : (blog.title.ru || blog.title.az || t('Admin.noTitle'))}
            </button>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
                <Dialog.Content
                  className="z-50 fixed left-1/2 top-1/2 bg-white rounded-lg shadow-xl p-8 w-[80%] h-[80%] max-w-3xl max-h-[80vh] -translate-x-1/2 -translate-y-1/2 focus:outline-none flex flex-col"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <Dialog.Title className="text-2xl font-bold mb-4 flex items-center justify-between">
                    {(blog.title && blog.title[locale] && blog.title[locale].trim() !== "") ? blog.title[locale] : (blog.title.ru || blog.title.az || t('Admin.noTitle'))}
                    <Dialog.Close asChild>
                      <button
                        className="text-gray-400 hover:text-gray-700"
                        aria-label="Close"
                      >
                        <Cross2Icon width={24} height={24} />
                      </button>
                    </Dialog.Close>
                  </Dialog.Title>
                  <div className="border-2 flex-1 overflow-auto">
                      <BlogContent
                        content={blog.content}
                        images={blog.images}
                        locale={locale}
                      />
                  </div>
                  <div className="flex gap-2 mt-4 justify-end">
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        disabled={loading}
                      >
                        {t('Admin.close')}
                      </button>
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        ))}
      </div>
    </div>
  );
}

interface BlogContentProps {
  content: Record<string, string>;
  images: string[];
  locale: string;
}

function BlogContent({ content, images, locale }: BlogContentProps) {
  // Parse content JSON if needed
  let langContent = "";
  try {
    if (typeof content === "string") {
      const parsed = JSON.parse(content);
      langContent = parsed?.[locale] || parsed?.az || parsed?.ru || "";
    } else {
      langContent = content?.[locale] || content?.az || content?.ru || "";
    }
  } catch {
    langContent = "";
  }

  const parseContent = () => {
    const elements: React.ReactNode[] = [];
    // Split by [IMAGE:n] placeholder
    const parts = langContent.split(/(\[IMAGE:\d+\])/);

    parts.forEach((part, index) => {
      const imageMatch = part.match(/\[IMAGE:(\d+)\]/);

      if (imageMatch) {
        const imageIndex = parseInt(imageMatch[1]);
        if (images && images[imageIndex]) {
          elements.push(
            <Image
              key={`image-${index}`}
              src={images[imageIndex]}
              alt={`blog-image-${imageIndex}`}
              width={128}
              height={128}
              className="inline-block h-auto rounded object-cover"
            />
          );
        }
      } else if (part.trim()) {
        elements.push(
          <span
            key={`text-${index}`}
            dangerouslySetInnerHTML={{ __html: part }}
          />
        );
      }
    });

    return elements;
  };

  return <div>{parseContent()}</div>;
}

export default BlogsPage;
