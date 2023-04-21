import React from "react";
import { QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

function InternalSearch() {
  return (
    <Input
      addonAfter={<SearchOutlined />}
      addonBefore={<QuestionCircleOutlined />}
      placeholder="Filter..."
      style={{
        width: "240px",
      }}
    />
  );
}

export default InternalSearch;
