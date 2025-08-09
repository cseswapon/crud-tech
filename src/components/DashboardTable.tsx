import React, { useEffect, useState } from "react";
import { Table, Button, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useArticleContext } from "../context/ArticleContext";
import EditArticleModal from "./EditArticleModal";
import type { Article } from "../types/auth";

const DashboardTable: React.FC = () => {
  const { filteredArticles } = useArticleContext();

  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (filteredArticles) {
      setArticles(filteredArticles);
    }
  }, [filteredArticles]);

  const handleEdit = (article: Article) => {
    setSelectedArticle(article);
    setIsModalVisible(true);
  };

  const handleSave = (updated: Article) => {
    const updatedArticles = articles.map((a) =>
      a.id === updated.id ? updated : a
    );
    setArticles(updatedArticles);
    setIsModalVisible(false);
  };

  const columns: ColumnsType<Article> = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Author", dataIndex: "author", key: "author" },
    {
      title: "Published Date",
      dataIndex: "publishedDate",
      key: "publishedDate",
    },
    { title: "Views", dataIndex: "views", key: "views" },
    { title: "Likes", dataIndex: "likes", key: "likes" },
    { title: "Comments", dataIndex: "comments", key: "comments" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Published" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) =>
        role === "admin" ? (
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
        ) : (
          <span style={{ color: "#999" }}>No access</span>
        ),
    },
  ];

  return (
    <>
      <Table
        dataSource={articles}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        loading={!articles.length}
        scroll={{ x: "max-content" }} 
        className="overflow-x-auto"
      />

      <EditArticleModal
        article={selectedArticle}
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={handleSave}
      />
    </>
  );
};

export default DashboardTable;
