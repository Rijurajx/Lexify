"use client";
import OperationButton from "@/app/components/ui/operationButton";
import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import {
  ArchiveX,
  Command,
  File,
  Inbox,
  Send,
  Trash2,
  FileUp,
  ClipboardPlus,
} from "lucide-react";
import { NavUser } from "./nav-user";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";

// Sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Upload",
      url: "#",
      icon: FileUp,
      isActive: true,
      operations: [
        "Summarize Document",
        "Tag Clause",
        "Risk Assessment",
        "Perform Semantic Analysis",
      ],
    },
    {
      title: "Drafts",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Reports",
      url: "#",
      icon: ClipboardPlus,
      isActive: false,
    },
    {
      title: "Junk",
      url: "#",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  demoDrafts: [
    {
      id: 1,
      title: "Non-Disclosure Agreement",
      date: "2025-01-15",
      description:
        "This is a sample NDA document used to protect confidential information exchanged between parties during discussions about potential partnerships.",
    },
    {
      id: 2,
      title: "Employment Contract",
      date: "2025-01-12",
      description:
        "A legal document outlining terms and conditions of employment, including roles, responsibilities, and benefits provided by the employer.",
    },
    {
      id: 3,
      title: "Lease Agreement",
      date: "2025-01-10",
      description:
        "A lease agreement is a binding contract between a landlord and a tenant that outlines the terms of renting property, including rent amount, duration, and maintenance responsibilities.",
    },
  ],
  demoReports: [
    {
      id: 1,
      title: "Financial Overview Q1",
      date: "2025-01-10",
      description:
        "A comprehensive analysis of the financial performance of the company during the first quarter of the year.",
    },
    {
      id: 2,
      title: "Market Trends 2025",
      date: "2025-01-08",
      description:
        "A detailed report covering the latest market trends in the tech industry, with a focus on emerging technologies.",
    },
    {
      id: 3,
      title: "Employee Performance Review",
      date: "2025-01-05",
      description:
        "An in-depth review of employee performance, highlighting achievements and areas for improvement across departments.",
    },
  ],
  demoJunk: [
    {
      id: 1,
      title: "Old Version of NDA",
      date: "2024-12-30",
      description:
        "An outdated version of the NDA that is no longer in use due to changes in company policy.",
    },
    {
      id: 2,
      title: "Expired Lease Agreement",
      date: "2024-12-25",
      description:
        "A lease agreement that has expired and is no longer relevant to the current tenants.",
    },
    {
      id: 3,
      title: "Canceled Employment Contract",
      date: "2024-12-22",
      description:
        "An employment contract that was canceled before being finalized, and is now discarded.",
    },
  ],
};

export function AppSidebar(props) {
  const [activeItem, setActiveItem] = useState(data.navMain[0]);
  const [mails, setMails] = useState([]); // Initialize mails as an empty array
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedDoc, setSelectedDoc] = useState(null); // Selected document for deletion
  const { setOpen } = useSidebar();

  // Function to handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter drafts, reports, and junk based on search query
  const filteredDrafts = data.demoDrafts.filter((draft) =>
    draft.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredReports = data.demoReports.filter((report) =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredJunk = data.demoJunk.filter((junk) =>
    junk.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle delete confirmation
  const handleDelete = () => {
    if (selectedDoc) {
      if (selectedDoc.section !== "junk") {
        // Move document to junk if it's not already there
        data.demoJunk.push(selectedDoc);
      }
      // Remove the document from its original section
      const section = selectedDoc.section;
      const sectionData =
        data[`demo${section.charAt(0).toUpperCase() + section.slice(1)}`];
      const index = sectionData.findIndex((doc) => doc.id === selectedDoc.id);
      sectionData.splice(index, 1);
    }
    setShowModal(false);
    setSelectedDoc(null);
  };

  // Show the modal when clicking delete button
  const showDeleteModal = (doc, section) => {
    setSelectedDoc({ ...doc, section });
    setShowModal(true);
  };

  return (
    <>
      <Sidebar
        collapsible="icon"
        className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row bg-[#020617] text-gray-300"
        {...props}
      >
        {/* First Sidebar */}
        <Sidebar
          collapsible="none"
          className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r border-gray-700 bg-[#0f172a] text-gray-400"
        >
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                  <a href="#">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-gray-200">
                      <Command className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Lexify</span>
                      <span className="truncate text-xs">Clarity in Complexity</span>
                      
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent className="px-1.5 md:px-0">
                <SidebarMenu>
                  {data.navMain.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        tooltip={{
                          children: item.title,
                          hidden: false,
                        }}
                        onClick={() => {
                          setActiveItem(item);
                          if (item.operations) {
                            setMails([]); // Reset mails if operations are selected
                          } else {
                            // Initialize mails array safely
                            const mail = data.mails
                              ? data.mails.sort(() => Math.random() - 0.5)
                              : [];
                            setMails(
                              mail.slice(
                                0,
                                Math.max(5, Math.floor(Math.random() * 10) + 1)
                              )
                            );
                          }
                          setOpen(true);
                        }}
                        isActive={activeItem.title === item.title}
                        className="px-2.5 md:px-2 hover:bg-gray-700 hover:text-gray-100"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t border-gray-700 bg-[#0f172a] ">
          <UserButton/>
          </SidebarFooter>
          
        </Sidebar>
        {/* Second Sidebar */}
        <Sidebar
          collapsible="none"
          className="hidden flex-1 md:flex bg-[#0f172a] text-gray-400 overflow-hidden"
        >
          <SidebarHeader className="gap-3.5 border-b border-gray-700 p-4">
            <div className="flex w-full items-center justify-between">
              <div className="text-base font-medium text-gray-200">
                {activeItem.title}
              </div>
              <Label className="flex items-center gap-2 text-sm">
                <span>Mode</span>
                <Switch className="shadow-none" />
              </Label>
            </div>
            <SidebarInput
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange} // Handle search query change
              className="bg-[#1e293b] text-gray-300 border border-gray-600"
            />
          </SidebarHeader>
          <SidebarContent className="overflow-y-hidden">
            <SidebarGroup className="px-0">
              <SidebarGroupContent>
                {activeItem.title === "Upload" ? (
                  <div className="flex flex-col gap-4 p-4">
                  {data.navMain
                    .find((item) => item.title === "Upload")
                    .operations.map((operation, index) => (
                      <OperationButton
                        key={index}
                        onClick={() => alert(`${operation} clicked`)}
                      >
                        {operation} {/* Pass operation name here */}
                      </OperationButton>
                    ))}
                </div>
                
                ) : activeItem.title === "Drafts" ? (
                  <div className="flex flex-col gap-4 p-4">
                    {filteredDrafts.length > 0 ? (
                      filteredDrafts.map((draft) => (
                        <div
                          key={draft.id}
                          className="border border-gray-600 rounded-lg p-4 hover:bg-gray-700 relative"
                        >
                          <button
                            className="absolute top-2 right-2 text-white bg-red-600 px-2 rounded-lg hover:scale-110 duration-150"
                            onClick={() => showDeleteModal(draft, "drafts")}
                          >
                            Delete
                          </button>
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-200">
                              {draft.title}
                            </h3>
                            <span className="text-xs text-gray-400">
                              {draft.date}
                            </span>
                          </div>
                          <p className="line-clamp-2 text-sm text-gray-300 mt-2">
                            {draft.description}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">
                        No drafts match your search.
                      </p>
                    )}
                  </div>
                ) : activeItem.title === "Reports" ? (
                  <div className="flex flex-col gap-4 p-4">
                    {filteredReports.length > 0 ? (
                      filteredReports.map((report) => (
                        <div
                          key={report.id}
                          className="border border-gray-600 rounded-lg p-4 hover:bg-gray-700 relative"
                        >
                          <button
                            className="absolute top-2 right-2 text-white bg-red-600 px-2 rounded-lg hover:scale-110 duration-150"
                            onClick={() => showDeleteModal(report, "reports")}
                          >
                            Delete
                          </button>

                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-200">
                              {report.title}
                            </h3>
                            <span className="text-xs text-gray-400">
                              {report.date}
                            </span>
                          </div>
                          <p className="line-clamp-2 text-sm text-gray-300 mt-2">
                            {report.description}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">
                        No reports match your search.
                      </p>
                    )}
                  </div>
                ) : activeItem.title === "Junk" ? (
                  <div className="flex flex-col gap-4 p-4">
                    {filteredJunk.length > 0 ? (
                      filteredJunk.map((junk) => (
                        <div
                          key={junk.id}
                          className="border border-gray-600 rounded-lg p-4 hover:bg-gray-700 relative"
                        >
                          <button
                            className="absolute top-2 right-2 text-white bg-red-600 px-2 rounded-lg hover:scale-110 duration-150"
                            onClick={() => showDeleteModal(junk, "junk")}
                          >
                            Delete
                          </button>
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-200">
                              {junk.title}
                            </h3>
                            <span className="text-xs text-gray-400">
                              {junk.date}
                            </span>
                          </div>
                          <p className="line-clamp-2 text-sm text-gray-300 mt-2">
                            {junk.description}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">
                        No junk match your search.
                      </p>
                    )}
                  </div>
                ) : null}
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </Sidebar>

      {/* Confirmation Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-[#0f172a] p-6 rounded-lg max-w-sm w-full border border-gray-700">
      <h3 className="text-lg font-semibold text-gray-200">
        Are you sure you want to delete this document?
      </h3>
      <div className="flex justify-between gap-2 mt-4">
        <button
          className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 hover:text-white transition duration-150"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-150"
          onClick={handleDelete}
        >
          Yes, Delete
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}
