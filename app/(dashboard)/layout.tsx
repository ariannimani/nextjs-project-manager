import React from "react";
import GlassPane from "@/components/glass-pane/GlassPane";
import "@/styles/global.css";

interface DashboardRootLayoutProps {
  children?: React.ReactNode;
}

const DashboardRootLayout: React.FC<DashboardRootLayoutProps> = ({
  children,
}) => {
  return (
    <GlassPane className="w-full h-full flex items-center justify-center">
      {children}
    </GlassPane>
  );
};

export default DashboardRootLayout;
