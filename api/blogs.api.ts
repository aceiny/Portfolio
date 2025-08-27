import { blogInfo } from "@/constants/blogs";
import { MediumResponse } from "@/types/medium.types";
import axios from "axios";
export const fetchMediumBlogs = async (): Promise<MediumResponse> => {
  try {
    const response = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${blogInfo.mediumUsername}`,
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch blogs from Medium");
    }
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch blogs from Medium");
  }
};
