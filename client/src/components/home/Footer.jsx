import { motion } from "framer-motion"

function Footer() {

  return (

    <footer className="relative bg-[#030712] text-white overflow-hidden border-t border-white/10">



      {/* BACKGROUND GLOW */}

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[160px]" />



      <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">



        {/* TOP GRID */}

        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-16">



          {/* BRAND */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-4xl font-black tracking-tight">

              LearnAI

            </h2>



            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-md">

              Premium AI-powered learning platform
              designed for developers, creators,
              engineers, and future innovators.

            </p>



            {/* SOCIALS */}

            <div className="flex items-center gap-4 mt-10">

              {["𝕏", "in", "◉"].map((icon, index) => (

                <button
                  key={index}
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center text-lg"
                >

                  {icon}

                </button>

              ))}

            </div>

          </motion.div>



          {/* PRODUCT */}

          <div>

            <h3 className="text-xl font-bold">
              Product
            </h3>

            <div className="space-y-5 mt-8 text-gray-400">

              <p className="hover:text-white transition cursor-pointer">
                Courses
              </p>

              <p className="hover:text-white transition cursor-pointer">
                AI Recommendations
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Learning Dashboard
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Certificates
              </p>

            </div>

          </div>



          {/* COMPANY */}

          <div>

            <h3 className="text-xl font-bold">
              Company
            </h3>

            <div className="space-y-5 mt-8 text-gray-400">

              <p className="hover:text-white transition cursor-pointer">
                About
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Careers
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Blog
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Contact
              </p>

            </div>

          </div>



          {/* NEWSLETTER */}

          <div>

            <h3 className="text-xl font-bold">
              Stay Updated
            </h3>



            <p className="text-gray-400 leading-relaxed mt-8">

              Get AI learning insights,
              new course launches, and product updates.

            </p>



            <div className="mt-8">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
              />



              <button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300">

                Subscribe

              </button>

            </div>

          </div>

        </div>



        {/* BOTTOM */}

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500">

            © 2026 LearnAI. All rights reserved.

          </p>



          <div className="flex items-center gap-8 text-gray-500">

            <p className="hover:text-white transition cursor-pointer">

              Privacy Policy

            </p>

            <p className="hover:text-white transition cursor-pointer">

              Terms of Service

            </p>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer