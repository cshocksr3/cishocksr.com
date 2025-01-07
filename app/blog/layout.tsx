// import { BlogSidebar } from "@/components/blog-sidebar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <BlogSidebar /> */}

      {/* Main Content */}
      <div className="flex-1 px-4">{children}</div>
    </div>
  );
}
