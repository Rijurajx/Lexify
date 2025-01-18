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
            src="https://theblue.ai/wp-content/uploads/2023/06/text_conentSummarization_AI-thegem-blog-timeline-large.png"
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
            src="https://www.shutterstock.com/image-vector/man-confuse-decide-about-terms-600nw-1864038253.jpg"
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
            src="https://static.vecteezy.com/system/resources/previews/017/780/785/non_2x/risk-illustration-risk-document-with-hand-and-pen-business-background-vector.jpg"
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
            src="https://a.storyblok.com/f/99519/1100x619/88ffae4af1/real-time-collaboration-blog.png/m/2160x1216/filters:format(png)"
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
              src="https://png.pngtree.com/png-vector/20210713/ourlarge/pngtree-smart-contract-deals-business-png-image_3592690.jpg"
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