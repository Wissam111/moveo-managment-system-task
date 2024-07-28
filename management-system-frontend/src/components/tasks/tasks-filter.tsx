"use client";

import React, { useState } from "react";
import { Input, Select } from "antd";
import type { GetProps } from "antd";
import type { SelectProps } from "antd/es/select";
import useSearch from "@/hooks/useSearch";
const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

const options: { value: number; label: string }[] = [
  { value: 0, label: "priority" },
  { value: 1, label: "createdAt" },
];

type FilterProps = {
  sortBy?: string;
  search?: string;
};
type Props = {
  handleChangeFilters: ({ sortBy, search }: FilterProps) => void;
};
const TasksFilter: React.FC<Props> = ({ handleChangeFilters }) => {
  const [sortBy, setSoryBy] = useState<{ value: string; label: string } | null>(
    null
  );
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log("----", info?.source, value);
  };
  // const {searchTerm} = useSearch({
  //   //@ts-ignore
  //   handleSearch: (searchTerm: string) =>
  //     handleChangeFilters({ sortBy: sortBy?.label, search: searchTerm }),
  // });

  const handleChange = (value: { value: string; label: string }) => {
    handleChangeFilters({ sortBy: value?.label });
    setSoryBy(value);
  };

  return (
    <div className="flex gap-5 px-4 pb-4">
      {/* <Search
        placeholder="Search tasks..."
        // onSearch={onSearch}
        onSearch={onSearch}
        allowClear
        style={{ width: 200 }}
      /> */}
      <Select
        labelInValue
        placeholder="Sort tasks"
        style={{ width: 120 }}
        // loading
        value={sortBy}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default TasksFilter;
