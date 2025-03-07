"use server";

// ✅ Simulates an API delay of 500ms using setTimeout.
// ✅ Resolves with an array of file records.
// ✅ Rejects with an error message randomly (30% chance).

export type FileRecord = {
  name: string;
  size: number; // in bytes
};

const sampleFilesRecords: FileRecord[] = [
  { name: "file1.csv", size: 1024 },
  { name: "testdata1.csv", size: 2048 },
  { name: "info.csv", size: 512 },
];

export default async function GetFilesFromDB(
  shouldFail: boolean = false
): Promise<FileRecord[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject();
      } else {
        resolve(sampleFilesRecords);
      }
    }, 500);
  });
}
