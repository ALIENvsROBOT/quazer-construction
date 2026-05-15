import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { instagramUrl, phoneNumber, whatsappUrl } from '../data/site';
import { PageHero } from '../components/PageHero';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const buildEmailMessage = ({ name, email, phone, message }) => (
  [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    '',
    'Message:',
    message,
  ].join('\n')
);

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
  };

  const submit = async (event) => {
    event.preventDefault();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured yet. Add your credentials to .env and restart the dev server.',
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const templateParams = {
        from_name: form.name,
        name: form.name,
        from_email: form.email,
        user_email: form.email,
        reply_to: form.email,
        phone: form.phone,
        phone_number: form.phone,
        user_phone: form.phone,
        message: buildEmailMessage(form),
        user_message: form.message,
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        { publicKey: emailConfig.publicKey },
      );

      setForm({ name: '', email: '', phone: '', message: '' });
      setStatus({ type: 'success', message: 'Message sent. Quazer Construction will follow up shortly.' });
    } catch {
      setStatus({ type: 'error', message: 'Message could not be sent. Please try again or call directly.' });
    }
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
          <button type="submit" disabled={status.type === 'loading'}>
            Send Message <Mail size={18} />
          </button>
          {status.message ? <p className={`form-status ${status.type}`}>{status.message}</p> : null}
        </form>
        <aside className="contact-card" data-reveal>
          <div className="contact-card-header">
            <div>
              <span className="eyebrow">Project Enquiry</span>
              <h2>Start with a clear conversation.</h2>
            </div>
          </div>
          <p>Share the project type, site location, budget range and timeline. We handle residential and commercial projects across Tamil Nadu, India.</p>
          <div className="contact-info-list">
            <a href={`tel:${phoneNumber}`}><Phone size={18} /> {phoneNumber}</a>
            <a href={whatsappUrl}><WhatsAppIcon size={18} /> WhatsApp Quazer Construction</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram Quazer Construction</a>
            <span><MapPin size={18} /> Coimbatore, Tamil Nadu, India</span>
          </div>
        </aside>
      </section>
    </main>
  );
}
