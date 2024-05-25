import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const isActiveCategory = (categoryPath: string, currentPath: string, route: string) => {
  const relativePath = currentPath.replace(route, "");
  if (relativePath === "" && categoryPath === "/") {
    return true;
  }
  if (categoryPath !== "/" && currentPath.startsWith(route + categoryPath)) {
    return true;
  }

  return false;
};
