import React from "react";
import UserLayout from "@/components/layout/UserLayout";
import PreListingComponent from "@/components/shared/PreListingComponent";
import ListingBodyComponent from "@/components/shared/ListingBodyComponent";

function Points() {
  return (
    <div>
      <PreListingComponent title="Points Page" />
      <ListingBodyComponent />
    </div>
  );
}

Points.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Points;
