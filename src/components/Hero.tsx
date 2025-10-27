import logoImage from '../assets/noir_care_carwash.jpeg';

export default function Hero() {
  return (
    <section
      class="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black dark:bg-white transition-colors duration-300"
      aria-labelledby="hero-heading"
    >
      <div class="max-w-5xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div class="flex justify-center mb-8 animate-fade-in min-h-screen">
          <img
            src={logoImage}
            alt="Noir CarCare - Oog voor Detail"
            class="w-full max-w-md h-auto rounded-lg shadow-2xl"
            loading="eager"
            fetchpriority="high"
          />
          {/* Scroll indicator - positioned relative to section */}
          <div class="absolute flex justify-center animate-bounce bottom-2">
            <svg
              class="w-6 h-6 sm:w-8 sm:h-8 text-noir-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          class="text-5xl md:text-7xl font-bold text-white dark:text-black leading-tight animate-slide-up"
        >
          Premium Car Care
          <span class="block mt-2 text-noir-blue">
            Oog voor Detail
          </span>
        </h1>

        {/* Subheading */}
        <p class="text-xl md:text-2xl text-gray-300 dark:text-gray-700 max-w-2xl mx-auto animate-slide-up-delay">
          Ervaar de ultieme auto verzorging waar precisie en perfectie samenkomen.
          Wij behandelen uw voertuig met de aandacht die het verdient.
        </p>

        {/* CTA Buttons */}
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in-delay">
          <a
            href="#services"
            class="px-8 py-4 bg-noir-blue text-black font-semibold rounded-lg shadow-lg hover:shadow-noir-blue/50 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-noir-blue/50"
          >
            Bekijk Onze Services
          </a>
          <a
            href="#contact"
            class="px-8 py-4 border-2 border-noir-blue text-noir-blue font-semibold rounded-lg hover:bg-noir-blue hover:text-black transition-all duration-300 focus:ring-4 focus:ring-noir-blue/50"
          >
            Contact Opnemen
          </a>
        </div>
      </div>
    </section>
  );
}
