import React from 'react';

export const metadata = {
  title: 'Terms and Conditions - Igristechnos ',
  description: 'Review the terms and conditions for using Igristechnos  services and platforms.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/your-background.jpg)' }}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl w-full max-w-4xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-6 text-gray-200 text-sm sm:text-base">
          These Terms and Conditions ("Terms") govern your access to and use of the services, platforms, and websites
          operated by Igristechnos . By accessing or using our services, you agree to comply with and be bound by these Terms.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          By using Igristechnos  platforms, you confirm that you are legally capable of entering into a binding agreement.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">2. Services Provided</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          Igristechnos  offers software development, consulting, cloud solutions, and related IT services. Service details
          may vary and are governed by separate agreements.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">3. User Responsibilities</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          You agree not to misuse our services, upload harmful content, or engage in unauthorized activities on our platforms.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">4. Intellectual Property</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          All content, software, logos, and intellectual property are owned by Igristechnos  unless otherwise stated.
          Reproduction or redistribution is prohibited without written permission.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">5. Termination</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          We reserve the right to suspend or terminate access to our services at our sole discretion, with or without notice.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">6. Limitation of Liability</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          Igristechnos  is not liable for any indirect, incidental, or consequential damages resulting from your use of our services.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">7. Governing Law</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3">8. Changes to Terms</h2>
        <p className="mb-4 text-gray-200 text-sm sm:text-base">
          Igristechnos  may update these Terms at any time. Continued use of our services implies acceptance of the revised Terms.
        </p>

        <p className="text-xs sm:text-sm text-gray-300 mt-10">Last updated: June 2, 2025</p>
      </div>
    </div>
  );
}
