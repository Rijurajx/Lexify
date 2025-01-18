"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  const { push } = useRouter(); // useRouter hook for navigation
  const { isLoaded, user } = useAuth(); // useAuth hook to access user and auth state

  useEffect(() => {
    // If the user is authenticated, redirect them to the dashboard
    if (isLoaded && user) {
      push("/pages/dashboard"); // Redirect to the dashboard page if user is authenticated
    }
  }, [isLoaded, user, push]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#020617]">
      <div className="max-w-md w-full shadow-lg rounded-lg p-8">
        <SignIn
          path="/pages/sign-in"
          routing="path"
          signUpUrl="/pages/sign-up"
          appearance={{
            elements: {
              card: "bg-[#0f172a] shadow-lg rounded-lg p-6",
              headerTitle: "text-2xl font-bold text-white mb-2",
              headerSubtitle: "text-gray-400 mb-6",
              formFieldInput: "bg-[#1e293b] border border-gray-600 rounded-md p-2 w-full text-gray-200",
              formFieldLabel: "text-gray-400 mb-1",
              formButtonPrimary: "bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600",
              socialButtonsIconButton: "bg-[#1e293b] border border-gray-600 rounded-md text-white hover:bg-[#334155]",
              socialButtonsBlockButton: "bg-[#1e293b] border border-gray-600 rounded-md text-white hover:bg-[#334155]",
              footer: "bg-[#0f172a] text-gray-400 mt-6 pt-4 border-t border-gray-600 rounded-b-lg",
              footerActionLink: "text-cyan-500 hover:underline",
            },
            layout: {
              socialButtonsPlacement: "bottom",
            },
          }}
        />
      </div>
    </div>
  );
}
