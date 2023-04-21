import React from "react";
import UserLayout from "@/components/layout/UserLayout";
import PreListingComponent from "@/components/shared/PreListingComponent";
import ListingBodyComponent from "@/components/shared/ListingBodyComponent";
import companies from "@/data/company";
import CustomTable from "@/components/shared/CustomTable";

function CompanyPage() {
  return (
    <div>
      <PreListingComponent
        title="Company Page"
        isList={true}
        href="/companies/create"
      />
      <CustomTable data={companies} />
    </div>
  );
}

CompanyPage.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default CompanyPage;
