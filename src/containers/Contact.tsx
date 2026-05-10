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

    const SERVICE_ID = 'service_jtcgaaa';
    const ADMIN_TEMPLATE_ID = 'template_v728pin'; 
    const AUTO_REPLY_TEMPLATE_ID = 'template_mv1zoyc'; 

    try {
      emailjs.init('wDYLZEKfApFLOykrr');

      // 1. Send message TO YOU (Admin Notification)
      await emailjs.sendForm(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        formRef.current
      );

      // 2. Send AUTO-REPLY TO USER (Free tier manual fire)
      await emailjs.sendForm(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        formRef.current
      );

      toast.success('Message sent! I will get back to you soon.', { id: toastId });
      formRef.current.reset();
    } catch (error: any) {
      console.error('EmailJS Error:', error?.text || error);
      toast.error('Failed to send message. Please try again.', { id: toastId });
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
    <motion.section
      id="contact"
      {...getSectionAnimation}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 group p-3 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`${info.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0`}>
                      <Icon icon={info.icon} width={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{info.title}</p>
                      <p className="text-gray-900 font-bold group-hover:text-blue-600 transition-colors truncate text-sm md:text-base">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-blue-200 shrink-0">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Icon icon="mdi:robot-happy-outline" width={100} />
                </div>
                <h4 className="text-xl font-black mb-3 relative z-10">Open for Opportunities</h4>
                <p className="text-blue-100 text-xs leading-relaxed relative z-10">
                    I am currently looking for new roles in IoT, Robotics, and Full-Stack Development. Let's build something amazing together!
                </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-2xl opacity-10 -rotate-1" />
              <div className="relative bg-white border-2 border-gray-900 rounded-[2.5rem] p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(17,24,39,1)] h-full flex flex-col justify-center">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="user_name" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                      <input
                        type="text"
                        name="from_name"
                        id="user_name"
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-bold text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="user_email" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="from_email"
                        id="user_email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-bold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-bold text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      placeholder="Hi Mehrab, I'd like to talk about..."
                      className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-bold text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="group relative w-full inline-flex items-center justify-center px-8 py-4 font-black text-white transition-all duration-200 bg-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                  >
                    <span className="flex items-center gap-3 text-lg tracking-wider uppercase">
                      {isSending ? 'Firing Away...' : 'Send Message'}
                      <Icon icon="mdi:send-variant" width={20} className={isSending ? 'animate-ping' : 'group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform'} />
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
