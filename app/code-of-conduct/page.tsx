import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContentLayout from '../components/ContentLayout';
import CodeOfConductContent from '../../content/code-of-conduct.mdx';

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Hero 
        title="Code of Conduct"
        subtitle="Creating a safe and inclusive environment for everyone"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-700"
      />

      {/* Contact Alert */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-lg text-red-800">
              If you experience any inappropriate content or violation of our Code of Conduct during our events, 
              you can contact us at{' '}
              <a href="mailto:report@bsidestlv.com" className="text-red-600 hover:text-red-800 underline">
                report@bsidestlv.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <ContentLayout>
        <CodeOfConductContent />
      </ContentLayout>

      <Footer />
    </div>
  );
}