import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
   const locationQuery = "V92G+8CM, Avenue 6 Lake Drive Uttara Sector 17H, Dhaka 1230";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&output=embed`;

  return (
    <div className="bg-base-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            We love to hear from you! Whether you have a question, feedback, or need assistance, our team is ready to help.
          </p>
          <div className="divider w-24 mx-auto mt-4"></div>
        </div>

        {/* --- Main Content: Info and Form --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- Left Column: Contact Details & Map --- */}
          <div className="flex flex-col gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-base-100 shadow">
                <FaMapMarkerAlt className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Our Address</h3>
                  {/* --- UPDATED ADDRESS --- */}
                  <p className="text-base-content/80">
                    Sector 17, Uttara
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-base-100 shadow">
                <FaEnvelope className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p className="text-base-content/80">support@nextcart.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-base-100 shadow">
                <FaPhoneAlt className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <p className="text-base-content/80">+880 1318 181198</p>
                </div>
              </div>
            </div>

            {/* --- UPDATED EMBEDDED MAP --- */}
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="card bg-base-100 shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input type="email" placeholder="your.email@example.com" className="input input-bordered w-full" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input type="text" placeholder="What is your message about?" className="input input-bordered w-full" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label><br />
                <textarea className="textarea textarea-bordered h-32 w-full" placeholder="Write your message here..." required></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}