import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "editorsdojo | Premium Short-Form Video Editing",
    template: "%s | editorsdojo",
  },
  description: "Discipline. Precision. Craftsmanship. The world's most refined short-form video editing portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}