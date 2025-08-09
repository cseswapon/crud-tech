/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { Input, Select, DatePicker, Button } from "antd";
import debounce from "lodash.debounce";
import { useArticleContext } from "../context/ArticleContext";
import { mockArticles } from "../data/mockData";

const { RangePicker } = DatePicker;

const Filters: React.FC = () => {
  const { setSearch, setAuthor, setDateRange } = useArticleContext();
  const [authorOptions, setAuthorOptions] = useState<string[]>([]);

  useEffect(() => {
    const uniqueAuthors = Array.from(
      new Set(mockArticles.map((article) => article.author))
    );
    setAuthorOptions(uniqueAuthors);
  }, []);

  const handleSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 300),
    []
  );

  const clearFilters = () => {
    setSearch("");
    setAuthor("");
    setDateRange(null);
  };

  return (
    <div className="flex gap-4 mb-4 items-center">
      <Input
        placeholder="Search by title"
        onChange={(e) => handleSearch(e.target.value)}
        className=""
        allowClear
      />
      <Select
        placeholder="Filter by author"
        allowClear
        style={{ width: 200 }}
        onChange={(value) => setAuthor(value)}
        options={authorOptions.map((author) => ({
          value: author,
          label: author,
        }))}
      />
      <RangePicker
        onChange={(_dates, dateStrings) => {
          if (dateStrings[0] && dateStrings[1]) {
            setDateRange([dateStrings[0], dateStrings[1]]);
          } else {
            setDateRange(null);
          }
        }}
        allowClear
      />
      <Button onClick={clearFilters} type="default" className="ml-2">
        Reset Filters
      </Button>
    </div>
  );
};

export default Filters;
