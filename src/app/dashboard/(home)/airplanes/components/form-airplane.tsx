"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { FC } from "react";

//interface Form-airplaneProps {}

const FormAirplane: FC = () => {
  return (
    <form className="w-[40%] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="code"></Label>
      </div>
      <Input placeholder="Kode Pesawat..." name="code" id="code" required />

      <div className="space-y-2">
        <Label htmlFor="name"></Label>
      </div>
      <Input placeholder="Nama Pesawat..." name="name" id="name" required />

      <div className="space-y-2">
        <Label htmlFor="image"></Label>
      </div>
      <Input
        type="file"
        placeholder="Upload Foto..."
        name="image"
        id="image"
        required
      />
      <Button className="w-full">Submit</Button>
    </form>
  );
};

export default FormAirplane;
