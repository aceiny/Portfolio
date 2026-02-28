import { useEffect, useState } from "react";
import { fetchMediumBlogs } from "@/api/blogs.api";
import { MediumBlogPost, MediumFeed } from "@/types/medium.types";

export function useMediumBlogs() {
  const [blogs, setBlogs] = useState<MediumBlogPost[]>([]);
  const [feed, setFeed] = useState<MediumFeed | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const medium = await fetchMediumBlogs();
        setBlogs(medium.items);
        setFeed(medium.feed);
      } catch (err) {
        console.error("Failed to fetch Medium blogs:", err);
        setError("Failed to fetch blogs");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return { blogs, feed, isLoading, error };
}
