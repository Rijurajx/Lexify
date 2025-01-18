"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const PricingCard = ({ planName, price, features, link, className }) => {
  return (
    <Link
      href={link}
      className={cn(
        "relative group block p-4 h-full w-full transition-transform duration-300 hover:scale-105 ",
        className
      )}
    >
      <motion.div
        className="rounded-2xl h-full w-full p-6 overflow-hidden  border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 shadow-lg bg-[#020617]"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Plan Name */}
        <h4 className="text-2xl font-bold tracking-wide text-zinc-100 mb-2">
          {planName}
        </h4>

        {/* Price */}
        <p className="text-xl text-zinc-400 mb-4">
          <span className="font-semibold text-white">{price}</span> / month
        </p>

        {/* Features */}
        <ul className="text-sm text-zinc-400 space-y-2 leading-relaxed">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 mt-1"></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Call-to-action button */}
        <button className="mt-6 w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition">
          Choose Plan
        </button>
      </motion.div>
    </Link>
  );
};

export const PricingCardGrid = ({ plans }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 ">
      {plans.map((plan, idx) => (
        <PricingCard
          key={idx}
          planName={plan.planName}
          price={plan.price}
          features={plan.features}
              link={plan.link}
        
        />
      ))}
    </div>
  );
};
