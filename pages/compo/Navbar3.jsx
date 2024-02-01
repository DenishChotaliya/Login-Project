import Link from "next/link";
export default function Navbar3() {
  return (
    <>
      <nav className="flex justify-center bg-blue-gray-200 items-center px-8 py-3">
        <div>
          <Link href={""} className="text-black font-bold">
            Apple Wood
          </Link>
        </div>
      </nav>
    </>
  );
}
