"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { parseCookies } from "nookies";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

interface AddBlogProps {
  onSuccess?: () => void;
}

export default function AddBlog({ onSuccess }: AddBlogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
          alert("GIF images are not allowed. Please select PNG, JPG, or WEBP.");
          return;
        }
        setImageFiles((prev) => {
          console.log("Adding image file:", file);
          return [...prev, file];
        });
        console.log(content)
        // Use Quill's API to insert placeholder
        const quill = this.quill;
        if (quill) {
          const placeholder = `[IMAGE:${imageFiles.length}]`;
          const range = quill.getSelection(true);
          console.log("Quill found, inserting placeholder at range:", range);
          quill.insertText(range ? range.index : 0, placeholder);
        } else {
          console.log("Quill instance not found");
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
      formData.append("title", title);
      formData.append("content", content);
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });
      await axios.post(API_URL + "/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      });
      setLoading(false);
      if (onSuccess) onSuccess();
      setOpen(false);
      setTitle("");
      setContent("");
      setImageFiles([]);
  } catch (err: unknown) {
      setLoading(false);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to add blog.");
      } else {
        setError("Failed to add blog.");
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
            + Add New Blog
        </button>
      </div>
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Dialog.Content
          className="z-50 fixed left-1/2 top-1/2 bg-white rounded-lg shadow-xl p-8 w-[80%] h-[80%] max-w-3xl max-h-[80vh] -translate-x-1/2 -translate-y-1/2 focus:outline-none flex flex-col"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Dialog.Title className="text-2xl font-bold mb-4 flex items-center justify-between">
            Add New Blog
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
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full px-4 py-2 border rounded mb-2 text-lg"
              required
            />
            <div className="flex-1 flex flex-col min-h-0">
              <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                modules={modules}
                className="flex-1 h-full"
                style={{ minHeight: 0, height: "100%" }}
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div className="text-xs text-gray-500 m-2">
              Images: {imageFiles.length} | Content length: {content.length}
            </div>
            <div className="flex gap-2 mt-4 justify-end">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  disabled={loading}
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </>
  );
}
