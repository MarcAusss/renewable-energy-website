import Image from "next/image";
import Landing from "./components/Landing";
import About from "./components/About";
import Function from "./components/Function";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Landing/>
      <About/>
      <Function/>
      <Service/>
      <Testimonial/>
    </div>
  );
}
