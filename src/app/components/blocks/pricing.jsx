import { PricingCardGrid } from "../ui/card-hover-effect";

const plans = [
    {
      planName: "Standard",
      price: "₹500",
      features: [
        "5 GB Document Storage",
        "Basic Legal Support",
        "Free Document Updates",
        "Custom Dashboard",
      ],
      link: "/pricing/standard",
    },
    {
      planName: "Value",
      price: "₹800",
      features: [
        "20 GB Document Storage",
        "24/7 Legal Support",
        "Advanced Document Analytics",
        "Team Collaboration",
      ],
      link: "/pricing/value",
    },
    {
      planName: "Max",
      price: "₹1000",
      features: [
        "Unlimited Document Storage",
        "Dedicated Legal Support",
        "Advanced Integrations",
        "Premium Legal Tools",
      ],
      link: "/pricing/max",
    },
  ];
  
  
  export default function PricingPage() {
    return (
      <div className="px-32">
        <PricingCardGrid plans={plans} />
      </div>
    );
  }
  