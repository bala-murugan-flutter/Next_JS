import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Igristechnos ',
  description: 'Read about how Igristechnos  collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 px-4 flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/your-background.jpg)' }}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl w-full max-w-4xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-6 text-gray-200 text-sm sm:text-base">
          Welcome to Igristechnos . Your privacy is important to us. This Privacy Policy explains how we collect, use,
          and protect your personal information.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          We may collect personal details such as your name, email address, contact number, and any other information
          you provide through our forms or services.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">2. How We Use Information</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          Your data helps us improve our services, respond to inquiries, and provide a personalized experience.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">3. Data Security</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          We implement appropriate security measures to protect your data from unauthorized access or disclosure.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">4. Third-Party Services</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          We may use third-party tools such as Google Analytics which have their own privacy policies.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">5. Your Rights</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          You can contact us to access, update, or delete your personal data at any time.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">6. Changes to This Policy</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          We may update this Privacy Policy occasionally. Please review it regularly.
        </p>

        <p className="text-xs sm:text-sm text-gray-300 mt-10">Last updated: June 2, 2025</p>
      </div>
    </div>
  );
}
