/**
 * Format a number with commas (Indian numbering system).
 * e.g., 1500000 → "15,00,000"
 */
export function formatIndianNumber(num: number): string {
  const str = num.toString();
  let result = '';
  const len = str.length;

  if (len <= 3) return str;

  result = str.substring(len - 3);
  let remaining = str.substring(0, len - 3);

  while (remaining.length > 2) {
    result = remaining.substring(remaining.length - 2) + ',' + result;
    remaining = remaining.substring(0, remaining.length - 2);
  }

  if (remaining.length > 0) {
    result = remaining + ',' + result;
  }

  return result;
}

/**
 * Format a date to a readable string.
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

/**
 * Format a phone number to Indian format.
 * e.g., "9876543210" → "+91 98765 43210"
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
}

/**
 * Calculate reading time in minutes.
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

/**
 * Generate a URL-safe slug from a string.
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Truncate text to a given length with ellipsis.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Debounce a function call.
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Format file size from bytes to human-readable string.
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Generate WhatsApp URL with pre-filled message.
 */
export function getWhatsAppUrl(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const fullPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  const url = `https://wa.me/${fullPhone}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}

/**
 * Generate tel: link.
 */
export function getTelUrl(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  return `tel:+91${cleanPhone}`;
}
