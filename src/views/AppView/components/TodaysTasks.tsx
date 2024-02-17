import CheckBox from "@/components/CheckBox";
import React, { useState } from "react";

type Props = {};
const TASKS = [
  { task: "Frontend", isCompleted: false },
  { task: "Backend", isCompleted: false },
];
function TodaysTasks({}: Props) {
  //   const [checkList, setcheckList] = useState(TASKS);

  return (
    <div className="bg-base-300 p-[32px] rounded-xl space-y-[24px]">
      <h2 className="text-[24px]">Today{"'"}s Tasks</h2>
      <div className="flex flex-col  mb-4 gap-[24px]">
        {TASKS?.map((item) => {
          return (
            <CheckBox
              key={item?.task}
              onStatusChange={() => null}
              checkStatus={item?.isCompleted}
              task={item?.task}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodaysTasks;
