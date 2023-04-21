import UserLayout from "@/components/layout/UserLayout";
import React from "react";

function CalendarPage() {
  return <div>CalendarPage</div>;
}

CalendarPage.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default CalendarPage;
