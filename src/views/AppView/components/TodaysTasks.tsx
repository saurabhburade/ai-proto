import CheckBox from "@/components/CheckBox";
import React, { useState } from "react";
import {
  motion,
  HTMLMotionProps,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { DEFAULT_TASKS } from "@/configs/constants";
type Props = {};

function TodaysTasks({}: Props) {
  //   const [checkList, setcheckList] = useState(TASKS);

  return (
    <div className="bg-base-300 p-[32px] rounded-xl space-y-[24px]  h-full  max-w-[400px] min-w-fit">
      <h2 className="text-[24px] font-[600]">Today{"'"}s Tasks</h2>
      <div className="flex flex-col  mb-4 gap-[24px]">
        {DEFAULT_TASKS?.map((item) => {
          return (
            <CheckBox
              key={item?.title}
              onStatusChange={() => null}
              checkStatus={item?.isChecked}
              task={item?.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodaysTasks;
