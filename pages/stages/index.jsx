import React from "react";
import UserLayout from "@/components/layout/UserLayout";

function Stages() {
  return <div>Stages</div>;
}

Stages.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Stages;
