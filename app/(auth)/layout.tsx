import { FC, ReactNode } from "react";
import GlassPane from "@/components/glass-pane/GlassPane";
import "@/styles/global.css";

interface AuthRootLayoutProps {
  children?: ReactNode;
}

const AuthRootLayout: FC<AuthRootLayoutProps> = ({ children }) => {
  return (
    <GlassPane className="w-full h-full flex items-center justify-center">
      {children}
    </GlassPane>
  );
};

export default AuthRootLayout;
