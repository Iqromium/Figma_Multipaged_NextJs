import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Side: About Us Details */}
          <div className="md:w-1/2"> {/* Adjusted width for text column */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-gray-600 mb-4">
              Welcome to our company! We are dedicated to providing the best
              services and solutions to our clients. Our team is passionate about
              innovation and excellence.
            </p>
            <p className="text-gray-600 mb-4">
              With years of experience in the industry, we have built a reputation
              for delivering high-quality results. We believe in building strong
              relationships with our clients and helping them achieve their goals.
            </p>
            <p className="text-gray-600">
              Thank you for choosing us. We look forward to working with you!
            </p>
          </div>

          {/* Right Side: Images */}
          <div className="md:w-1/2 space-y-4"> {/* Adjusted width for image column */}
            <div className="relative aspect-square w-full max-w-[400px] mx-auto"> {/* Medium-sized square */}
              <Image
                src="/images/useme/iqra.jpg" // Replace with your image path
                alt="About Img 1"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative aspect-square w-full max-w-[300px] mx-auto"> {/* Medium-sized square */}
              <Image
                src="/images/useme/about.png" // Replace with your image path
                alt="About Us Image 2"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}