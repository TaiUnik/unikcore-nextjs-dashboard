import { Table } from "antd";

function CustomTable({ data }) {
  const uniqueKeys = new Set();

  // Loop through the data items to find all unique keys
  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      uniqueKeys.add(key);
    });
  });

  // Convert the set of unique keys to an array and sort it
  const columns = Array.from(uniqueKeys)
    .sort()
    .map((key) => ({
      title: key,
      dataIndex: key,
      key,
    }));

  return <Table dataSource={data} columns={columns} />;
}
export default CustomTable;
