import React from "react";
import UserLayout from "@/components/layout/UserLayout";

function Components() {
  return <div>Components</div>;
}

Components.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Components;
