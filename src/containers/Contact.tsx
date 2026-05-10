'use client';
import { contactSection } from '@/lib/content/contact';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react';

const Contact = () => {
  const { title, subtitle } = contactSection;
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    const toastId = toast.loading('Sending message...');

    try {
      emailjs.init('wDYLZEKfApFLOykrr'); // Explicitly initialize with Public Key
      const result = await emailjs.sendForm(
        'service_jtcgaaa',
        'template_v728pin',
        formRef.current
      );

      console.log('EmailJS Success:', result.status, result.text);
      toast.success('Message sent successfully!', { id: toastId });
      formRef.current.reset();
    } catch (error: any) {
      console.error('EmailJS Error Details:', error?.text || error);
      toast.error(error?.text || 'Failed to send message.', { id: toastId });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: 'lucide:mail',
      title: 'Email',
      value: 'mehrabratul210524@gmail.com',
      link: 'mailto:mehrabratul210524@gmail.com',
      color: 'bg-blue-500',
    },
    {
      icon: 'lucide:linkedin',
      title: 'LinkedIn',
      value: 'T. M. Mehrab Hasan',
      link: 'https://www.linkedin.com/in/tm-mehrab-hasan',
      color: 'bg-cyan-600',
    },
    {
      icon: 'lucide:map-pin',
      title: 'Location',
      value: 'Mirpur, Dhaka, Bangladesh',
      link: 'https://www.google.com/maps/place/Mirpur,+Dhaka',
      color: 'bg-rose-500',
    },
  ];

  return (
    <motion.section id="contact" {...getSectionAnimation} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Connect With Me</h2>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i === 2 ? 'text-blue-600' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed">{subtitle}</p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className={`p-3 rounded-xl ${info.color} text-white shadow-lg`}>
                    <Icon icon={info.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{info.title}</p>
                    <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{info.value}</p>
                  </div>
                  <Icon icon="lucide:external-link" className="w-5 h-5 ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-2xl opacity-10 -rotate-2" />
              <div className="relative bg-white border-2 border-gray-900 rounded-[2.5rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(17,24,39,1)]">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-black text-gray-900 uppercase tracking-widest z-10">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Mehrab Hasan"
                        className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-gray-100 focus:border-gray-900 outline-none transition-all text-black font-bold text-lg placeholder:text-gray-300"
                      />
                    </div>
                    <div className="relative group">
                      <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-black text-gray-900 uppercase tracking-widest z-10">Email Address</label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        placeholder="hello@mehrab.me"
                        className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-gray-100 focus:border-gray-900 outline-none transition-all text-black font-bold text-lg placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-black text-gray-900 uppercase tracking-widest z-10">Subject</label>
                    <input
                      type="text"
                      name="title"
                      required
                      placeholder="Collaboration Opportunity"
                      className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-gray-100 focus:border-gray-900 outline-none transition-all text-black font-bold text-lg placeholder:text-gray-300"
                    />
                  </div>
                  <div className="relative group">
                    <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-black text-gray-900 uppercase tracking-widest z-10">Your Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Let's build something amazing together..."
                      className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-gray-100 focus:border-gray-900 outline-none transition-all text-black font-bold text-lg placeholder:text-gray-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="group relative w-full inline-flex items-center justify-center px-8 py-5 font-black text-white transition-all duration-200 bg-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center gap-3 text-xl tracking-wider uppercase">
                      {isSending ? 'Firing Away...' : 'Send Message'}
                      {!isSending && <Icon icon="lucide:arrow-right" className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
