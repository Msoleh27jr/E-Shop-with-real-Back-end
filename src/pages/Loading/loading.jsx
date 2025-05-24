import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div>
      <div className="md:max-w-[1700px] w-[90%] m-auto">
        <Skeleton className="h-[60px] w-[100%] rounded-xl my-7" />
        </div>
        <div className="md:max-w-[1700px] w-[90%] m-auto flex md:gap-0 gap-5 md:flex-row flex-col md:justify-between">
          <aside className="flex md:flex-col md:flex-nowrap flex-wrap gap-5">
            <Skeleton className="w-[100px] h-[30px] rounded-xl"/>
            <Skeleton className="w-[120px] h-[30px] rounded-xl"/>
            <Skeleton className="w-[160px] h-[30px] rounded-xl"/>
            <Skeleton className="w-[220px] h-[30px] rounded-xl"/>
            <Skeleton className="w-[120px] h-[30px] rounded-xl"/>
            <Skeleton className="w-[80px] h-[30px] rounded-xl"/>
            <Skeleton className="w-[110px] h-[30px] rounded-xl"/>
            <Skeleton className="w-[200px] h-[30px] rounded-xl"/>
            <Skeleton className="w-[200px] h-[30px] rounded-xl"/>
          </aside>
          <aside>
            <Skeleton className="w-[1400px] h-[450px] rounded-xl"/>
          </aside>
        </div>
        <div className="max-w-[1700px] m-auto mt-[100px]">
          <Skeleton className="w-[600px] h-[60px]"/>
        </div>
      </div>
  );
};

export default Loading;
