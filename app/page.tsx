import CommunityLinks from "./components/CommunityLinks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Stats from "./components/Stats";

export default function Home() {
  // Stats data
  const stats = [
    { value: "1700+", label: "Participants" },
    { value: "10", label: "Years" },
    { value: "30+", label: "Sessions" },
    { value: "20+", label: "CTF Challenges" },
  ];

  // Community links data
  const communityLinks = [
    {
      title: "Join Slack",
      description: "Watching the event virtually? Join our Slack!",
      buttonText: "Join Slack",
      buttonUrl: "https://slack.bsidestlv.com",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      external: true,
    },
    {
      title: "Newsletter",
      description:
        "Sign up to our newsletter to receive updates throughout the year",
      buttonText: "Subscribe to Newsletter",
      buttonUrl: "https://e.bsidestlv.com/subscription/lGCnPUft?locale=en-US",
      buttonStyle: "bg-purple-600 text-white hover:bg-purple-700",
      external: true,
    },
    {
      title: "Volunteers",
      description: "",
      buttonText: "Call for Volunteers",
      buttonUrl: "/volunteers",
      buttonStyle: "bg-green-600 text-white hover:bg-green-700",
      external: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <Hero
        title="BSidesTLV 2025"
        subtitle="Comic Book Multiverse Edition - Everything is Possible"
      >
        {/* Event Announcement */}
        <div className="mx-auto mb-8 max-w-4xl rounded-lg border border-green-400 bg-green-100 px-4 py-3 text-green-700">
          <h2 className="mb-4 text-2xl font-bold">
            📢 BSidesTLV 2025 - new date announcement, 11.12.2025
          </h2>
          <h3 className="mb-3 text-lg font-semibold">
            📢 Greetings Hackers & earthlings!
          </h3>
          <p className="mb-4">
            Following the June 2025 postponement, we have an update about our
            new expected date: Tel Aviv University Cyber Week 2025 Will Take
            Place December 8-11. This means that our BSidesTLV2025 event is
            scheduled for December 11, Thursday!
          </p>
          <p className="mb-4">
            Most of our planned agenda and village content remain the same, and
            any current tickets will be valid for the new date.
          </p>
          <p className="mb-4">
            We will be in touch in September with event updates, info about
            electronic badges and more surprises.
          </p>
          <p className="mb-4">
            We hope to see everyone there, and we thank you for your continued
            support! The BSidesTLV 2025 team
          </p>
          <p className="mb-4">
            The theme for our 10th security research community conference will
            focus on alternate realities and multiple possibilities, imagining a
            better future while living in a chaotic present! In the age of
            disinformation, GenAI and Quantum Computers - we believe everything
            is possible (at least in the realm of security research🤓).
          </p>
          <p className="mb-4">
            Have an idea to share on our main stage? Join our local celebration
            of security research, creativity, and resilience. We welcome first
            time speakers and offer speaker mentoring and might be able to offer
            travel support for international (or interdimensional) speakers!
          </p>
          <p className="font-semibold">
            TLDR: The security multiverse needs heroes, so join us at BSidesTLV
            2025, December 11! Call for Volunteers is now open!{" "}
            <a
              href="https://signup.com/go/XWAtoJV"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wanna help?
            </a>
          </p>
        </div>
      </Hero>

      {/* Event Details Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Important Dates and Details
          </h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>CFP Opens:</strong> 16/2/2025 at 10:00:00 Israel time
              </li>
              <li>
                <strong>CFP Closes:</strong> 15/4/2025 at 23:59:59 Israel time
              </li>
              <li>
                <strong>CFP decisions:</strong> will be sent to submitters by
                5/5/2025
              </li>
              <li>
                <strong>Agenda announced:</strong> by 20/5/2025
              </li>
              <li>
                <strong>Ticket sales, T-shirt orders & registration:</strong>{" "}
                will open during May 2025
              </li>
              <li>
                <strong>BSidesTLV 2025:</strong> December 11, 2025 from 9am to
                6pm
              </li>
              <li>
                <strong>Location:</strong> Live & in person at Tel Aviv
                University during Tel Aviv Cyber Week, in Smolarz auditorium
              </li>
              <li>
                <strong>Features:</strong> Main stage with live talks,
                networking and chillout areas, dedicated sponsor zone, and
                unique villages focusing on hardware hacking, bug bounty
                programs and more!
              </li>
              <li>
                <strong>Language:</strong> All talks presented in English,
                filmed and uploaded to YouTube after the event
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Stats stats={stats} />

      <CommunityLinks links={communityLinks} />

      {/* Videos Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Watch 2024 Videos
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Need some inspiration? Watch videos from our past events!
          </p>
          <a
            href="https://www.youtube.com/@BSidesTLV"
            className="inline-block rounded-lg bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
