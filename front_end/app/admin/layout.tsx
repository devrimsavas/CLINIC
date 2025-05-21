// app/admin/layout.tsx

import AdminNav from "@/components/AdminNavBar";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col p-6">
      <h1 className="text-3xl text-primary font-bold mb-4">Admin Panel</h1>
      <AdminNav />
      <div className="mt-6">{children}</div>
    </div>
  );
}
