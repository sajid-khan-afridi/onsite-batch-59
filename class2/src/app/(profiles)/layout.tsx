import NestedNavbar from "@/components/NestedNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NestedNavbar />
      {children}
    </>
  );
}
