import type { Metadata } from "next";
import { AdminNav } from "@/components/admin/admin-nav/index";
import { Flex } from "antd";

export const metadata: Metadata = {
  title: "Electronix-Admin",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="container">
      <h2 className="section__title"
        style={ { marginBottom: 45 } }
      >
        Панель администратора
      </h2>
      <Flex
        justify="flex-start"
        align="flex-start"
      >
        <AdminNav/>
        { children }
      </Flex>
    </main>
  );
}