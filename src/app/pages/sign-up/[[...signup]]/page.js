"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#020617]">
      <div className="max-w-md w-full shadow-lg rounded-lg p-8">
        <SignUp
          path="/pages/sign-up"
          routing="path"
          signInUrl="/pages/sign-in"
          appearance={{
            elements: {
              // Card container
              card: "bg-[#0f172a] shadow-lg rounded-lg p-6",
              // Header title and subtitle
              headerTitle: "text-2xl font-bold text-white mb-2",
              headerSubtitle: "text-gray-400 mb-6",
              // Form fields
              formFieldInput: "bg-[#1e293b] border border-gray-600 rounded-md p-2 w-full text-gray-200",
              formFieldLabel: "text-gray-400 mb-1",
              // Buttons
              formButtonPrimary: "bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600",
              // Social buttons
              socialButtonsIconButton: "bg-[#1e293b] border border-gray-600 rounded-md text-white hover:bg-[#334155]",
              socialButtonsBlockButton: "bg-[#1e293b] border border-gray-600 rounded-md text-white hover:bg-[#334155]",
              // Footer section (including the bottom part)
              footer: "bg-[#0f172a] text-gray-400 mt-6 pt-4 border-t border-gray-600 rounded-b-lg",
              // Footer action links (like "Sign in" link)
              footerActionLink: "text-cyan-500 hover:underline",
              // Phone number input
              phoneNumberInput: "text-white",
              // Country selector
              phoneNumberCountrySelect: "text-white", // Custom style for country selector
            },
            layout: {
              socialButtonsPlacement: "bottom", // Position social buttons below the form fields
            },
          }}
        />
      </div>
    </div>
  );
}
