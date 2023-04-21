import React from "react";
import UserLayout from "@/components/layout/UserLayout";

function Segments() {
  return <div>Segments</div>;
}

Segments.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Segments;
