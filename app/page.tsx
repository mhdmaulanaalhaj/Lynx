import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import "tailwindcss/tailwind.css";

export default function Home() {
  // Array objek untuk menyimpan nama file gambar dan informasi tambahan
  const nftData = [
    { id: 1, src: "nft1.jpg", title: "NFT Title 1", price: 1.2 },
    { id: 2, src: "nft2.jpeg", title: "NFT Title 2", price: 2.4 },
    { id: 3, src: "nft3.jpeg", title: "NFT Title 3", price: 3.6 },
    { id: 4, src: "nft4.jpeg", title: "NFT Title 4", price: 4.8 },
    { id: 5, src: "nft5.jpeg", title: "NFT Title 5", price: 6.0 },
    { id: 6, src: "nft6.png", title: "NFT Title 6", price: 7.2 },
    { id: 7, src: "nft7.jpg", title: "NFT Title 7", price: 8.4 },
    { id: 8, src: "nft8.png", title: "NFT Title 8", price: 9.6 },
    { id: 9, src: "nft9.jpg", title: "NFT Title 9", price: 10.8 },
  ];

  return (
    <div className="bg-gradient-to-r from-[#6A1B9A] via-[#8E24AA] to-[#9C27B0] text-white h-screen flex flex-col overflow-auto">
      {/* Navbar */}
      <nav className="w-full bg-[#8E24AA] shadow-lg fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-bold">Lynx NFT</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#home"
                className="text-white hover:text-[#ff5e5b] transition duration-300"
              >
                Home
              </a>
              <a
                href="#explore"
                className="text-white hover:text-[#ff5e5b] transition duration-300"
              >
                Explore
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#ff5e5b] transition duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#ff5e5b] transition duration-300"
              >
                Contact
              </a>
            </div>

            {/* Connect Button */}
            <div>
              <ConnectButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <header className="w-full max-w-6xl mx-auto p-8 text-center pt-20">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e5b] to-[#9c6dde]">
          Welcome to Lynx NFT Marketplace
        </h1>
      </header>

      <main className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {nftData.map((nft) => (
          <div
            key={nft.id}
            className="bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Image
              src={`/${nft.src}`}
              alt={`NFT ${nft.id}`}
              width={400}
              height={400}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {nft.title}
              </h3>
              <p className="text-gray-500 mt-2">
                {nft.id % 2 === 0
                  ? "This NFT showcases a perfect blend of technology and art."
                  : "An exquisite piece of digital artwork that stands out."}
              </p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-bold text-[#9c27b0]">
                  {nft.price} ETH
                </span>
                <button className="bg-[#ff5e5b] text-white py-2 px-4 rounded-full hover:bg-[#9c6dde] transition-colors duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="w-full text-center p-5 bg-[#8E24AA] mt-12 rounded-lg">
        <p className="text-white">
          © 2024 Lynx NFT Marketplace. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
