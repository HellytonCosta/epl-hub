"use client";
import TopScorers from "@/components/standings/TopScorers";
import { Scorer, ScorerRequest } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  
  return (
    <section className="p-10">
      <TopScorers />
    </section>
  );
};

export default Page;
