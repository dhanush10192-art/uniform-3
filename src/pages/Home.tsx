import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import CustomPolo from '../components/CustomPolo';
import Gallery from '../components/Gallery';
import ShopByCategory from '../components/ShopByCategory';
import CustomRoundNeck from '../components/CustomRoundNeck';
import Blog from '../components/Blog';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main className="pt-16 sm:pt-20">
      <Hero />

      {/* What We Do section */}
      <WhatWeDo />

      <CustomPolo />
      <ShopByCategory />
      <Gallery />
      <CustomRoundNeck />
      <Blog />
      <About />
      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">For general enquiries, partnerships or support, reach out to us below.</p>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry" className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Enquiry</h2>
          <p className="text-gray-700 mb-6">Send us an enquiry and we'll get back to you shortly.</p>

          <form className="space-y-4" action="mailto:fastcolorsfashion@gmail.com" method="post" encType="text/plain">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" className="mt-1 block w-full border rounded-md p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" className="mt-1 block w-full border rounded-md p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows={4} className="mt-1 block w-full border rounded-md p-2" />
            </div>

            <div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Enquiry</button>
            </div>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="text-gray-700">Visit our office at:</p>
          <div className="mt-2 text-gray-800">
            <address className="not-italic">
              72, KNP Subramaniam Nagar Pudur, Pirivu,<br />
              Dharapuram Road, Tiruppur,<br />
              Tamil Nadu 641604
            </address>

            <div className="mt-4 w-full h-64">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=72,+KNP+Subramaniam+Nagar+Pudur,+Pirivu,+Dharapuram+Road,+Tiruppur,+Tamil+Nadu+641604&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-2">
              <a href="https://www.google.com/maps?q=72,+KNP+Subramaniam+Nagar+Pudur,+Pirivu,+Dharapuram+Road,+Tiruppur,+Tamil+Nadu+641604" target="_blank" rel="noopener noreferrer" className="text-blue-600">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
};

export default Home;
