import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FileUploadComponent } from "@/app/components/blocks/fileUpload";

export default function Page() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "350px",
      }}
    >
      <AppSidebar />
      <SidebarInset>
        <header
          className="sticky top-0 flex shrink-0 items-center gap-2 border-b border-sidebar-accent text-sidebar-primary-foreground p-4 shadow-sm bg-[#0f172a]"
        >
          <SidebarTrigger className="text-sidebar-primary-foreground hover:text-sidebar-accent-foreground" />
          <Separator
            orientation="vertical"
            className="mr-2 h-4 bg-sidebar-accent"
          />
          <Breadcrumb>
            <BreadcrumbList className="text-sm">
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink
                  href="#"
                  className="text-sidebar-secondary-foreground hover:text-sidebar-accent-foreground"
                >
                  All Inboxes
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-sidebar-accent" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sidebar-primary-foreground">
                  Inbox
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 bg-[#0f1932] text-sidebar-secondary-foreground">
          {/* Add empty state message */}
          <FileUploadComponent/>
          {/* Add example placeholders or keep it empty */}
          {Array.from({ length: 0 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video h-12 w-full rounded-lg bg-sidebar-accent hover:bg-sidebar-accent-foreground"
            />
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
