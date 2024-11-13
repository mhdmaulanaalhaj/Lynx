// pages/cart.tsx
import { useEffect, useState } from "react";
import Image from "next/image";

interface NFTItem {
  id: number;
  src: string;
  title: string;
  price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<NFTItem[]>([]);

  useEffect(() => {
    // Cek apakah ada data cart yang disimpan di localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Fungsi untuk menghapus item dari cart
  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Menghitung total harga
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4 border-b py-4">
              <Image
                src={`/${item.src}`}
                alt={item.title}
                width={100}
                height={100}
                className="mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.price} ETH</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-6">
            <span className="text-xl font-semibold">
              Total: {totalPrice} ETH
            </span>
            <button className="bg-[#ff5e5b] text-white py-2 px-4 rounded-full">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
