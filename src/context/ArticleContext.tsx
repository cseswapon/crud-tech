/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";
import type { Article } from "../types/auth";
import { mockArticles } from "../data/mockData";

interface ArticleContextType {
  filteredArticles: Article[];
  setSearch: (val: string) => void;
  setAuthor: (val: string) => void;
  setDateRange: (range: [string, string]) => void;
  setSortKey: (key: keyof Article | null) => void;
}

const ArticleContext = createContext<ArticleContextType>(
  {} as ArticleContextType
);

export const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    const [articles] = useState<Article[]>(mockArticles);
    console.log(articles);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState("");
  const [dateRange, setDateRange] = useState<[string, string] | null>(null);
  const [sortKey, setSortKey] = useState<keyof Article | null>(null);

  useEffect(() => {
    let result = [...articles];

    if (search) {
      result = result.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (author) {
      result = result.filter((article) => article.author === author);
    }

    if (dateRange) {
      result = result.filter((article) => {
        const published = new Date(article.publishedDate).getTime(); // ✅ FIXED
        const [start, end] = dateRange.map((d) => new Date(d).getTime());
        return published >= start && published <= end;
      });
    }

    if (sortKey) {
      result.sort((a, b) => {
        const aValue = a[sortKey] as number;
        const bValue = b[sortKey] as number;
        return bValue - aValue;
      });
    }

    setFilteredArticles(result);
  }, [articles, search, author, dateRange, sortKey]);

  return (
    <ArticleContext.Provider
      value={{
        filteredArticles,
        setSearch,
        setAuthor,
        setDateRange,
        setSortKey,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => useContext(ArticleContext);
