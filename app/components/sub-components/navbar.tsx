import Link from "next/link";



export default function Navbar() {
    return (
        <div className="fixed top-0 w-full z-30">
            <div className="flex justify-between items-center px-10 my-5">
                <div className="w-[10%]">

                </div>
                <div className="flex gap-8 items-center text-white">
                    <Link href="" className="hover:bg-[#ffffff3a] px-5 py-1 transition-all rounded-full">Home</Link>
                    <Link href="" className="hover:bg-[#ffffff3a] px-5 py-1 transition-all rounded-full">About</Link>
                    <Link href="" className="hover:bg-[#ffffff3a] px-5 py-1 transition-all rounded-full">Services</Link>
                    <Link href="" className="hover:bg-[#ffffff3a] px-5 py-1 transition-all rounded-full">Blog</Link>
                </div>
                <button className="px-5 py-2 bg-white text-black rounded-full w-[10%]">
                    Contact
                </button>
            </div>
        </div>
    );
}