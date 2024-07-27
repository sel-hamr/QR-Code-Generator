import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import QRCode from "qrcode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function generateQRCodeImg(url: string, size: number) {
  return await QRCode.toDataURL(url, {
    width: size,
    margin: 2,
    type: "image/png",
    version: 2,
    maskPattern: 7,
  });
}

export async function generateQRCodeSVG(url: string, size: number) {
  return await QRCode.toString(url, {
    width: size,
    margin: 2,
    type: "svg",
    version: 2,
    maskPattern: 7,
  });
}

export function downloadQRCode(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "qrcode.png";
  a.click();
}
