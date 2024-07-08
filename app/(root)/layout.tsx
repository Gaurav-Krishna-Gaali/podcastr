export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <p className="text-white-1">LEFT</p>
        {children}
        <p className="text-white-1">RIGHT</p>
      </main>
    </div>
  );
}
