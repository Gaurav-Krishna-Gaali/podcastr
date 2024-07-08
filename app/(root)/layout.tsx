import LeftSidebar from "@/components/ui/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />

        <section>
          <div className="">
            <div className="">
              <Image />
              MobileNav
            </div>
            <div className="">Toaster (notification pods)</div>
          </div>
        </section>
        {children}
        <p className="text-white-1">RIGHT</p>
      </main>
    </div>
  );
}
