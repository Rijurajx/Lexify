import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Testimonials = () => {
    const testimonials = [
        {
          quote:
            "Lexify has revolutionized the way we handle legal documents. The automated summaries save us countless hours and the accuracy is exceptional.",
          name: "Sarah Chen",
          designation: "Legal Advisor at LawFirmX",
          src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "The implementation of Lexify was seamless, and the platform's ability to highlight key sections of contracts is a game-changer for our team.",
          name: "Michael Rodriguez",
          designation: "Chief Counsel at InnovateSphere",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Lexify has dramatically improved our document review process. The AI-powered summaries are spot-on, saving our legal team hours of manual work.",
          name: "Emily Watson",
          designation: "Operations Director at CloudScale Legal",
          src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Outstanding support and robust features. Lexify simplifies contract analysis and helps us stay ahead of deadlines, ensuring compliance with ease.",
          name: "James Kim",
          designation: "Legal Operations Lead at DataPro Legal",
          src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "The document automation features in Lexify have been a game-changer for our legal team. It has significantly improved our productivity and efficiency.",
          name: "Lisa Thompson",
          designation: "VP of Legal Technology at FutureNet Legal",
          src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
      
  return <AnimatedTestimonials className="bg-[#020617]" testimonials={testimonials} />;
}


export default Testimonials