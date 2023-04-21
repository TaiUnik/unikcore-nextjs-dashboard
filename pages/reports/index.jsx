import React from "react";
import UserLayout from "@/components/layout/UserLayout";

function Reports() {
  return <div>Reports</div>;
}

Reports.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Reports;
