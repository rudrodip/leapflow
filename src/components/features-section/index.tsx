"use client";

import { Feature1, Feature2, Feature3, Feature4, Feature5 } from "./features";
import { AnimatedCard, AnimatedContainer } from "@/components/animated-card";

export default function FeaturesSection() {
  return (
    <AnimatedContainer className="min-h-screen w-full max-w-7xl mx-auto my-12 md:mt-24 lg:mt-28 grid grid-cols-1 md:grid-cols-4 gap-y-5 gap-x-0 md:gap-x-5 px-2">
      <AnimatedCard className="border w-full rounded-2xl text-center bg-secondary/40 p-2 md:p-5 flex flex-col justify-between items-center h-auto max-h-[27rem]">
        <Feature1 />
      </AnimatedCard>
      <AnimatedCard className="col-span-2 border w-full rounded-2xl text-center bg-secondary/40 p-2 md:p-5 flex flex-col justify-between items-center group/grid2 h-auto max-h-[27rem]">
        <Feature2 />
      </AnimatedCard>
      <AnimatedCard className="border w-full rounded-2xl text-center bg-secondary/40 p-2 md:p-5 flex flex-col justify-between items-center overflow-hidden min-h-[20rem] max-h-[27rem]">
        <Feature3 />
      </AnimatedCard>
      <AnimatedCard className="col-span-2 border w-full rounded-2xl bg-secondary/40 p-2 md:p-5 flex flex-col justify-between overflow-hidden min-h-[25rem] max-h-[27rem]">
        <Feature4 />
      </AnimatedCard>
      <AnimatedCard className="col-span-2 border w-full rounded-2xl bg-secondary/40 p-2 md:p-5 flex flex-col group/grid5 min-h-[25rem] max-h-[35rem]">
        <Feature5 />
      </AnimatedCard>
    </AnimatedContainer>
  );
}
