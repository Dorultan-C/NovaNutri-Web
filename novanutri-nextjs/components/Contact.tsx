"use client";

export default function Contact() {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (We will connect this to a backend later!)");
  };

  return (
    <section id="contact" className="w-full bg-surface py-24 px-6 border-t border-muted/10">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl font-extrabold text-heading tracking-tight mb-4">Get in Touch</h2>
        <p className="text-lg text-body mb-12">
          Have a question about the app, need support, or want to partner with us? Send us a message and our team will get back to you shortly.
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-6 text-left" onSubmit={handleContactSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-heading ml-1">Name</label>
              <input type="text" id="name" required placeholder="John Doe" className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all" />
            </div>
            
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-heading ml-1">Email Address</label>
              <input type="email" id="email" required placeholder="john@example.com" className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all" />
            </div>
          </div>
          
          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-bold text-heading ml-1">Message</label>
            <textarea id="message" required rows={5} placeholder="How can we help you?" className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all resize-y"></textarea>
          </div>

          <button type="submit" className="mt-4 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 w-full md:w-auto md:self-end active:scale-95">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}