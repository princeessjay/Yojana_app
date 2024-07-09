import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-orange-200">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-row items-center mb-8 gap-40">
          <div className="w-auto h-auto rounded-full overflow-hidden mb-4">
            <Image src="/logo.jpg" alt="Virtual Assistant" width={300} height={300} />
          </div>
          <div className="flex flex-col space-y-4">
            <button className="bg-white text-black p-6 rounded shadow-md hover:bg-gray-200 transition duration-300">
              अपनी भाषा में योजना की जानकारी
            </button>
            <button className="bg-white text-black p-6 rounded shadow-md hover:bg-gray-200 transition duration-300">
              आवेदन करने की प्रक्रिया
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
