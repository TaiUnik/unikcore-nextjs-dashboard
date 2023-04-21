import React from "react";
import { useRouter } from "next/router";
import PreListingComponent from "@/components/shared/PreListingComponent";
import UserLayout from "@/components/layout/UserLayout";

function ActionCompany() {
  const router = useRouter();
  const { id } = router.query;
  const title = id ? "Edit Company Page" : "Create Company Page";

  const handleSave = () => {
    console.log(company);
    router.push("/company");
  };

  return (
    <div>
      <PreListingComponent title={title} isList={false} />
    </div>
  );
}

ActionCompany.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default ActionCompany;
