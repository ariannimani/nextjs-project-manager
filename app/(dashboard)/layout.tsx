import React from "react";
import GlassPane from "@/components/glass-pane/GlassPane";
import "@/styles/global.css";
import { Sidebar } from "@/components";

interface DashboardRootLayoutProps {
  children?: React.ReactNode;
}

const DashboardRootLayout: React.FC<DashboardRootLayoutProps> = ({
  children,
}) => {
  return (
    <GlassPane className="w-full h-full flex items-center">
      <Sidebar />
      {children}
    </GlassPane>
  );
};

export default DashboardRootLayout;
