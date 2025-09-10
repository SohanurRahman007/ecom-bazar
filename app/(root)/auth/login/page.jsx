"use-client";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import logo from "@/public/assets/images/logo-black.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <Card className="w-[450px]">
      <CardContent>
        <div>
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt="logo"
            className="max-w-[150px]"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
