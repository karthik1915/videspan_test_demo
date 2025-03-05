"use client";

import React from "react";

function FilesTab({
  show,
  toggleShow,
}: {
  show: boolean;
  toggleShow: () => void;
}) {
  return (
    <button
      onClick={toggleShow}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      {show ? "Hide Files" : "Show Files"}
    </button>
  );
}

export default FilesTab;
