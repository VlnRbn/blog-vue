import axios from "axios";
import { API } from "@/config";
import { IArticle } from "@/interfaces/article.interface";

export const getBlogs = async () => {
  return axios.get(`${API}blogs.json`);
};
export const getBlog = async (id: string | number) => {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  const { data } = await axios.get(`${API}blogs.json`);
  return (data as IArticle[]).find(b => b.id === id);
};
// export default {
//   getBlogs
// };
