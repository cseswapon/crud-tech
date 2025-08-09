export interface Article {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  status: "Published" | "Draft";
  views: number;
  likes: number;
  comments: number;
  categories: string[];
  content: string;
}
export interface User {
  id: string;
  username: string;
  role: "admin" | "editor";
  token: string;
}
