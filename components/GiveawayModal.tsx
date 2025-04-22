// components/GiveawayModal.jsx
import { useEffect, useState } from "react";
import Link from "next/link";

export default function GiveawayModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 1000); // Show modal after 1 second

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative text-center">
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-600 text-xl hover:text-red-500"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#2D4FD0] mb-3">🎉 Giveaway Time!</h2>
        <p className="text-gray-700 mb-5">
          We're giving away free professional websites. Don't miss out!
        </p>
        <Link href="/give-away-form">
          <p className="inline-block bg-[#2D4FD0] text-white px-6 py-2 rounded-full font-medium hover:bg-black transition-all">
            Join Now
          </p>
        </Link>
      </div>
    </div>
  );
}
