import React from "react";
import UserLayout from "@/components/layout/UserLayout";

function Campaigns() {
  return <div>Campaigns</div>;
}

Campaigns.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Campaigns;
