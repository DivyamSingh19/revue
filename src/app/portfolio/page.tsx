import React from "react";
import { Button } from "@/components/ui/button";
import ThemePicker  from "@/components/portfolio/themepicker";
const Portfolio = () => {
  return (
    <div className="flex gap-5 flex-col min-h-screen justify-center items-center">
      <h3>image grid,ripple hover effect daalna hai</h3>
      <h3>yahi resume upload ka option + auto fill stuff</h3>
      <h3>download qr of portfolio ka button</h3>
      <div className="flex gap-5">
        <Button>Upload Resume</Button>
        <Button>Download Portfolio</Button>
      </div>
      <ThemePicker/>
    </div>
  );
};

export default Portfolio;
