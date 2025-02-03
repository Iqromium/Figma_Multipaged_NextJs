import Image from "next/image"

function TopRated() {
    return (
        <div className="w-full h-[300px] flex justify-center items-center mt-10 mb-20">
            <div className="w-[80%] h-full">

                {/*top wali side*/}
                <div>
                    <span className="border-l-8 border-red-500 text-black mb-5 font-bold">This Month's</span>
                    <div className="flex justify-between">
                        <h2 className="text-red-600 font-bold mt-5">UNFORGETTABLE HORROR FLICKS</h2>
                        <button className="py-3 px-3 bg-red-600 font-extrabold text-white rounded-md">Curious? Give It a "Click".</button>
                    </div>
                </div>
                {/*top-rated this month set2*/}
                {/*container boxes*/}
                <div className="flex justify-between mt-7">
                    <div>
                        <div className="w-[143px] h-[170px] object-contain bg-red-600 flex justify-center items-center">
                            <Image src={"/images/top/tr1.png"} width={115} height={135} alt="The Walking Dead" />
                        </div>
                        {/*title*/}
                        <div className="flex flex-col">
                            <span className="font-bold pt-3 text-left">The Walking Dead</span>
                            <span className="font-bold text-center">$19.5</span>
                        </div>
                    </div>

                    <div>
                        <div className="w-[140px] h-[170px] object-contain bg-red-600 flex justify-center items-center">
                            <Image src={"/images/top/tr2.png"} width={117} height={100} alt="Friday The 13TH" />
                        </div>
                        {/*title*/}
                        <div className="flex flex-col">
                            <span className="font-bold pt-3 text-center">Friday The 13TH</span>
                            <span className="font-bold text-center">$19.5</span>
                        </div>
                    </div>

                    <div>
                        <div className="w-[138px] h-[170px] object-contain bg-red-600 flex justify-center items-center">
                            <Image src={"/images/top/tr3.png"} width={115} height={130} alt="The Shining" />
                        </div>
                        {/*title*/}
                        <div className="flex flex-col">
                            <span className="font-bold pt-3 text-center">The Shining</span>
                            <span className="font-bold text-center">$19.5</span>
                        </div>
                    </div>
                    <div>
                        <div className="w-[138px] h-[170px] object-contain bg-red-600 flex justify-center items-center">
                            <Image src={"/images/top/tr4.png"} width={114} height={130} alt="The Final Destination" />
                        </div>
                        {/*title*/}
                        <div className="flex flex-col">
                            <span className="font-bold pt-3 text-center">The Final Destination</span>
                            <span className="font-bold text-center">$19.5</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>



    )
}
export default TopRated