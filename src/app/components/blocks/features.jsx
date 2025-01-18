"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "AI-Powered Summarization",
      description:
        "Lexify analyzes lengthy legal documents and provides concise, accurate summaries. Save time by getting the key insights without reading through hundreds of pages.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
          <Image
            src="/ai-summarization-placeholder.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="AI Summarization Demo"
          />
        </div>
      ),
    },
    {
      title: "Clause Detection & Highlighting",
      description:
        "Automatically detect and highlight critical clauses, such as confidentiality, indemnity, or arbitration. Lexify ensures you don’t miss any important details.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]">
          <Image
            src="/clause-detection-placeholder.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Clause Detection Demo"
          />
        </div>
      ),
    },
    {
      title: "Risk Analysis & Insights",
      description:
        "Identify potential risks and liabilities in legal documents with ease. Lexify uses AI to highlight areas of concern and provides actionable recommendations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))]">
          <Image
            src="/risk-analysis-placeholder.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Risk Analysis Demo"
          />
        </div>
      ),
    },
    {
      title: "Real-Time Collaboration",
      description:
        "Collaborate with your team on legal documents seamlessly. Comment, edit, and review in real time to ensure everything is aligned before submission.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))]">
          <Image
            src="/real-time-collaboration-placeholder.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Real-Time Collaboration Demo"
          />
        </div>
      ),
    },
    {
        title: "Contract Comparison",
        description:
          "Easily compare different versions of contracts. Lexify highlights changes, additions, and deletions to help you quickly spot differences.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--gray-700),var(--black))]">
            <Image
              src="/contract-comparison-placeholder.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="Contract Comparison Demo"
            />
          </div>
        ),
      },
      
  ];
  

const Features = () => {
    return (
        (<div className="py-10 px-36 bg-[#020617]">
          <StickyScroll content={content} />
        </div>)
      );
  
}

export default Features