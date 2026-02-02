import Image from "next/image";


export default function About() {
  return (
    <div className="my-10 max-w-7xl mx-auto px-4">
      {/* Header */}
        <div className="flex justify-between items-baseline">
            <h1 className="px-5 py-2 text-sm rounded-full border w-fit border-gray-300">
            About us
            </h1>

            <div className="w-[45%]">
                <h1 className="text-3xl tracking-wide leading-snug">
                    From precision irrigation to remote crop health monitoring{" "}
                    <span className="text-gray-400">
                    to fulfilling the promise of tomorrow&apos;s technology
                    </span>
                </h1>
            </div>
        </div>

      {/* Grid Section */}
        <div className=" mt-10 grid grid-cols-[1.7fr_repeat(2,1fr)] grid-rows-[1.5fr_1fr] gap-2.5 w-full h-[60vh]">
            <div className=" row-start-1 row-end-3 col-start-1 col-end-2 bg-cover bg-center bg-no-repeat rounded-xl flex flex-col justify-end" style={{ backgroundImage: "url('/images/solarInstallation.webp')" }}>
                <div className="bg-linear-to-t from-black to-transparent p-5 pb-10 rounded-b-xl">
                    <div className="p-2 bg-[#cccccc8f] flex items-center justify-center w-fit rounded-xl">
                        <i className="text-xl fa-solid fa-star text-white"></i>
                    </div>
                    <h1 className="text-white mt-5 w-3/4">
                        Empower your home and business with reliable, renewable solar solution designed to cut costs.
                    </h1>
                </div>
            </div>

            <div className=" row-start-1 row-end-2 col-start-2 col-end-4 bg-cover bg-no-repeat rounded-xl flex items-center justify-center" style={{ backgroundImage: "url('/images/solarfarm.jpg')" }}>
                <div className="bg-[#00000046] p-5 pb-10 rounded-b-xl h-full w-full flex flex-col items-center justify-center">
                    <h1 className="text-white text-5xl">Green Energy</h1>
                    <p className="text-gray-200 mt-5 text-xl">Empower your home</p>
                </div>
            </div>

            <div className=" row-start-2 row-end-3 col-start-2 col-end-3 bg-cover bg-[#D3F171] rounded-xl flex items-center justify-center " >
               <div className="flex flex-col items-center justify-center">
                    <Image
                    alt=""
                    src="/icon/141508-200.png"
                    width={50}
                    height={50}
                    />
                    <h1 className="text-3xl">60%</h1>
                    <p className="text-gray-600">lower costs with smart AI optimization</p>
                </div> 
            </div>

            <div className=" row-start-2 row-end-3 col-start-3 col-end-4 bg-cover bg-center bg-no-repeat rounded-xl " style={{ backgroundImage: "url('/images/sustainable-energy-solar-and-wind-turbines-farm-sustainable-resources-solar-wind-power-renewable-energy-sustainable-developmentvoltaic-panel-green-energy-alternative-electricity-source-photo.jpg')", }} >
                <div className="bg-linear-to-t from-black/50 to-transparent p-5 rounded-b-xl h-full flex items-end">
                    <h1 className="text-2xl text-white">42.5% <span className="text-sm">by 2030</span></h1>
                </div>
            </div>
        </div>
    </div>
  );
}
