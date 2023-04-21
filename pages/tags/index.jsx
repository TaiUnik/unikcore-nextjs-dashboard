import React from "react";
import UserLayout from "@/components/layout/UserLayout";

function Tags() {
  return <div>Tags</div>;
}

Tags.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Tags;
