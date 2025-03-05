"use server";

// ✅ Simulates an API delay of 500ms using setTimeout.
// ✅ Resolves with an array of file records.
// ✅ Rejects with an error message randomly (30% chance).

export type FileRecord = {
  name: string;
  size: number; // in bytes
};

export default async function GetFilesFromDB(): Promise<FileRecord[]> {
  const sampleFilesRecords: FileRecord[] = [
    { name: "file1.csv", size: 1024 },
    { name: "testdata1.csv", size: 2048 },
    { name: "info.csv", size: 512 },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 30% chance of failure
      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        reject(new Error("Failed to fetch file records. Please try again."));
      } else {
        resolve(sampleFilesRecords);
      }
    }, 500);
  });
}
