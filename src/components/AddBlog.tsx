"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { parseCookies } from "nookies";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";


const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { useTranslations } from "next-intl";

interface AddBlogProps {
  onSuccess?: () => void;
}

export default function AddBlog({ onSuccess }: AddBlogProps) {
  const t = useTranslations("Admin");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<{ ru: string; az: string }>({ ru: "", az: "" });
  const [content, setContent] = useState<{ ru: string; az: string }>({ ru: "", az: "" });
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cookies = parseCookies();

  // Custom image handler for Quill: insert [IMAGE:number] and store file
  // Quill type: https://github.com/quilljs/quill/blob/develop/types/index.d.ts
  const imageHandler = function (this: { quill?: { getSelection: (focus?: boolean) => { index: number } | null; insertText: (index: number, text: string) => void } }) {
    console.log("Image handler triggered");
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/png,image/jpeg,image/jpg,image/webp");
    input.click();
    input.onchange = () => {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        if (file.type === "image/gif") {
          alert(t("gifNotAllowed"));
          return;
        }
        setImageFiles((prev) => {
          console.log("Adding image file:", file);
          return [...prev, file];
        });
        // Use Quill's API to insert placeholder
        const quill = this.quill;
        if (quill) {
          const placeholder = `[IMAGE:${imageFiles.length}]`;
          const range = quill.getSelection(true);
          quill.insertText(range ? range.index : 0, placeholder);
        }
      } else {
        console.log("No file selected");
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      // Append each field of title and content as separate keys
      Object.entries(title).forEach(([key, value]) => {
        formData.append(`title[${key}]`, value);
      });
      Object.entries(content).forEach(([key, value]) => {
        formData.append(`content[${key}]`, value);
      });
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });
      await axios.post(process.env.NEXT_PUBLIC_API_URL + "/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      });
      setLoading(false);
      if (onSuccess) onSuccess();
      setOpen(false);
      setTitle({ ru: "", az: "" });
      setContent({ ru: "", az: "" });
      setImageFiles([]);
    } catch (err: unknown) {
      setLoading(false);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || t("addBlogError"));
      } else {
        setError(t("addBlogError"));
      }
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r text-white from-purple-500 to-blue-500 rounded-2xl shadow-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-[2000ms] border-4 border-purple-200">
        <button
          className="w-full py-14 text-2xl font-extrabold"
          style={{ minHeight: 50 }}
          onClick={() => setOpen(true)}
        >
          {t("addNewBlogButton")}
        </button>
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content
            className="z-50 fixed left-1/2 top-1/2 bg-white overflow-x-scroll rounded-lg shadow-xl p-8 w-[80%] h-[80%] max-w-3xl max-h-[80vh] -translate-x-1/2 -translate-y-1/2 focus:outline-none flex flex-col"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <Dialog.Title className="text-2xl font-bold mb-4 flex items-center justify-between">
              {t("addNewBlogTitle")}
              <Dialog.Close asChild>
                <button
                  className="text-gray-400 hover:text-gray-700"
                  aria-label="Close"
                >
                  <Cross2Icon width={24} height={24} />
                </button>
              </Dialog.Close>
            </Dialog.Title>
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={title.az}
                  onChange={(e) => setTitle({ ...title, az: e.target.value })}
                  placeholder={t("titleAz")}
                  className="w-full px-4 py-2 border rounded text-lg"
                  required
                />
                <input
                  type="text"
                  value={title.ru}
                  onChange={(e) => setTitle({ ...title, ru: e.target.value })}
                  placeholder={t("titleRu")}
                  className="w-full px-4 py-2 border rounded text-lg"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col min-h-0 gap-18">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    {t("contentAz")}
                  </label>
                  <ReactQuill
                    value={content.az}
                    onChange={(val) => setContent({ ...content, az: val })}
                    theme="snow"
                    modules={modules}
                    className="h-32 max-h-[300px]"
                    style={{ minHeight: 0, height: "100%" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    {t("contentRu")}
                  </label>
                  <ReactQuill
                    value={content.ru}
                    onChange={(val) => setContent({ ...content, ru: val })}
                    theme="snow"
                    modules={modules}
                    className="h-32 max-h-[300px]"
                    style={{ minHeight: 0, height: "100%" }}
                  />
                </div>
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <div className="text-xs text-gray-500 mt-20">
                {t("images")} {imageFiles.length} | {t("contentLengthAz")} {content.az.length}, {t("contentLengthRu")} {content.ru.length}
              </div>
              <div className="flex gap-2 mt-4 justify-end">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    disabled={loading}
                  >
                    {t("cancel")}
                  </button>
                </Dialog.Close>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? t("submitting") : t("submit")}
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
