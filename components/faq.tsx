"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who can participate in FremontHacks?",
      answer:
        "FremontHacks is open to all high school students. Whether you're a coding expert or just starting out, everyone is welcome to join and learn!",
    },
    {
      question: "Do I need to have a team?",
      answer:
        "You can register as an individual or with a team of up to 4 members. We'll have team formation activities at the beginning of the event for those who register individually.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, student ID, and any other devices you might need for your project. We'll provide food, drinks, and a comfortable hacking environment.",
    },
    {
      question: "Is FremontHacks free to attend?",
      answer: "Yes! FremontHacks is completely free for all participants, thanks to our generous sponsors.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No problem! FremontHacks is a learning experience. We'll have workshops and mentors to help you get started and guide you throughout the event.",
    },
  ]

  return (
    <section ref={ref} id="faq" className="py-24 px-4 md:px-8 border-t border-black/10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-lg opacity-80">Have questions? We've got answers.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-black/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 opacity-70" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-sm opacity-80">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg font-medium mb-2">Still have questions?</p>
          <a href="mailto:fremonthacks2025@gmail.com" className="text-lg underline hover:opacity-80">
            fremonthacks2025@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}

