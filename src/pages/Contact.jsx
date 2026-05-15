import { useState } from 'react';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { phoneNumber, whatsappUrl } from '../data/site';
import { PageHero } from '../components/PageHero';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="page">
      <PageHero
        eyebrow="Contact Us"
        title="Tell us about the space you want to build."
        body="Share your requirements and Quazer Construction will be ready for your EmailJS integration when you connect the provider."
      />
      <section className="section contact-layout">
        <form className="contact-form" onSubmit={submit} data-reveal>
          <label>
            Name
            <input name="name" value={form.name} onChange={update} placeholder="Your full name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required />
          </label>
          <label>
            Indian phone number
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              placeholder="+91 98765 43210"
              pattern="^(\\+91[\\s-]?)?[6-9]\\d{9}$"
              required
            />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={update} placeholder="Tell us about your project, site, budget or timeline" rows="6" required />
          </label>
          <button type="submit">
            Send Message <Mail size={18} />
          </button>
        </form>
        <aside className="contact-card" data-reveal>
          <Sparkles size={28} />
          <h2>Start with a clear conversation.</h2>
          <p>Discuss villas, apartments, commercial buildings, hospitals, shopping complexes and turnkey execution requirements.</p>
          <a href={`tel:${phoneNumber}`}><Phone size={18} /> {phoneNumber}</a>
          <a href={whatsappUrl}>WhatsApp Quazer Construction</a>
          <span><MapPin size={18} /> Available for project opportunities and collaborations</span>
        </aside>
      </section>
    </main>
  );
}
