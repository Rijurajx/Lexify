"use client";
import React, { useState } from "react";
import { FileUpload } from "../ui/file-upload";

export function FileUploadComponent() {
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };

  return (
    (<div
      className="w-full max-w-4xl mx-auto min-h-10 border border-dashed bg-transparent dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>)
  );
}
