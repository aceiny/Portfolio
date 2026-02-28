import DOMPurify from "dompurify";

export function cleanDescription(htmlString: string): string {
  const cleanHtml = DOMPurify.sanitize(htmlString, { ALLOWED_TAGS: [] });
  return cleanHtml.trim();
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
