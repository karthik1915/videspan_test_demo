"use client";

import PostSample from "@/actions/post-sample";
import React, { useState } from "react";
import FilesTable from "./filesTable";

function UploadPage() {
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showUpload, setShowUpload] = useState<boolean>(true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== "text/csv") {
        setError("Only CSV files are allowed.");
        setFile(null);
        event.target.value = "";
      } else {
        setError(null);
        setFile(selectedFile);
      }
      return;
    }
    setError("File not found");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setError("Please upload a CSV file before submitting.");
      return;
    }
    try {
      const response = await PostSample(file);
      setMessage(response);
      setError(null);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const toggleTab = () => {
    setShowUpload((prev) => !prev);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center my-10">
        <button
          id="button-toggle-tabs"
          onClick={toggleTab}
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {showUpload ? "Hide Files" : "Show Files"}
        </button>
      </div>

      {showUpload ? (
        <>
          <header className="text-center mt-8 mb-8">
            <h1 className="text-3xl font-bold mb-2">Upload Your CSV here</h1>
            <p className="text-neutral-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              harum laborum esse?
            </p>
          </header>

          <main>
            <form onSubmit={handleSubmit} id="form-upload">
              <label
                htmlFor="csv-file"
                className="block text-gray-700 text-sm uppercase font-bold cursor-pointer mb-3"
              >
                Upload your CSV file
              </label>
              <input
                type="file"
                className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                id="csv-file"
                accept=".csv"
                onChange={handleFileChange}
              />
              {error && (
                <p id="errorMsg" className="text-red-500 text-lg mt-2">
                  {error}
                </p>
              )}
              {message && (
                <p id="successMsg" className="text-emerald-500 text-lg mt-2">
                  {message}
                </p>
              )}
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md disabled:opacity-50"
              >
                Submit
              </button>
            </form>
          </main>
        </>
      ) : (
        <FilesTable />
      )}
    </>
  );
}

export default UploadPage;
