//components/AdminList.tsx

"use client";

import FormButton from "@/components/ui/FormButton";
import ConfirmAction from "@/components/ui/ConfirmAction";

interface AdminItem {
  id: number;
  name?: string;
  [key: string]: any;
}

interface AdminListProps {
  title: string;
  addHref: string;
  items: AdminItem[];
  onDelete: (id: number) => Promise<any>;
  editHrefPrefix: string;
  columns: { label: string; key: string }[];
}

export default function AdminList({
  title,
  addHref,
  items,
  onDelete,
  editHrefPrefix,
  columns,
}: AdminListProps) {
  return (
    <section className="w-full bg-white p-6 rounded-xl shadow-md border border-border">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <FormButton
          href={addHref}
          text={`+ Add ${title.slice(0, -1)}`}
          color="primary"
        />
      </div>

      {items.length === 0 ? (
        <p className="text-text-muted">No {title.toLowerCase()} found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-muted shadow-sm">
          <table className="w-full table-auto text-left">
            <thead className="bg-primary-dark text-white">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-3 text-sm font-semibold tracking-wider"
                  >
                    {col.label}
                  </th>
                ))}
                <th className="px-4 py-3 text-sm font-semibold tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted bg-white text-text-base">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-muted/50">
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3">
                      {item[col.key]}
                    </td>
                  ))}
                  <td className="px-4 py-3 flex gap-2 flex-wrap">
                    <FormButton
                      href={`${editHrefPrefix}/${item.id}`}
                      text="Edit"
                      color="accent"
                    />
                    <ConfirmAction
                      onConfirm={async () => {
                        await onDelete(item.id);
                        window.location.reload(); // or use router.refresh() if needed
                      }}
                      confirmMessage={`Delete this ${title.slice(0, -1)}?`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
