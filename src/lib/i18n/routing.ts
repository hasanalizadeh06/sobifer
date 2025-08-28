import { defineRouting } from "next-intl/routing";

export const locales = ["az", "ru"];

export const routing = defineRouting({
  locales,
  defaultLocale: locales[0],
});
