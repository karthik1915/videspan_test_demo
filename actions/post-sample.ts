"use server";

// ✅ Accept a file name as an argument.
// ✅ Simulate an API delay of 500ms using setTimeout.
// ✅ Resolve with a success message.
// ✅ Reject with an error message randomly (30% chance).

export default async function PostSample(file: File): Promise<string> {
  const fileName = file.name;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 30% chance of failure
      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        reject(new Error(`Failed to upload ${fileName}. Please try again.`));
      } else {
        resolve(`${fileName} got successfully!`);
      }
    }, 500);
  });
}
