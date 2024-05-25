"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1f1e0851-e485-45b2-a845-727c091b9b3c");
  }, []);

  return null;
};