import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                    {/* Left Side: About Us Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold text-red-500 mb-14 text-center">About: <br />SKULL, SCREAM & SCREEN</h1>
                        <p className="text-gray-800 mb-14 text-xl font-bold">
                        Hello! to all the Horror Movie Fans, I am Iqra Kalim the creator of this platform called "SKULL, SCREAM and SCREEN".
                        "SSS" promises to thrill you by providing all the classic Horror movies in high-quality, non-pirated and at affordable prices. 
                        Alongside this, we ensure to recommend you with monthly "Top-Rated" movie-picks that will scare you to the core while enticing you with Utmost Gore! 

                        </p>
                        <p className="text-gray-800 mb-14 text-xl font-bold">
                           With SKULL, SCREAM & SCREEN, its assured to be Halloween all 365 days. So do checkout and stay tuned to experience Skullful movies that dare to make you...
                        </p>
                        <p className="text-red-600 text-3xl font-bold text-center">
                            SCREAM!! on SCREEN....
                        </p>
                    </div>

                 
                    <div className="md:w-1/2 space-y-1"> 
                        <div className="relative aspect-square w-full max-w-[700px] mx-auto"> 
                            <Image
                                src="/images/useme/about.png" // Replace with your image path
                                alt="About Img 1"
                                fill
                                className="object-contain" 
                            />
                            </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
}