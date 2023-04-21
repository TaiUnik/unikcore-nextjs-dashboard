import React from "react";
import UserLayout from "@/components/layout/UserLayout";

function Contacts() {
  return <div>Contacts</div>;
}

Contacts.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Contacts;
