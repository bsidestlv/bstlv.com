export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg mb-4">
            Want to support our event? We need Sponsors!
          </p>
          <p className="text-gray-300 mb-6">
            Our community powered, volunteer run event depends on the generous sponsors to make everything possible.
          </p>
          <a 
            href="mailto:sponsors@bsidestlv.com" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Sponsors Team
          </a>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-300">
              Thank you and stay safe, The BSidesTLV 2025 Team
            </p>
            <p className="text-gray-400 mt-2">
              We ❤️ TLV
            </p>
            <p className="text-gray-400 mt-2">
              BSidesTLV 2025 logo design by Vladislav Trigub @vldislovely
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}