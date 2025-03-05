"use client";

import GetFilesFromDB, { FileRecord } from "@/actions/get-sample";
import React, { useEffect, useState } from "react";

function FilesTable() {
  const [files, setFiles] = useState<FileRecord[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFilesFromDB();
        setFiles(data);
      } catch (error) {
        setErr((error as Error).message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header className="text-center mt-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Uploaded CSV Files</h1>
        <p className="text-neutral-500">
          List of files that have been uploaded successfully.
        </p>
      </header>

      <div className="overflow-x-auto w-full max-w-3xl mx-auto">
        <table
          id="files-table"
          className="w-full border border-gray-300 rounded-lg shadow-md text-left"
        >
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="py-2 px-4 border-b">File Name</th>
              <th className="py-2 px-4 border-b">File Size (Bytes)</th>
            </tr>
          </thead>
          <tbody>
            {files.length > 0 ? (
              files.map((file, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{file.name}</td>
                  <td className="py-2 px-4">{file.size}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center py-4  text-red-400">
                  {err ? err : "No files found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FilesTable;
