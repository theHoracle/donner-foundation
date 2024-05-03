import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  amount: number | string,
  options: {
    currency?:  "NGN"; //"USD" | "EUR" | "GBP" |
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  
  const { currency = "NGN", notation = "compact" } = options;
  const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericAmount)
}