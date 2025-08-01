"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleLayout = () => {
    router.push('/select-layout')
  };

  const handleTheme = () => {
    router.push('/select-theme')
  };
  return (
    <div className="flex gap-5 flex-col min-h-screen justify-center items-center">
      <h3>yaha page transistion aur loader effect daalenge</h3>
      <p>yaha build portfolio ka button dikha dete hai n dialog box dikke which consists of these two buttons</p>
      <div className="flex gap-5">
        <Button onClick={handleLayout} className="cursor-pointer">
          Select Layout
        </Button>
        <Button onClick={handleTheme} className="cursor-pointer">
          Select Theme
        </Button>
      </div>
    </div>
  );
};

export default page;
