"use client";

import { AnimatedCard, AnimatedContainer } from "@/components/animated-card";
import { Integration1, Integration2, Integration3, Integration4, Integration5 } from "./integration-cards";

export default function IntegrationBento() {
  return (
    <AnimatedContainer className="min-h-screen w-full max-w-7xl mx-auto my-6 md:mt-24 lg:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-y-5 gap-x-0 md:gap-x-5 px-2">
      <AnimatedCard className="col-span-2 md:col-span-1 lg:col-span-2 border w-full rounded-2xl p-0 flex flex-col min-h-[20rem] max-h-[27rem]">
        <Integration1 />
      </AnimatedCard>
      <AnimatedCard className="col-span-2 md:col-span-1 lg:col-span-2 border w-full rounded-2xl bg-secondary/40 p-px overflow-hidden min-h-[20rem] max-h-[27rem]">
        <Integration2 />
      </AnimatedCard>
      <AnimatedCard className="col-span-2 lg:col-span-3 border w-full rounded-2xl bg-secondary/40 p-px overflow-hidden min-h-[20rem] max-h-[27rem]">
        <Integration3 />
      </AnimatedCard>
      <AnimatedCard className="col-span-2 lg:col-span-4 border w-full rounded-2xl bg-secondary/40 p-0 flex flex-col justify-between overflow-hidden min-h-[20rem] max-h-[27rem]">
        <Integration4 />
      </AnimatedCard>
      <AnimatedCard className="col-span-2 lg:col-span-3 border w-full rounded-2xl bg-secondary/40 p-2 md:p-5 flex flex-col min-h-[20rem] max-h-[27rem]">
        <Integration5 />
      </AnimatedCard>
    </AnimatedContainer>
  );
}
