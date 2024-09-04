"use client";
import React from "react";

import * as C from "./styles";
import FormInput from "@/components/FormInput/FormInput";
import CoreContent from "@/components/CoreContent/CoreContent";

function HomePage() {
  return (
    <C.Container>
      <CoreContent />
      <FormInput />
    </C.Container>
  );
}

export default HomePage;
