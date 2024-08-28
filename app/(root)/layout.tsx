import { Sidebar } from "lucide-react";

export default function Home({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          SIDEBAR
              {children}
      </main>
    );
  }
  