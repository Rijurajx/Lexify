"use client";
import React, { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs'; // Import Clerk's useAuth hook
import { useRouter } from 'next/navigation'; // Import Next.js Router
import LampBlock from './components/blocks/lampBlock';
import { FloatingDockDemo } from './components/blocks/floatingSidebar';
import Features from './components/blocks/features';
import Testimonials from './components/blocks/testimonials';
import PricingPage from './components/blocks/pricing';
import { CoverText } from './components/blocks/coverText';
import { FlipText } from './components/blocks/flip-text';
import Footer from './components/blocks/footer';
import { SignOutButton } from '@clerk/nextjs';

const Page = () => {
  const { isLoaded, user } = useAuth(); // Get authentication status from Clerk
  const router = useRouter(); // Next.js routing

  useEffect(() => {
    // Ensure we redirect only after the user is fully loaded
    if (isLoaded && user) {
      // Redirect user to the dashboard if authenticated
      router.push("/pages/dashboard");
    }
  }, [isLoaded, user, router]); // Depend on isLoaded, user, and router

  // This will return null until the user's auth status is determined
  if (!isLoaded) return null;

  return (
    <div className="bg-[#020617]">
      <LampBlock />
      <FloatingDockDemo className="z-40" />
      <CoverText />
      <Features />
      <FlipText />
      <PricingPage />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Page;
