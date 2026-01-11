'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What exactly is SupaNext?",
    answer: "SupaNext is a comprehensive Next.js boilerplate designed to help you launch your SaaS in record time. It comes pre-integrated with Supabase for auth and database, Stripe for billing, Resend for emails, and much more."
  },
  {
    question: "Is it easy to customize?",
    answer: "Absolutely. We use Tailwind CSS for styling and follow best practices for Next.js App Router. The code is modular, clean, and well-documented, making it easy to adapt to your specific needs."
  },
  {
    question: "Do I get lifetime updates?",
    answer: "Yes! Once you purchase a license, you get access to all future updates and improvements to the boilerplate at no extra cost."
  },
  {
    question: "What stack does it use?",
    answer: "The core stack is Next.js 16, TypeScript, Tailwind CSS, Supabase (Auth, Database, Storage), Stripe, and Resend. We also include shadcn/ui for components."
  },
  {
    question: "Can I use it for multiple projects?",
    answer: "The SupaNext + CodeFast bundle allows you to use the boilerplate for unlimited projects. Build as many SaaS ideas as you want!"
  },
  {
    question: "How does the AI integration work?",
    answer: "We provide pre-configured routes and examples for integrating with OpenAI or Anthropic, including streaming responses and handling large language model interactions."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-8 text-left group"
      >
        <span className={`font-black tracking-tight transition-colors duration-300 ${isOpen ? 'text-yellow-400' : 'text-white'} text-lg sm:text-xl pr-4`}>
          {question}
        </span>
        <span className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-yellow-400' : 'text-gray-500'}`}>
          {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-8 text-gray-400 font-medium leading-relaxed pr-10 text-lg">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#0B0D11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-yellow-400 uppercase tracking-[0.2em] mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black text-white mb-8 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-medium"
          >
            Everything you need to know about SupaNext.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#131313] rounded-[2.5rem] border border-white/5 p-8 sm:p-12">
            <div className="divide-y divide-white/5">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
