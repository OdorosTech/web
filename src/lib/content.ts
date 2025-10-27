export interface ContentItem {
  slug: string;
  title: string;
  description?: string;
  icon?: string;
  order?: number;
  features?: string[];
  solutions?: string[];
  location?: string;
  type?: string;
  content: string;
  [key: string]: any;
}

export async function getContentByType(
  type: "services" | "industries" | "careers"
) {
  const response = await fetch(`/api/content/${type}`);
  const data = await response.json();

  if (!response.ok) {
    return [];
  }
  return data as ContentItem[];
}
