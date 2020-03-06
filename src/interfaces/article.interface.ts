export interface IArticle {
  id: number;
  subtitle: string;
  title: string;
  trailer: string;
  slug: string;
  created_At: string;
  author: string;
  speaker: string;
  tags: {
    name: string;
  };
}
