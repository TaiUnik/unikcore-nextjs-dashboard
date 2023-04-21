import React from "react";
import UserLayout from "@/components/layout/UserLayout";

function Channels() {
  return <div>Channels</div>;
}

Channels.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Channels;
