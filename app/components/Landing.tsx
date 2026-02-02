export default function Landing() {
    return (
        <div
        className="h-screen bg-cover bg-center bg-no-repeat pt-10 relative"
        style={{ backgroundImage: "url('/images/mainBg.avif')" }}
        >
            <div className="pt-20 w-[27%] ml-20">
                <h1 className="text-white text-4xl">
                    Brighter Future Begins with Clean Power
                </h1>
                <p className="text-white mt-4">
                    Empower you home or business with reliable, renewable solar solution designed to cut costs.
                </p>
                <div className="mt-4 flex gap-5">
                    <button className="px-5 py-2 bg-[#D3F171] rounded-full cursor-pointer">Explore Programs</button>
                    <button className="px-5 py-2 bg-[#cccccc60] rounded-full text-white cursor-pointer">Book Session</button>
                </div>
            </div>
            <div className="">
                <h1 className="text-white text-[17rem] absolute leading-0 bottom-30 text-center w-full">
                    Greenova
                </h1>
            </div>
        </div>
    );
}