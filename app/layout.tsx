import { FC } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="h-screen w-screen rainbow-mesh p-6">{children}</body>
    </html>
  );
};

export default RootLayout;
