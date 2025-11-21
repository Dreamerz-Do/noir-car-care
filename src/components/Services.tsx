import { For } from 'solid-js';

interface ServicePackage {
  id: string;
  title: string;
  description: string;
  result: string;
  icon: string;
  features: string[];
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  packages: ServicePackage[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'basic',
    title: 'Basic Pakketten',
    subtitle: 'Voor regelmatig onderhoud',
    packages: [
      {
        id: 'basic-buiten',
        title: 'Basic Buitenreiniging',
        description: 'Essentiële buitenreiniging voor een verzorgde auto.',
        result: 'Een frisse, glanzende buitenkant',
        icon: 'M5 13l4 4L19 7',
        features: [
          'Handwas met autoshampoo',
          'Velgen- en bandreiniging',
          'Teerverwijdering',
          'Lichte waxbescherming',
          'Ruitenreiniging buitenzijde',
        ],
      },
      {
        id: 'basic-binnen',
        title: 'Basic Binnenreiniging',
        description: 'Basis interieurreiniging voor een frisse auto.',
        result: 'Een schoon en verzorgd interieur',
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        features: [
          'Volledig stofzuigen',
          'Dashboard en middenconsole reinigen',
          'Interieurglas schoonmaken',
          'Kunststofdelen opfrissen',
        ],
      },
    ],
  },
  {
    id: 'plus',
    title: 'Plus Pakketten',
    subtitle: 'Diepere reiniging & bescherming',
    packages: [
      {
        id: 'plus-buiten',
        title: 'Buitenreiniging Plus',
        description: 'Grondige buitenreiniging met extra bescherming.',
        result: 'Gladde, glanzende lak met langdurige bescherming',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        features: [
          'Grondige handwas',
          'Diepe velgen- en bandenreiniging',
          'Teer- en ijzerverwijdering',
          'Kleibehandeling',
          'Beschermende waxlaag',
        ],
      },
      {
        id: 'plus-binnen',
        title: 'Binnenreiniging Plus',
        description: 'Diepgaande interieurreiniging met vlekverwijdering.',
        result: 'Een diep gereinigd interieur met frisse geur',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
        features: [
          'Volledig stofzuigen',
          'Grondige reiniging van dashboard en kunststofdelen',
          'Stoelen en tapijt reinigen',
          'Interieurglas schoonmaken',
          'Vlekverwijdering stoelen en tapijt',
        ],
      },
    ],
  },
  {
    id: 'premium',
    title: 'Premium Pakketten',
    subtitle: 'Maximale glans & verzorging',
    packages: [
      {
        id: 'premium-buiten',
        title: 'Buitenreiniging Premium',
        description: 'Complete buitenverzorging met professionele afwerking.',
        result: 'Diepe glans en langdurige lakbescherming',
        icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
        features: [
          'Complete buitenreiniging',
          'Volledige lakverzorging',
          'Kleibehandeling & 3 staps polijsten',
          'Keramische waxbescherming & glascoating',
          'Velgenbescherming en tiregel',
          'Kunststofherstel',
        ],
      },
      {
        id: 'premium-binnen',
        title: 'Binnenreiniging Premium',
        description: 'Luxe interieurverzorging met stoomreiniging.',
        result: 'Een vlekkeloos, fris en luxueus interieur',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
        features: [
          'Complete binnenreiniging',
          'Dieptereiniging doormiddel van een stoombehandeling',
          'Lederreiniging & verzorging',
          'Vlek- en geurverwijdering',
          'Kunststofherstel',
        ],
      },
      {
        id: 'premium-totaal',
        title: 'Totaal Auto Care Pakket',
        description: 'Complete professionele detailbeurt binnen en buiten.',
        result: 'Een auto die zowel van buiten als van binnen er nieuw eruitziet',
        icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
        features: [
          'Complete professionele detailbeurt',
          'Alle premium binnen- en buitenbehandelingen',
        ],
      },
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
            Onze Pakketten
          </h2>
          <p class="text-xl text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            Professionele auto verzorging op maat, met oog voor elk detail
          </p>
        </div>

        {/* Service Categories */}
        <For each={serviceCategories}>
          {(category) => (
            <div class="mb-16">
              {/* Category Header */}
              <div class="text-center mb-8">
                <h3 class="text-2xl md:text-3xl font-bold text-white dark:text-black mb-2">
                  {category.title}
                </h3>
                <p class="text-lg text-gray-400 dark:text-gray-600">
                  {category.subtitle}
                </p>
              </div>

              {/* Packages Grid */}
              <div class="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                <For each={category.packages}>
                  {(pkg) => (
                    <article
                      class="bg-black dark:bg-white p-6 rounded-xl shadow-xl border border-zinc-800 dark:border-gray-200 hover:border-noir-blue dark:hover:border-noir-blue transition-all duration-300 hover:shadow-2xl hover:shadow-noir-blue/20 flex flex-col w-80"
                      aria-labelledby={`service-${pkg.id}`}
                    >
                      {/* Icon */}
                      <div class="mb-4">
                        <div class="w-12 h-12 bg-noir-blue/10 rounded-lg flex items-center justify-center">
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
                              d={pkg.icon}
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <h4
                        id={`service-${pkg.id}`}
                        class="text-xl font-bold text-white dark:text-black mb-2"
                      >
                        {pkg.title}
                      </h4>
                      <p class="text-gray-400 dark:text-gray-600 mb-4 text-sm">
                        {pkg.description}
                      </p>

                      {/* Features */}
                      <ul class="space-y-2 mb-4 grow" aria-label={`${pkg.title} features`}>
                        <For each={pkg.features}>
                          {(feature) => (
                            <li class="flex items-start gap-2 text-gray-300 dark:text-gray-700 text-sm">
                              <svg
                                class="w-4 h-4 text-noir-blue shrink-0 mt-0.5"
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

                      {/* Result */}
                      <div class="bg-noir-blue/10 rounded-lg p-3 mb-4">
                        <p class="text-noir-blue text-sm font-medium">
                          Resultaat: {pkg.result}
                        </p>
                      </div>

                      {/* CTA */}
                      <a
                        href="#contact"
                        class="w-full py-2 bg-noir-blue text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-noir-blue/50 transition-all duration-300 focus:ring-4 focus:ring-noir-blue/50 block text-center"
                        aria-label={`Neem contact op voor meer informatie over ${pkg.title}`}
                      >
                        Contact Opnemen
                      </a>
                    </article>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
