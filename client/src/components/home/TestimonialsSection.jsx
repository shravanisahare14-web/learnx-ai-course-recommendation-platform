import { motion } from "framer-motion"

function TestimonialsSection() {

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Frontend Developer",
      text:
        "The AI recommendations genuinely helped me discover advanced frontend concepts faster than any other platform.",
    },

    {
      name: "Priya Verma",
      role: "Machine Learning Student",
      text:
        "The immersive learning experience and smart progress tracking made studying feel motivating and addictive.",
    },

    {
      name: "Rohan Mehta",
      role: "Full Stack Engineer",
      text:
        "This platform feels more premium and intelligent than many modern learning products available today.",
    },
  ]

  return (

    <section className="relative py-36 bg-[#030712] overflow-hidden text-white">



      {/* BACKGROUND LIGHT */}

      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-500/10 blur-[180px]" />



      <div className="max-w-7xl mx-auto px-8 relative z-10">



        {/* TOP */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <p className="text-indigo-400 uppercase tracking-[4px] text-sm font-semibold">

            Learner Stories

          </p>



          <h2 className="text-[72px] leading-[0.95] font-black tracking-[-4px] mt-8">

            Trusted By
            <br />

            Future Innovators

          </h2>



          <p className="text-gray-400 text-2xl leading-relaxed mt-10">

            Developers, creators, engineers, and AI learners
            use our platform to accelerate growth,
            build real-world skills, and stay ahead.

          </p>

        </motion.div>



        {/* TESTIMONIAL GRID */}

        <div className="grid lg:grid-cols-3 gap-8 mt-24">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[36px] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >

              {/* QUOTE */}

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl">

                “

              </div>



              {/* TEXT */}

              <p className="text-gray-300 text-xl leading-relaxed mt-10">

                {item.text}

              </p>



              {/* USER */}

              <div className="flex items-center gap-5 mt-12">

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold">

                  {item.name.charAt(0)}

                </div>



                <div>

                  <h3 className="text-2xl font-bold">

                    {item.name}

                  </h3>

                  <p className="text-gray-400 mt-2">

                    {item.role}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default TestimonialsSection