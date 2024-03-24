import type { Metadata } from "next";
import { AdminNav } from "@/components/admin/admin-nav/index";

export const metadata: Metadata = {
  title: "E-Admin",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  <>
    <AdminNav/>
    { children }
  </>
  );
}