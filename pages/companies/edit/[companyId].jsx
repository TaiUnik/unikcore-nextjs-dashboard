import React from "react";
import { useRouter } from "next/router";
import PreListingComponent from "@/components/shared/PreListingComponent";
import UserLayout from "@/components/layout/UserLayout";
import CustomForm from "@/components/shared/CustomForm";

function ActionCompany() {
  const router = useRouter();
  const { companyId } = router.query;
  console.log(router.query);
  return (
    <div>
      <PreListingComponent title="Edit Company" isList={false} />
      <div class="flex h-100">
        <div class="basis-1/3 bg-white border border-r-zinc-200 px-6 py-4">
          UnikCore
        </div>
        <div class="basis-2/3 bg-[#f5f5f5]">
          <div className="border border-b-zinc-200  px-6 py-4">
            <h1 className="text-2xl">Editing Company - {companyId}</h1>
          </div>
          <div className=" px-6 py-4">
            <CustomForm />
          </div>
        </div>
      </div>
    </div>
  );
}

ActionCompany.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default ActionCompany;
