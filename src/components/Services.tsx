import { For } from 'solid-js';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'detail',
    title: 'Volledig Detailing',
    description: 'Complete binnen- en buitenkant behandeling voor een showroom finish.',
    icon: 'M5 13l4 4L19 7',
    features: [
      'Grondige hand was',
      'Clay bar behandeling',
      'Machinaal polijsten',
      'Keramische coating',
      'Interieur reiniging',
    ],
  },
  {
    id: 'wash',
    title: 'Premium Wasbeurt',
    description: 'Professionele wasbeurt met hoogwaardige producten en technieken.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    features: [
      'Pre-wash foam behandeling',
      'Twee-emmers methode',
      'Velgen reiniging',
      'Banden zwart maken',
      'Glas behandeling',
    ],
  },
  {
    id: 'protect',
    title: 'Bescherming & Care',
    description: 'Langdurige bescherming voor uw lak en interieur.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: [
      'Wax behandeling',
      'Keramische coating',
      'Leder verzorging',
      'Kunststof bescherming',
      'Lakbescherming film',
    ],
  },
  {
    id: 'restoration',
    title: 'Lak Restauratie',
    description: 'Verwijder krasjes, swirls en oxidatie voor een perfect resultaat.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    features: [
      'Kras verwijdering',
      'Swirl correctie',
      'Oxidatie behandeling',
      'Multi-step polijsten',
      'Kleur herstel',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      class="min-h-screen py-20 px-6 bg-zinc-900 dark:bg-gray-100 transition-colors duration-300"
      aria-labelledby="services-heading"
    >
      <div class="max-w-7xl mx-auto">
        {/* Section Header */}
        <div class="text-center mb-16">
          <h2
            id="services-heading"
            class="text-4xl md:text-5xl font-bold text-white dark:text-black mb-4"
          >
            Onze Services
          </h2>
          <p class="text-xl text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            Professionele auto verzorging op maat, met oog voor elk detail
          </p>
        </div>

        {/* Services Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <For each={services}>
            {(service) => (
              <article
                class="bg-black dark:bg-white p-8 rounded-xl shadow-xl border border-zinc-800 dark:border-gray-200 hover:border-noir-blue dark:hover:border-noir-blue transition-all duration-300 hover:shadow-2xl hover:shadow-noir-blue/20"
                aria-labelledby={`service-${service.id}`}
              >
                {/* Icon */}
                <div class="mb-6">
                  <div class="w-16 h-16 bg-noir-blue/10 rounded-lg flex items-center justify-center">
                    <svg
                      class="w-8 h-8 text-noir-blue"
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
                        d={service.icon}
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3
                  id={`service-${service.id}`}
                  class="text-2xl font-bold text-white dark:text-black mb-3"
                >
                  {service.title}
                </h3>
                <p class="text-gray-300 dark:text-gray-700 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul class="space-y-2" aria-label={`${service.title} features`}>
                  <For each={service.features}>
                    {(feature) => (
                      <li class="flex items-start gap-2 text-gray-300 dark:text-gray-700">
                        <svg
                          class="w-5 h-5 text-noir-blue flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    )}
                  </For>
                </ul>

                {/* CTA */}
                <button
                  class="mt-6 w-full py-3 bg-noir-blue text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-noir-blue/50 transition-all duration-300 focus:ring-4 focus:ring-noir-blue/50"
                  aria-label={`Meer informatie over ${service.title}`}
                >
                  Meer Info
                </button>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
