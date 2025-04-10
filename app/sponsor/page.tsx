import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import SponsorshipTiers from "@/components/sponsorship-tiers"
import Navbar from "@/components/navbar"

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="pt-24">
        {/* Header */}
        <header className="border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight lowercase">sponsorship prospectus</h1>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight lowercase mb-4">sponsorship opportunities</h2>
            <p className="text-lg max-w-2xl mx-auto lowercase">
              join us in empowering the next generation of innovators and problem-solvers
            </p>
            <p className="text-lg max-w-2xl mx-auto lowercase">
              ✉️ sponsor@fremonthacks.org
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white" id="mission">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight lowercase mb-8">our mission</h2>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-black"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-black"></div>
                <p className="text-lg mb-6 lowercase leading-relaxed">
                  fremontHacks is dedicated to fostering innovation, collaboration, and learning among high school
                  students in the bay area. we believe in creating an inclusive environment where students can explore
                  technology, develop new skills, and build solutions to real-world problems.
                </p>
                <p className="text-lg lowercase leading-relaxed">
                  our hackathon provides a platform for students to transform their ideas into reality, regardless of
                  their prior experience with technology. by sponsoring fremontHacks, you're directly contributing to
                  the growth and development of young minds in STEM.
                </p>
              </div>
              <div className="mt-12 flex justify-center">
                <div className="inline-flex items-center px-6 py-3 border-2 border-black lowercase font-medium">
                  empowering the next generation of innovators
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sponsor Section */}
        <section className="py-16 bg-gray-100" id="why-sponsor">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight lowercase mb-8">why sponsor us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 lowercase">talent recruitment</h3>
                <p className="lowercase">
                  connect with motivated and skilled students who could be your future interns or employees. our
                  hackathon attracts problem-solvers and innovators.
                </p>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 lowercase">brand visibility</h3>
                <p className="lowercase">
                  showcase your company to hundreds of participants, mentors, and judges. build brand recognition among
                  the next generation of tech professionals.
                </p>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 lowercase">community impact</h3>
                <p className="lowercase">
                  demonstrate your commitment to education and innovation. your support helps create opportunities for
                  students who might not otherwise have access to tech resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers Section */}
        <section className="py-16 bg-white" id="sponsorship-tiers">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight lowercase mb-8">sponsorship tiers</h2>
            <SponsorshipTiers />
          </div>
        </section>

        {/* Budget Needs Section */}
        <section className="py-16 bg-black text-white" id="budget">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight lowercase mb-8">where your money goes</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-4 lowercase">
                  <li className="flex items-start">
                
                    <div>
                      <h3 className="font-semibold">food & refreshments</h3>
                      <p className="text-gray-300">
                        keeping participants energized throughout the event with meals, snacks, and beverages
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div>
                      <h3 className="font-semibold">prizes & swag</h3>
                      <p className="text-gray-300">
                        rewarding innovation with meaningful prizes and providing memorable swag for all participants
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div>
                      <h3 className="font-semibold">venue & equipment</h3>
                      <p className="text-gray-300">
                        securing a comfortable space with reliable internet and necessary technical equipment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div>
                      <h3 className="font-semibold">marketing & operations</h3>
                      <p className="text-gray-300">
                        promoting the event to reach diverse participants and ensuring smooth event operations
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white text-black p-8 rounded-lg max-w-md w-full">
                  <h3 className="text-xl font-semibold mb-4 lowercase">custom sponsorship</h3>
                  <p className="lowercase mb-4">
                    don't see a tier that fits your needs? we're happy to work with you to create a custom sponsorship
                    package that aligns with your goals and budget.
                  </p>
                  <a href="mailto:sponsor@fremonthacks.org">
                    <Button className="w-full lowercase bg-black hover:bg-gray-800">contact us</Button>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Information Section */}
        <section className="py-16 bg-gray-100" id="tax-info">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight lowercase mb-8">tax information</h2>
            <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
              <p className="lowercase mb-4">
                ​FremontHacks operates under the fiscal sponsorship of The Hack Foundation, a 501(c)(3) nonprofit organization with the Employer Identification Number (EIN) 81-2908499. This arrangement allows your sponsorship contribution to be tax-deductible to the extent permitted by law
              </p>
              <p className="lowercase mb-4">
                Upon receiving your sponsorship, we will provide an acknowledgment letter containing all necessary information for your tax records, including:
              </p>
              <ul className="list-disc pl-5 mb-4 lowercase">
                <li>The Hack Foundation's EIN</li>
                <li>Donation Receipt</li>
                <li>confirmation of 501(c)(3) status</li>
              </ul>
              <p className="text-sm text-gray-500 lowercase">
                please consult with your tax advisor regarding the deductibility of your contribution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white" id="contact">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight lowercase mb-8">get in touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6 lowercase">
                  interested in sponsoring fremontHacks or have questions? we'd love to hear from you! our team is ready
                  to discuss how we can create a partnership that benefits both your organization and our participants.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    <a href="mailto:sponsor@fremonthacks.org" className="lowercase hover:underline">
                      sponsor@fremonthacks.org
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-4 lowercase">thank you</h3>
                <p className="lowercase mb-4">
                  we appreciate your interest in supporting fremontHacks. your sponsorship makes a significant impact on
                  the educational experience of our participants and helps foster the next generation of innovators.
                </p>
                <p className="lowercase">
                  join us in making fremontHacks an unforgettable experience for all involved!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="lowercase">&copy; {new Date().getFullYear()} fremontHacks. all rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
