import React from 'react';

export const metadata = {
  title: 'GST Details - Igristechnos ',
  description: 'GST Registration Information for Igristechnos .',
};

export default function GSTPage() {
  return (
    <div className="min-h-screen pt-20 px-4 flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/your-background.jpg)' }}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl w-full max-w-2xl p-6 sm:p-8 md:p-10 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">GST Information</h1>

        <p className="text-gray-200 text-sm sm:text-base mb-4 text-center">
          Below is the Goods and Services Tax (GST) registration information for Igristechnos .
        </p>

        <div className="mt-6 p-4 sm:p-6 bg-white/10 border border-white/20 rounded-xl text-center">
          <p className="text-lg sm:text-xl font-semibold text-gray-100">Company Name:</p>
          <p className="text-xl sm:text-2xl font-bold text-white mb-4">Igristechnos </p>

          <p className="text-lg sm:text-xl font-semibold text-gray-100">GST Number:</p>
          <p className="text-xl sm:text-2xl font-mono text-green-300">bt328y49234bala</p>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 mt-10 text-center">Last updated: June 2, 2025</p>
      </div>
    </div>
  );
}
