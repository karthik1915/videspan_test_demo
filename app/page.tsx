import Link from "next/link";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

export default function Home() {
  return (
    <>
      <header className="text-center mt-8 mb-8">
        <h1 className=" text-3xl font-bold mb-2">Example Heading</h1>
        <p className="text-neutral-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic harum
          voluptatem excepturi?
        </p>
      </header>
      <main>
        <div className="">
          <h2 className="text-2xl text-center">List of Contents</h2>
          <div className="flex items-center justify-center my-6">
            <ul className="list-disc pl-6 space-y-4 w-32 self-center *:hover:underline">
              <li>
                <Link href="#section1">Section 1</Link>
              </li>
              <li>
                <Link href="#section2">Section 2</Link>
              </li>
              <li>
                <Link href="#section3">Section 3</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-7">
          <hr />
          <Section1 />
          <hr />
          <Section2 />
          <hr />
          <Section3 />
          <hr />
        </div>
        <summary className="my-9">
          <h2 className="text-2xl ">Summary</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iure
          id, quibusdam, voluptas incidunt cupiditate eveniet impedit eligendi
          nesciunt earum minus aspernatur excepturi exercitationem maxime
          recusandae repellat quas. Labore, impedit nesciunt repudiandae veniam
          assumenda vitae iusto velit, sit quae doloremque pariatur dolore vel,
          rerum placeat fuga? Amet perferendis id inventore exercitationem at!
          Ex impedit nostrum magnam rem maxime, itaque nobis!
        </summary>
      </main>
      <hr />
      <footer className="text-center mt-6 py-5">
        &copy; 2025 Example Company. All rights reserved.
      </footer>
    </>
  );
}
