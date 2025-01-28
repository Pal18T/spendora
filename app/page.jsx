import HeroSection from "@/components/hero"
import { Card, CardContent } from "@/components/ui/card"
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing"
import Image from "next/image"

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section className="py-16 bg-gradient-to-r from-slate-50 to-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-8 pb-4 md:justify-center">
            {statsData.map((statsData, index) => (
              <div key={index}
                className="flex-shrink-0 min-e-[250px] p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                <div className="statsData-value bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent text-4xl font-bold mb-2">{statsData.value}</div>
                <div className="statsData-label text-sm uppercase tracking-wide font-semibold text-slate-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //features */}
      
      <section className="py-12 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Explore our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group h-64 [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 rounded-xl p-6 flex flex-col items-center justify-center border-4 border-white bg-gradient-to-br from-blue-400 via-slate-800 to-indigo-300 shadow-2xl">
                  <div className="mb-4 backdrop-blur-sm bg-blue-100 p-4 rounded-full">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-center text-white drop-shadow-md">
                    {feature.title}
                  </h3>
                
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl p-6 flex flex-col items-center justify-center bg-gradient-to-tr from-slate-500 to-red-300 border-4 border-white shadow-2xl z-[1]">
                  <div className="relative text-center">
                  
                  <p className="text-white mb-4 text-center font-semibold text-lg">
                    {feature.description}
                  </p>
                  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
{/* working */}
    <section className="py-16 bg-gray-400">
      <div className=" container px-4 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How it Works 💡</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {howItWorksData.map((howItWorks, index) => (
              <div key={index} className="text-center">  
              <div className="w-16 h-16 flex rounded-full bg-blue-100 items-center justify-center mx-auto mb-6">
                {howItWorks.icon}
                </div> 
                <h3 className="text-2xl font-semibold mb-4">{howItWorks.title}</h3>
                <p className="text-slate-700">{howItWorks.description}</p>                       
              </div>

            ))}
          </div>
        
      </div>

    </section>

    {/* testimonials */}

    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12"> Our Users 🤝 Our Pride</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="pt-4">
                <div className="flex items=center mb-4">
                  <Image 
                  src={testimonial.image}
                  alt="testimonial.name"
                  width={40}
                  height={40}
                  className="rounded-full"
                  
                  />
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
      
    </div>

  )
}
