export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[2000px] mx-auto px-6 py-8">{children}</div>
  );
}
