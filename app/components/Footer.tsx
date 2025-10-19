export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4 text-lg">
            Want to support our event? We need Sponsors!
          </p>
          <p className="mb-6 text-gray-300">
            Our community powered, volunteer run event depends on the generous
            sponsors to make everything possible.
          </p>
          <a
            href="mailto:sponsors@bsidestlv.com"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Contact Sponsors Team
          </a>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-gray-300">
              Thank you and stay safe, The BSidesTLV 2025 Team
            </p>
            <p className="mt-2 text-gray-400">We ❤️ TLV</p>
            <p className="mt-2 text-gray-400">
              BSidesTLV 2025 logo design by Vladislav Trigub @vldislovely
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
