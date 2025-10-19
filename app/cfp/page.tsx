import Link from "next/link";
import CallToAction from "../components/CallToAction";
import DateCards from "../components/DateCards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

export default function CFPPage() {
  const cfpDates = [
    {
      title: "CFP Opens",
      date: "February 16th, 2025 at 10:00",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      title: "CFP Closes",
      date: "April 15th, 2025 at 23:59",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      title: "Notification",
      date: "May 5th, 2025 - Accepted talks notified",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "Agenda Announced",
      date: "May 20th, 2025 - Public agenda with final titles & abstracts",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <Hero
        title="BSidesTLV 2025 Call for Papers"
        subtitle="Comic Book Multiverse Edition - Everything is Possible"
      />

      <DateCards dates={cfpDates} />

      <CallToAction
        title="Ready to Share Your Knowledge?"
        description="Submit your talk proposal and join our amazing community of cybersecurity professionals!"
        buttonText="📝 Call for Speakers"
        buttonUrl="https://cfp.bsidestlv.com/"
        external={true}
        buttonStyle="bg-blue-600 text-white hover:bg-blue-700"
      />

      {/* Code of Conduct */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Our Code of Conduct
          </h2>
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
            <p className="mb-4 text-lg text-yellow-800">
              <strong>
                All attendees, speakers, sponsors and volunteers at our
                conference are required to agree with the following code of
                conduct.
              </strong>
            </p>
            <p className="mb-4 text-yellow-700">
              Our Code Of Conduct ensures a safe and inclusive environment for
              everyone.
            </p>
            <Link
              href="/code-of-conduct"
              className="inline-block rounded-lg bg-yellow-600 px-6 py-3 text-white transition-colors hover:bg-yellow-700"
            >
              Read Code of Conduct
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
