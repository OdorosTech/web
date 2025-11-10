// export interface ContentItem {
//   slug: string;
//   title: string;
//   description?: string;
//   icon?: string;
//   order?: number;
//   features?: string[];
//   solutions?: string[];
//   location?: string;
//   type?: string;
//   content: string;
//   [key: string]: any;
// }

// // New interface specifically for blog posts
// export interface BlogPost extends ContentItem {
//   // Blog-specific fields
//   date: string;
//   author: string;
//   authorRole: string;
//   readTime: string;
//   category: string;
//   excerpt: string;
//   featuredImage: string;
//   tags: string[];
  
//   // Optional blog fields
//   authorBio?: string;
//   authorImage?: string;
//   authorLinkedIn?: string;
//   authorTwitter?: string;
//   relatedArticles?: string[];
//   published?: boolean;
// }

// export async function getContentByType(
//   type: "services" | "industries" | "careers" | "blog"
// ) {
//   const response = await fetch(`/api/content/${type}`);
//   const data = await response.json();

//   if (!response.ok) {
//     return [];
//   }
//   return data as ContentItem[];
// }


// // Update the getContentByType function to handle blog posts
// // export async function getContentByType(type: string): Promise<ContentItem[]> {
// //   const contentDir = path.join(process.cwd(), "content", type);
  
// //   if (!fs.existsSync(contentDir)) {
// //     return [];
// //   }

// //   const files = fs.readdirSync(contentDir);
// //   const content = files
// //     .filter((file) => file.endsWith(".md"))
// //     .map((file) => {
// //       const filePath = path.join(contentDir, file);
// //       const fileContent = fs.readFileSync(filePath, "utf-8");
// //       const { data, content } = matter(fileContent);

// //       return {
// //         slug: file.replace(".md", ""),
// //         ...data,
// //         content,
// //       } as ContentItem;
// //     });

// //   return content.sort((a, b) => (a.order || 0) - (b.order || 0));
// // }

// // New function specifically for blog posts
// export async function getBlogPosts(): Promise<BlogPost[]> {
//   const posts = await getContentByType("blog");
//   return posts as BlogPost[];
// }

// // Get single blog post by slug
// export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
//   const posts = await getBlogPosts();
//   return posts.find((post) => post.slug === slug) || null;
// }

// // Get blog posts by category
// export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
//   const posts = await getBlogPosts();
//   return posts.filter((post) => post.category === category);
// }

// // Get blog posts by tag
// export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
//   const posts = await getBlogPosts();
//   return posts.filter((post) => post.tags?.includes(tag));
// }

// lib/content.ts
// export interface ContentItem {
//   slug: string;
//   title: string;
//   description?: string;
//   icon?: string;
//   order?: number;
//   features?: string[];
//   solutions?: string[];
//   location?: string;
//   type?: string;
//   content: string;
//   [key: string]: any;
// }

// export interface BlogPost extends ContentItem {
//   date: string;
//   author: string;
//   authorRole: string;
//   readTime: string;
//   category: string;
//   excerpt: string;
//   featuredImage: string;
//   tags: string[];
//   authorBio?: string;
//   authorImage?: string;
//   authorLinkedIn?: string;
//   authorTwitter?: string;
//   relatedArticles?: string[];
//   published?: boolean;
// }

// export async function getContentByType(type: string): Promise<ContentItem[]> {
//   try {
//     const response = await fetch(`/api/content/${type}`, {
//       cache: "no-store",
//     });
    
//     if (!response.ok) {
//       console.error(`Failed to fetch ${type}:`, response.statusText);
//       return [];
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error(`Error fetching ${type}:`, error);
//     return [];
//   }
// }

// export async function getBlogPosts(): Promise<BlogPost[]> {
//   const posts = await getContentByType("blog");
//   return posts as BlogPost[];
// }

// export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
//   const posts = await getBlogPosts();
//   return posts.find((post) => post.slug === slug) || null;
// }

// export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
//   const posts = await getBlogPosts();
//   return posts.filter((post) => post.category === category);
// }

// export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
//   const posts = await getBlogPosts();
//   return posts.filter((post) => post.tags?.includes(tag));
// }


// lib/content.ts
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

export interface BlogPost extends ContentItem {
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
  authorBio?: string;
  authorImage?: string;
  authorLinkedIn?: string;
  authorTwitter?: string;
  relatedArticles?: string[];
  published?: boolean;
}

export async function getContentByType(type: string): Promise<ContentItem[]> {
  try {
    // Use absolute URL for client-side fetching
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/content/${type}`, {
      cache: "no-store",
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch ${type}:`, response.statusText);
      return [];
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getContentByType("blog");
  return posts as BlogPost[];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}