export default function Contact() {
  return (
    <section
      id="contact"
      class="min-h-screen py-20 px-6 bg-black dark:bg-white transition-colors duration-300"
      aria-labelledby="contact-heading"
    >
      <div class="max-w-4xl mx-auto">
        {/* Section Header */}
        <div class="text-center mb-16">
          <h2
            id="contact-heading"
            class="text-4xl md:text-5xl font-bold text-white dark:text-black mb-4"
          >
            Neem Contact Op
          </h2>
          <p class="text-xl text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            Klaar om uw auto te laten stralen? Neem contact met ons op voor een afspraak of meer informatie
          </p>
        </div>

        {/* Contact Form */}
        <div class="bg-zinc-900 dark:bg-gray-100 p-8 rounded-xl shadow-xl border border-zinc-800 dark:border-gray-200">
          <form class="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2"
              >
                Naam *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-3 bg-black dark:bg-white border border-zinc-800 dark:border-gray-200 rounded-lg text-white dark:text-black placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-noir-blue focus:border-transparent transition-all duration-300"
                placeholder="Uw naam"
              />
            </div>

            {/* Email */}
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2"
              >
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 bg-black dark:bg-white border border-zinc-800 dark:border-gray-200 rounded-lg text-white dark:text-black placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-noir-blue focus:border-transparent transition-all duration-300"
                placeholder="uw.email@voorbeeld.nl"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2"
              >
                Telefoonnummer
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="w-full px-4 py-3 bg-black dark:bg-white border border-zinc-800 dark:border-gray-200 rounded-lg text-white dark:text-black placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-noir-blue focus:border-transparent transition-all duration-300"
                placeholder="06 12345678"
              />
            </div>

            {/* Service Interest */}
            <div>
              <label
                for="service"
                class="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2"
              >
                Geïnteresseerd in
              </label>
              <select
                id="service"
                name="service"
                class="w-full px-4 py-3 bg-black dark:bg-white border border-zinc-800 dark:border-gray-200 rounded-lg text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-noir-blue focus:border-transparent transition-all duration-300"
              >
                <option value="">Selecteer een pakket</option>
                <optgroup label="Basic Pakketten">
                  <option value="basic-buiten">Basic Buitenreiniging</option>
                  <option value="basic-binnen">Basic Binnenreiniging</option>
                </optgroup>
                <optgroup label="Plus Pakketten">
                  <option value="plus-buiten">Buitenreiniging Plus</option>
                  <option value="plus-binnen">Binnenreiniging Plus</option>
                </optgroup>
                <optgroup label="Premium Pakketten">
                  <option value="premium-buiten">Buitenreiniging Premium</option>
                  <option value="premium-binnen">Binnenreiniging Premium</option>
                  <option value="premium-totaal">Totaal Auto Care Pakket</option>
                </optgroup>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-2"
              >
                Bericht *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-black dark:bg-white border border-zinc-800 dark:border-gray-200 rounded-lg text-white dark:text-black placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-noir-blue focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Vertel ons over uw auto en uw wensen..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              class="w-full py-4 bg-noir-blue text-black font-semibold rounded-lg shadow-lg hover:shadow-noir-blue/50 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-noir-blue/50"
            >
              Verstuur Bericht
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div class="bg-zinc-900 dark:bg-gray-100 p-6 rounded-xl border border-zinc-800 dark:border-gray-200 text-center">
            <div class="w-12 h-12 bg-noir-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                class="w-6 h-6 text-noir-blue"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 class="text-white dark:text-black font-semibold mb-2">Telefoon</h3>
            <p class="text-gray-400 dark:text-gray-600">Binnenkort beschikbaar</p>
          </div>

          {/* Email */}
          <div class="bg-zinc-900 dark:bg-gray-100 p-6 rounded-xl border border-zinc-800 dark:border-gray-200 text-center">
            <div class="w-12 h-12 bg-noir-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                class="w-6 h-6 text-noir-blue"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-white dark:text-black font-semibold mb-2">E-mail</h3>
            <p class="text-gray-400 dark:text-gray-600">Binnenkort beschikbaar</p>
          </div>

          {/* Location */}
          <div class="bg-zinc-900 dark:bg-gray-100 p-6 rounded-xl border border-zinc-800 dark:border-gray-200 text-center">
            <div class="w-12 h-12 bg-noir-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                class="w-6 h-6 text-noir-blue"
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="text-white dark:text-black font-semibold mb-2">Locatie</h3>
            <p class="text-gray-400 dark:text-gray-600">Nederland</p>
          </div>
        </div>
      </div>
    </section>
  );
}
