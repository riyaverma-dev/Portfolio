import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-white mb-2">Thank You!</h1>
      <p className="text-gray-300 max-w-md">
        Your message has been successfully sent. We'll get back to you shortly.
      </p>
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all duration-300"
      >
        Back to Home
      </a>
    </div>
  );
}
