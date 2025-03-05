import Link from "next/link";
import React from "react";

function Section3() {
  return (
    <section id="section-3" className="space-y-6">
      <h2 className="text-2xl">Section 3</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?
        Perspiciatis, accusamus dolorum! Rem deleniti voluptas, quos iste
        inventore at maiores minima, accusantium reiciendis incidunt facilis
        unde quo illum amet. Excepturi, asperiores animi. Ut odio magnam in
        sapiente sit et!
      </p>
      <p className="my-4 text-xl">
        👉 Upload Your csv and get started{" "}
        <Link
          className="underline underline-offset-4 decoration-blue-600"
          href="upload"
        >
          here
        </Link>
      </p>
    </section>
  );
}

export default Section3;
