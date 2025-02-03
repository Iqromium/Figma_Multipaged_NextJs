import Image from "next/image"



function Movies() {
    return (
        <main>
            <div className="w-full h-[300px] flex justify-center items-center mt-10">
                <div className="w-[80%] h-full">

                    {/*top wali side*/}
                    <div>
                        <span className="border-l-8 border-red-500 text-black mb-5 font-bold">Movies To Make You</span>
                        <h2 className="text-red-600 font-bold mt-5">SCREAM at SCREEN</h2>
                    </div>
                    {/*movies to display set1*/}
                    {/*container boxes*/}
                    <div className="flex justify-between mt-7">
                        <div>
                            <div className="w-[139px] h-[170px] object-contain bg-red-600 flex justify-center items-center">
                                <Image src={"/images/useme/tcm.png"} width={115} height={130} alt="Texas Chainsaw Massacre" />
                            </div>
                            {/*title*/}
                            <div className="flex flex-col">
                                <span className="font-bold pt-3 text-left">Texas Chainsaw Massacre</span>
                                <span className="font-bold text-center">$19.5</span>
                            </div>
                        </div>

                        <div>
                            <div className="w-[140px] h-[170px] object-contain bg-red-600 flex justify-center items-center">
                                <Image src={"/images/useme/sm.png"} width={117} height={130} alt="Scream" />
                            </div>
                            {/*title*/}
                            <div className="flex flex-col">
                                <span className="font-bold pt-3 text-center">Scream</span>
                                <span className="font-bold text-center">$19.5</span>
                            </div>
                        </div>

                        <div>
                            <div className="w-[140px] h-[170px] object-contain bg-red-600 flex justify-center items-center">
                                <Image src={"/images/useme/kk.png"} width={117} height={130} alt="KingKong" />
                            </div>
                            {/*title*/}
                            <div className="flex flex-col">
                                <span className="font-bold pt-3 text-center">KingKong</span>
                                <span className="font-bold text-center">$19.5</span>
                            </div>
                        </div>
                        <div>
                            <div className="w-[140px] h-[170px] object-contain bg-red-600 flex justify-center items-center">
                                <Image src={"/images/useme/h3.png"} width={117} height={130} alt="House-3" />
                            </div>
                            {/*title*/}
                            <div className="flex flex-col">
                                <span className="font-bold pt-3 text-center">House-3</span>
                                <span className="font-bold text-center">$19.5</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="flex justify-center mt-10 ml-10 ">
    <button className="py-4 px-3 bg-red-600 text-white font-extrabold rounded-md">Explore More If You Dare...</button></div>
        </main>

    )
}
export default Movies;