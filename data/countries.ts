// data/countries.ts
export interface Country {
  id: string;
  name: string;
  continent: 'asia' | 'europe';
  neighbors: string[]; // country IDs
  borderCrossings: BorderCrossing[];
}

export interface BorderCrossing {
  id: string;
  name: string;
  fromCountry: string;
  toCountry: string;
  requirements: {
    documents: string[];
    vehicleRequirements: string[];
    restrictions: string[];
  };
  status: 'open' | 'closed' | 'restricted';
  waitTime?: number; // in minutes
  lastUpdated: Date;
}

// Sample data for Asia and Europe
export const countries: Country[] = [
  // European countries
  {

    id: 'ru',
    name: 'Russia',
    continent: 'europe',
    neighbors: ['no', 'fi', 'ee', 'lv', 'lt', 'pl', 'by', 'ua', 'ge', 'az', 'kz', 'mn', 'cn', 'kp', 'jp'],
    borderCrossings: [
      {
        id: 'ru-fi-1',
        name: 'Vaalimaa-Nuijamaa',
        fromCountry: 'ru',
        toCountry: 'fi',
        requirements: {
          documents: ['Passport', 'Russian visa', 'Schengen visa for EU'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection certificate'],
          restrictions: ['Customs inspection', 'Commercial vehicle queues', 'Limited hours']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      // Add these border crossings to Russia's borderCrossings array
{
  id: 'ru-kz-1',
  name: 'Oral Border Crossing',
  fromCountry: 'ru',
  toCountry: 'kz',
  requirements: {
    documents: ['Passport', 'Russian visa', 'Kazakhstan visa'],
    vehicleRequirements: ['Vehicle registration', 'Insurance', 'Technical passport'],
    restrictions: ['Customs inspection', 'Commercial vehicles only 8am-8pm', 'No hazardous materials']
  },
  status: 'open',
  waitTime: 45,
  lastUpdated: '2024-01-15'
},
{
  id: 'ru-kz-2', 
  name: 'Petropavl Border Crossing',
  fromCountry: 'ru',
  toCountry: 'kz',
  requirements: {
    documents: ['Passport', 'Russian visa', 'Kazakhstan visa'],
    vehicleRequirements: ['Vehicle registration', 'Insurance', 'Technical passport'],
    restrictions: ['24/7 operation', 'Weight limit: 40 tons']
  },
  status: 'open',
  waitTime: 30,
  lastUpdated: '2024-01-15'
},
      {
        id: 'ru-ee-1',
        name: 'Narva-Ivangorod',
        fromCountry: 'ru',
        toCountry: 'ee',
        requirements: {
          documents: ['Passport', 'Russian visa', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical inspection'],
          restrictions: ['Border bridge crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'ru-lv-1',
        name: 'Terehova-Buraki',
        fromCountry: 'ru',
        toCountry: 'lv',
        requirements: {
          documents: ['Passport', 'Russian visa', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU compliance documents'],
          restrictions: ['Customs inspection', 'Commercial traffic', 'Seasonal variations']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'ru-by-1',
        name: 'Krasnoye-Kamenny Log',
        fromCountry: 'ru',
        toCountry: 'by',
        requirements: {
          documents: ['Passport', 'Russian visa or Belarus visa'],
          vehicleRequirements: ['Vehicle registration', 'Insurance valid for both countries', 'Technical certificate'],
          restrictions: ['Union State crossing', 'Simplified procedures', 'Customs inspection']
        },
        status: 'open',
        waitTime: 30,
        lastUpdated: '2024-01-15'
      }
    ]
  },
    {
    id: 'de',
    name: 'Germany',
    continent: 'europe',
    neighbors: ['dk', 'pl', 'cz', 'at', 'ch', 'fr', 'be', 'nl', 'lu'],
    borderCrossings: [
      {
        id: 'de-fr-1',
        name: 'Kehl-Strasbourg',
        fromCountry: 'de',
        toCountry: 'fr',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Rhine river crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 20,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'de-pl-1',
        name: 'Frankfurt (Oder)-Świecko',
        fromCountry: 'de',
        toCountry: 'pl',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Oder river crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'fr',
    name: 'France',
    continent: 'europe',
    neighbors: ['be', 'lu', 'de', 'ch', 'it', 'es', 'ad', 'mc'],
    borderCrossings: [
      {
        id: 'fr-es-1',
        name: 'Le Perthus-La Jonquera',
        fromCountry: 'fr',
        toCountry: 'es',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Pyrenees crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 30,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'fr-it-1',
        name: 'Ventimiglia-Menton',
        fromCountry: 'fr',
        toCountry: 'it',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Mediterranean coast', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'it',
    name: 'Italy',
    continent: 'europe',
    neighbors: ['fr', 'ch', 'at', 'si', 'sm', 'va'],
    borderCrossings: [
      {
        id: 'it-ch-1',
        name: 'Chiasso-Como',
        fromCountry: 'it',
        toCountry: 'ch',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Swiss vignette'],
          restrictions: ['Alpine crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 35,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'it-at-1',
        name: 'Brennero-Brenner',
        fromCountry: 'it',
        toCountry: 'at',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Alpine pass', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 40,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'es',
    name: 'Spain',
    continent: 'europe',
    neighbors: ['fr', 'pt', 'ad'],
    borderCrossings: [
      {
        id: 'es-fr-1',
        name: 'La Jonquera-Le Perthus',
        fromCountry: 'es',
        toCountry: 'fr',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Pyrenees crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 30,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'es-pt-1',
        name: 'Tui-Valença',
        fromCountry: 'es',
        toCountry: 'pt',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['River crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 20,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'pt',
    name: 'Portugal',
    continent: 'europe',
    neighbors: ['es'],
    borderCrossings: [
      {
        id: 'pt-es-1',
        name: 'Valença-Tui',
        fromCountry: 'pt',
        toCountry: 'es',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['River crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 20,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'ch',
    name: 'Switzerland',
    continent: 'europe',
    neighbors: ['de', 'fr', 'it', 'at', 'li'],
    borderCrossings: [
      {
        id: 'ch-de-1',
        name: 'Basel-Weil am Rhein',
        fromCountry: 'ch',
        toCountry: 'de',
        requirements: {
          documents: ['Passport', 'Schengen visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Swiss vignette'],
          restrictions: ['Rhine crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 25,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'ch-it-1',
        name: 'Chiasso-Como',
        fromCountry: 'ch',
        toCountry: 'it',
        requirements: {
          documents: ['Passport', 'Schengen visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Swiss vignette'],
          restrictions: ['Alpine crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 35,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'at',
    name: 'Austria',
    continent: 'europe',
    neighbors: ['de', 'cz', 'sk', 'hu', 'si', 'it', 'ch', 'li'],
    borderCrossings: [
      {
        id: 'at-de-1',
        name: 'Kufstein-Kiefersfelden',
        fromCountry: 'at',
        toCountry: 'de',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Alpine crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 30,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'at-it-1',
        name: 'Brenner-Brennero',
        fromCountry: 'at',
        toCountry: 'it',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Alpine pass', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 40,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'cz',
    name: 'Czech Republic',
    continent: 'europe',
    neighbors: ['de', 'pl', 'sk', 'at'],
    borderCrossings: [
      {
        id: 'cz-de-1',
        name: 'Rozvadov-Waidhaus',
        fromCountry: 'cz',
        toCountry: 'de',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Forest crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 25,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'cz-sk-1',
        name: 'Břeclav-Brodské',
        fromCountry: 'cz',
        toCountry: 'sk',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['River crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 15,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'sk',
    name: 'Slovakia',
    continent: 'europe',
    neighbors: ['cz', 'pl', 'ua', 'hu', 'at'],
    borderCrossings: [
      {
        id: 'sk-hu-1',
        name: 'Rajka-Rusovce',
        fromCountry: 'sk',
        toCountry: 'hu',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Danube crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 20,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'sk-ua-1',
        name: 'Uzhhorod-Vyšné Nemecké',
        fromCountry: 'sk',
        toCountry: 'ua',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Ukrainian visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Ukraine border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'hu',
    name: 'Hungary',
    continent: 'europe',
    neighbors: ['sk', 'ua', 'ro', 'rs', 'hr', 'si', 'at'],
    borderCrossings: [
      {
        id: 'hu-ro-1',
        name: 'Nagylak-Nădlac',
        fromCountry: 'hu',
        toCountry: 'ro',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Plain crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 30,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'hu-rs-1',
        name: 'Röszke-Horgoš',
        fromCountry: 'hu',
        toCountry: 'rs',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Serbian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Serbia border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'si',
    name: 'Slovenia',
    continent: 'europe',
    neighbors: ['at', 'hu', 'hr', 'it'],
    borderCrossings: [
      {
        id: 'si-it-1',
        name: 'Fernetti-Fernetiči',
        fromCountry: 'si',
        toCountry: 'it',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Alpine crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 25,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'si-hr-1',
        name: 'Obrežje-Bregana',
        fromCountry: 'si',
        toCountry: 'hr',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Croatian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Croatia border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'hr',
    name: 'Croatia',
    continent: 'europe',
    neighbors: ['si', 'hu', 'rs', 'ba', 'me'],
    borderCrossings: [
      {
        id: 'hr-si-1',
        name: 'Bregana-Obrežje',
        fromCountry: 'hr',
        toCountry: 'si',
        requirements: {
          documents: ['Passport', 'Croatian visa if required', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Croatia-EU border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'hr-ba-1',
        name: 'Stara Gradiška-Gradiška',
        fromCountry: 'hr',
        toCountry: 'ba',
        requirements: {
          documents: ['Passport', 'Croatian visa if required', 'Bosnian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Border crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'ba',
    name: 'Bosnia and Herzegovina',
    continent: 'europe',
    neighbors: ['hr', 'rs', 'me'],
    borderCrossings: [
      {
        id: 'ba-hr-1',
        name: 'Gradiška-Stara Gradiška',
        fromCountry: 'ba',
        toCountry: 'hr',
        requirements: {
          documents: ['Passport', 'Bosnian visa if required', 'Croatian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Border crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'ba-rs-1',
        name: 'Rača-Kotroman',
        fromCountry: 'ba',
        toCountry: 'rs',
        requirements: {
          documents: ['Passport', 'Bosnian visa if required', 'Serbian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Border crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'rs',
    name: 'Serbia',
    continent: 'europe',
    neighbors: ['hu', 'hr', 'ba', 'me', 'xk', 'mk', 'bg', 'ro'],
    borderCrossings: [
      {
        id: 'rs-hu-1',
        name: 'Horgoš-Röszke',
        fromCountry: 'rs',
        toCountry: 'hu',
        requirements: {
          documents: ['Passport', 'Serbian visa if required', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Serbia-EU border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'rs-ro-1',
        name: 'Vărșand-Stara Moravica',
        fromCountry: 'rs',
        toCountry: 'ro',
        requirements: {
          documents: ['Passport', 'Serbian visa if required', 'Romanian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Danube crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'me',
    name: 'Montenegro',
    continent: 'europe',
    neighbors: ['hr', 'ba', 'rs', 'xk', 'al'],
    borderCrossings: [
      {
        id: 'me-rs-1',
        name: 'Dobrakovo-Boljare',
        fromCountry: 'me',
        toCountry: 'rs',
        requirements: {
          documents: ['Passport', 'Montenegrin visa if required', 'Serbian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Mountain crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 30,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'me-al-1',
        name: 'Sukobin-Muriqan',
        fromCountry: 'me',
        toCountry: 'al',
        requirements: {
          documents: ['Passport', 'Montenegrin visa if required', 'Albanian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Coastal crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'xk',
    name: 'Kosovo',
    continent: 'europe',
    neighbors: ['rs', 'mk', 'al', 'me'],
    borderCrossings: [
      {
        id: 'xk-mk-1',
        name: 'Hani i Elezit-Blače',
        fromCountry: 'xk',
        toCountry: 'mk',
        requirements: {
          documents: ['Passport', 'Kosovo visa if required', 'Macedonian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Mountain crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'xk-al-1',
        name: 'Vërmica-Qafë Prush',
        fromCountry: 'xk',
        toCountry: 'al',
        requirements: {
          documents: ['Passport', 'Kosovo visa if required', 'Albanian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Mountain crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'mk',
    name: 'North Macedonia',
    continent: 'europe',
    neighbors: ['rs', 'xk', 'al', 'gr', 'bg'],
    borderCrossings: [
      {
        id: 'mk-gr-1',
        name: 'Bogorodica-Evzoni',
        fromCountry: 'mk',
        toCountry: 'gr',
        requirements: {
          documents: ['Passport', 'Macedonian visa if required', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Macedonia-EU border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'mk-al-1',
        name: 'Qafë Thanë-Kafasan',
        fromCountry: 'mk',
        toCountry: 'al',
        requirements: {
          documents: ['Passport', 'Macedonian visa if required', 'Albanian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Mountain crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'al',
    name: 'Albania',
    continent: 'europe',
    neighbors: ['me', 'xk', 'mk', 'gr'],
    borderCrossings: [
      {
        id: 'al-gr-1',
        name: 'Kakavijë-Krystallopigi',
        fromCountry: 'al',
        toCountry: 'gr',
        requirements: {
          documents: ['Passport', 'Albanian visa if required', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Mountain crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'al-mk-1',
        name: 'Qafë Thanë-Kafasan',
        fromCountry: 'al',
        toCountry: 'mk',
        requirements: {
          documents: ['Passport', 'Albanian visa if required', 'Macedonian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Mountain crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'gr',
    name: 'Greece',
    continent: 'europe',
    neighbors: ['al', 'mk', 'bg', 'tr'],
    borderCrossings: [
      {
        id: 'gr-bg-1',
        name: 'Promachonas-Kulata',
        fromCountry: 'gr',
        toCountry: 'bg',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Mountain crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'gr-tr-1',
        name: 'Kipoi-Ipsala',
        fromCountry: 'gr',
        toCountry: 'tr',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Turkish visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Turkey border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'bg',
    name: 'Bulgaria',
    continent: 'europe',
    neighbors: ['ro', 'rs', 'mk', 'gr', 'tr'],
    borderCrossings: [
      {
        id: 'bg-tr-1',
        name: 'Kapitan Andreevo-Kapıkule',
        fromCountry: 'bg',
        toCountry: 'tr',
        requirements: {
          documents: ['Passport', 'Bulgarian visa if required', 'Turkish visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Turkey border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'bg-ro-1',
        name: 'Ruse-Giurgiu',
        fromCountry: 'bg',
        toCountry: 'ro',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Danube bridge crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'ro',
    name: 'Romania',
    continent: 'europe',
    neighbors: ['hu', 'ua', 'md', 'bg', 'rs'],
    borderCrossings: [
      {
        id: 'ro-md-1',
        name: 'Albița-Leușeni',
        fromCountry: 'ro',
        toCountry: 'md',
        requirements: {
          documents: ['Passport', 'Romanian visa if required', 'Moldovan visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Prut river crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 75,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'ro-ua-1',
        name: 'Siret-Porubne',
        fromCountry: 'ro',
        toCountry: 'ua',
        requirements: {
          documents: ['Passport', 'Romanian visa if required', 'Ukrainian visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Ukraine border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'md',
    name: 'Moldova',
    continent: 'europe',
    neighbors: ['ro', 'ua'],
    borderCrossings: [
      {
        id: 'md-ro-1',
        name: 'Leușeni-Albița',
        fromCountry: 'md',
        toCountry: 'ro',
        requirements: {
          documents: ['Passport', 'Moldovan visa if required', 'Romanian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Prut river crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 75,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'md-ua-1',
        name: 'Ocnița-Mohyliv-Podilskyi',
        fromCountry: 'md',
        toCountry: 'ua',
        requirements: {
          documents: ['Passport', 'Moldovan visa if required', 'Ukrainian visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Dniester river crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'ua',
    name: 'Ukraine',
    continent: 'europe',
    neighbors: ['pl', 'sk', 'hu', 'ro', 'md', 'by', 'ru'],
    borderCrossings: [
      {
        id: 'ua-pl-1',
        name: 'Krakovets-Korczowa',
        fromCountry: 'ua',
        toCountry: 'pl',
        requirements: {
          documents: ['Passport', 'Ukrainian visa', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Ukraine border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 150,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'ua-ro-1',
        name: 'Porubne-Siret',
        fromCountry: 'ua',
        toCountry: 'ro',
        requirements: {
          documents: ['Passport', 'Ukrainian visa', 'Romanian visa if required'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Ukraine border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'by',
    name: 'Belarus',
    continent: 'europe',
    neighbors: ['lv', 'lt', 'pl', 'ua', 'ru'],
    borderCrossings: [
      {
        id: 'by-pl-1',
        name: 'Brest-Terespol',
        fromCountry: 'by',
        toCountry: 'pl',
        requirements: {
          documents: ['Passport', 'Belarus visa', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Belarus border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'by-lt-1',
        name: 'Kamenny Log-Krasnoye',
        fromCountry: 'by',
        toCountry: 'lt',
        requirements: {
          documents: ['Passport', 'Belarus visa', 'Schengen visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Belarus border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'no',
    name: 'Norway',
    continent: 'europe',
    neighbors: ['ru', 'fi', 'se'],
    borderCrossings: [
      {
        id: 'no-se-1',
        name: 'Svinesund',
        fromCountry: 'no',
        toCountry: 'se',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Bridge crossing', 'Toll fees apply', 'Customs inspection']
        },
        status: 'open',
        waitTime: 20,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'no-fi-1',
        name: 'Kilpisjärvi-Raja-Jooseppi',
        fromCountry: 'no',
        toCountry: 'fi',
        requirements: {
          documents: ['Passport', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Winter equipment required'],
          restrictions: ['Arctic crossing', 'Weather dependent', 'Limited services']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'no-ru-1',
        name: 'Storskog-Borisoglebsky',
        fromCountry: 'no',
        toCountry: 'ru',
        requirements: {
          documents: ['Passport', 'Norwegian visa', 'Russian visa', 'Special border zone permit'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Arctic border', 'Limited access', 'Customs inspection']
        },
        status: 'restricted',
        waitTime: 180,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'se',
    name: 'Sweden',
    continent: 'europe',
    neighbors: ['no', 'fi', 'dk'],
    borderCrossings: [
      {
        id: 'se-no-1',
        name: 'Svinesund',
        fromCountry: 'se',
        toCountry: 'no',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Bridge crossing', 'Toll fees apply', 'Customs inspection']
        },
        status: 'open',
        waitTime: 20,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'se-dk-1',
        name: 'Öresund Bridge',
        fromCountry: 'se',
        toCountry: 'dk',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Bridge toll payment'],
          restrictions: ['Bridge and tunnel crossing', 'Toll fees apply', 'Customs inspection']
        },
        status: 'open',
        waitTime: 30,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'se-fi-1',
        name: 'Tornio-Haparanda',
        fromCountry: 'se',
        toCountry: 'fi',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['River border crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 15,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'fi',
    name: 'Finland',
    continent: 'europe',
    neighbors: ['se', 'no', 'ru'],
    borderCrossings: [
      {
        id: 'fi-ru-1',
        name: 'Vaalimaa-Nuijamaa',
        fromCountry: 'fi',
        toCountry: 'ru',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Russian visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection certificate'],
          restrictions: ['Customs inspection', 'Commercial vehicle queues', 'Limited hours']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'fi-no-1',
        name: 'Raja-Jooseppi-Kilpisjärvi',
        fromCountry: 'fi',
        toCountry: 'no',
        requirements: {
          documents: ['Passport', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Winter equipment required'],
          restrictions: ['Arctic crossing', 'Weather dependent', 'Limited services']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'fi-se-1',
        name: 'Tornio-Haparanda',
        fromCountry: 'fi',
        toCountry: 'se',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['River border crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 15,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'ee',
    name: 'Estonia',
    continent: 'europe',
    neighbors: ['ru', 'lv'],
    borderCrossings: [
      {
        id: 'ee-ru-1',
        name: 'Narva-Ivangorod',
        fromCountry: 'ee',
        toCountry: 'ru',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Russian visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical inspection'],
          restrictions: ['Border bridge crossing', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'ee-lv-1',
        name: 'Ikla-Ainaži',
        fromCountry: 'ee',
        toCountry: 'lv',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Coastal border crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 20,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'lv',
    name: 'Latvia',
    continent: 'europe',
    neighbors: ['ee', 'ru', 'lt', 'by'],
    borderCrossings: [
      {
        id: 'lv-ru-1',
        name: 'Terehova-Buraki',
        fromCountry: 'lv',
        toCountry: 'ru',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Russian visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU compliance documents'],
          restrictions: ['Customs inspection', 'Commercial traffic', 'Seasonal variations']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'lv-ee-1',
        name: 'Ainaži-Ikla',
        fromCountry: 'lv',
        toCountry: 'ee',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Coastal border crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 20,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'lv-lt-1',
        name: 'Grenctāle-Salociai',
        fromCountry: 'lv',
        toCountry: 'lt',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Baltic crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 15,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'lv-by-1',
        name: 'Silene-Paternieki',
        fromCountry: 'lv',
        toCountry: 'by',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Belarus visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Belarus border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'lt',
    name: 'Lithuania',
    continent: 'europe',
    neighbors: ['lv', 'by', 'pl', 'ru'],
    borderCrossings: [
      {
        id: 'lt-pl-1',
        name: 'Kalvarija-Budzisko',
        fromCountry: 'lt',
        toCountry: 'pl',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['EU internal border', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 25,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'lt-lv-1',
        name: 'Salociai-Grenctāle',
        fromCountry: 'lt',
        toCountry: 'lv',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Baltic crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 15,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'lt-by-1',
        name: 'Šalčininkai-Beniakoni',
        fromCountry: 'lt',
        toCountry: 'by',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Belarus visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Belarus border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'lt-ru-1',
        name: 'Kybartai-Chernyshevskoye',
        fromCountry: 'lt',
        toCountry: 'ru',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Russian visa', 'Special border permit'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['Kaliningrad border', 'Customs inspection', 'Limited access']
        },
        status: 'restricted',
        waitTime: 180,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'pl',
    name: 'Poland',
    continent: 'europe',
    neighbors: ['de', 'cz', 'sk', 'ua', 'by', 'lt', 'ru'],
    borderCrossings: [
      {
        id: 'pl-de-1',
        name: 'Świecko-Frankfurt (Oder)',
        fromCountry: 'pl',
        toCountry: 'de',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Oder river crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pl-cz-1',
        name: 'Cieszyn-Český Těšín',
        fromCountry: 'pl',
        toCountry: 'cz',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Olza river crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 30,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pl-sk-1',
        name: 'Chyżne-Trstená',
        fromCountry: 'pl',
        toCountry: 'sk',
        requirements: {
          documents: ['Passport or national ID', 'Schengen area compliance'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'EU technical standards'],
          restrictions: ['Mountain crossing', 'Customs inspection', 'Commercial traffic']
        },
        status: 'open',
        waitTime: 40,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pl-ua-1',
        name: 'Korczowa-Krakovets',
        fromCountry: 'pl',
        toCountry: 'ua',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Ukrainian visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Ukraine border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 150,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pl-by-1',
        name: 'Terespol-Brest',
        fromCountry: 'pl',
        toCountry: 'by',
        requirements: {
          documents: ['Passport', 'Schengen visa', 'Belarus visa'],
          vehicleRequirements: ['Vehicle registration', 'International Insurance Green Card', 'Technical inspection'],
          restrictions: ['EU-Belarus border', 'Customs inspection', 'Document verification']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pl-lt-1',
        name: 'Budzisko-Kalvarija',
        fromCountry: 'pl',
        toCountry: 'lt',
   }
    ]  // This closes the borderCrossings array
  },   // This closes the Poland country object
  // Then Asian countries start here
  // Asian countries (including Thailand)
  // data/countries.ts - India section
{
  id: 'af',
  name: 'Afghanistan',
  continent: 'asia',
  neighbors: ['cn', 'ir', 'pk', 'tj', 'tm', 'uz'],
  borderCrossings: [
    // Afghanistan - China borders
    {
      id: 'af-cn-wakhjir',
      name: 'Wakhjir Pass',
      fromCountry: 'af',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Chinese visa', 'Military permit'],
        vehicleRequirements: ['Military escort required', 'Special vehicle permit', 'Security clearance'],
        restrictions: ['Highly restricted', 'Security concerns', 'Limited access']
      },
      status: 'closed',
      waitTime: 360,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Pakistan borders
    {
      id: 'af-pk-torkham',
      name: 'Torkham Border Crossing',
      fromCountry: 'af',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Pakistani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
        restrictions: ['Security escort required', 'Limited hours', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'af-pk-chaman',
      name: 'Chaman-Spin Boldak Border',
      fromCountry: 'af',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Pakistani visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security escort'],
        restrictions: ['High security area', 'Limited access', 'Customs inspection']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Iran borders
    {
      id: 'af-ir-islam-qala',
      name: 'Islam Qala-Dogharoun Border',
      fromCountry: 'af',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert driving permit'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'af-ir-milak',
      name: 'Milak-Zaranj Border',
      fromCountry: 'af',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Off-road capability'],
        restrictions: ['Remote area', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Tajikistan borders
    {
      id: 'af-tj-nizhny-pyanj',
      name: 'Nizhny Pyanj-Bridge of Friendship',
      fromCountry: 'af',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border permit'],
        restrictions: ['Bridge crossing', 'Security checks', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'af-tj-shir-khan',
      name: 'Shir Khan Bandar-Border',
      fromCountry: 'af',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferry ticket'],
        restrictions: ['River crossing', 'Ferry required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Turkmenistan borders
    {
      id: 'af-tm-torghundi',
      name: 'Torghundi-Border',
      fromCountry: 'af',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert permit'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Limited services']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'af-tm-aqina',
      name: 'Aqina-Border',
      fromCountry: 'af',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
        restrictions: ['Remote border', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 150,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Uzbekistan borders
    {
      id: 'af-uz-hairatan',
      name: 'Hairatan-Termez Border',
      fromCountry: 'af',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferry ticket'],
        restrictions: ['Amu Darya river crossing', 'Ferry required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'np',
  name: 'Nepal',
  continent: 'asia',
  neighbors: ['cn', 'in'],
  borderCrossings: [
    // Nepal - China borders
    {
      id: 'np-cn-kodari',
      name: 'Zhangmu-Kodari Border',
      fromCountry: 'np',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Nepal visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Subject to weather conditions', 'Customs inspection', 'Currency declaration']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'np-cn-rasuwa',
      name: 'Gyirong-Rasuwa Border',
      fromCountry: 'np',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Nepal visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['High altitude crossing', 'Weather dependent', 'Limited facilities']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    // Nepal - India borders
    {
      id: 'np-in-ruknu',
      name: 'Raxaul-Birgunj Border',
      fromCountry: 'np',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Nepal visa on arrival for Indians', 'Indian visa for Nepalis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Open to all traffic', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'np-in-sunauli',
      name: 'Sunauli-Bhairahawa Border',
      fromCountry: 'np',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Nepal visa on arrival for Indians', 'Indian visa for Nepalis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major trade route', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'np-in-kakarbhitta',
      name: 'Kakarbhitta-Panitanki Border',
      fromCountry: 'np',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Nepal visa on arrival for Indians', 'Indian visa for Nepalis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Eastern border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'np-in-mahendranagar',
      name: 'Mahendranagar-Banbassa Border',
      fromCountry: 'np',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Nepal visa on arrival for Indians', 'Indian visa for Nepalis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Western border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'bt',
  name: 'Bhutan',
  continent: 'asia',
  neighbors: ['cn', 'in'],
  borderCrossings: [
    // Bhutan - China borders
    {
      id: 'bt-cn-tulung',
      name: 'Tulung La Pass',
      fromCountry: 'bt',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Bhutan visa', 'Chinese visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Limited access']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    // Bhutan - India borders
    {
      id: 'bt-in-phuentsholing',
      name: 'Phuentsholing-Jaigaon Border',
      fromCountry: 'bt',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bhutan visa for non-Indians', 'Indian visa for non-Bhutanese'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Main trading border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bt-in-samdrup',
      name: 'Samdrup Jongkhar-Border',
      fromCountry: 'bt',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bhutan visa for non-Indians', 'Indian visa for non-Bhutanese'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Eastern border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bt-in-geylegphug',
      name: 'Geylegphug-Border',
      fromCountry: 'bt',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bhutan visa for non-Indians', 'Indian visa for non-Bhutanese'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Central border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'bd',
  name: 'Bangladesh',
  continent: 'asia',
  neighbors: ['in', 'mm'],
  borderCrossings: [
    // Bangladesh - India borders
    {
      id: 'bd-in-petrapole',
      name: 'Petrapole-Benapole Border',
      fromCountry: 'bd',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bangladesh visa for non-Indians', 'Indian visa for non-Bangladeshis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major trading border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bd-in-dawki',
      name: 'Dawki-Tamabil Border',
      fromCountry: 'bd',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bangladesh visa for non-Indians', 'Indian visa for non-Bangladeshis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Hilly terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bd-in-hili',
      name: 'Hili-Border',
      fromCountry: 'bd',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bangladesh visa for non-Indians', 'Indian visa for non-Bangladeshis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northern border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    // Bangladesh - Myanmar borders
    {
      id: 'bd-mm-nathong',
      name: 'Nathong-River Border',
      fromCountry: 'bd',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Bangladesh visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['River crossing', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bd-mm-teknaf',
      name: 'Teknaf-Maungdaw Border',
      fromCountry: 'bd',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Bangladesh visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'mm',
  name: 'Myanmar',
  continent: 'asia',
  neighbors: ['bd', 'cn', 'in', 'la', 'th'],
  borderCrossings: [
    // Myanmar - Bangladesh borders
    {
      id: 'mm-bd-nathong',
      name: 'Nathong-River Border',
      fromCountry: 'mm',
      toCountry: 'bd',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Bangladesh visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['River crossing', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'mm-bd-teknaf',
      name: 'Maungdaw-Teknaf Border',
      fromCountry: 'mm',
      toCountry: 'bd',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Bangladesh visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    // Myanmar - China borders
    {
      id: 'mm-cn-ruili',
      name: 'Ruili-Muse Border',
      fromCountry: 'mm',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Chinese visa', 'Border permit'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Chinese insurance'],
        restrictions: ['Commercial vehicles require special permits', 'Customs inspection', 'Restricted hours']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'mm-cn-wanding',
      name: 'Wanding-Jiegao Border',
      fromCountry: 'mm',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Limited to certain vehicle types', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    // Myanmar - India borders
    {
      id: 'mm-in-moreh',
      name: 'Moreh-Tamu Border',
      fromCountry: 'mm',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Indian visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northwestern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'mm-in-zokhawthar',
      name: 'Zokhawthar-Rih Border',
      fromCountry: 'mm',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Indian visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northeastern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    },
    // Myanmar - Laos borders
    {
      id: 'mm-la-kenghat',
      name: 'Kenghat-Kentung Border',
      fromCountry: 'mm',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountainous terrain', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    // Myanmar - Thailand borders
    {
      id: 'mm-th-maesot',
      name: 'Myawaddy-Mae Sot Border',
      fromCountry: 'mm',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'mm-th-ranong',
      name: 'Kawthoung-Ranong Border',
      fromCountry: 'mm',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Ferry service']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'la',
  name: 'Laos',
  continent: 'asia',
  neighbors: ['cn', 'mm', 'th', 'vn', 'kh'],
  borderCrossings: [
    // Laos - China borders
    {
      id: 'la-cn-boten',
      name: 'Boten-Mohan Border',
      fromCountry: 'la',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Currency declaration', 'Agricultural restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'la-cn-dengta',
      name: 'Deng Ta-Mengla Border',
      fromCountry: 'la',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Limited hours', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    // Laos - Myanmar borders
    {
      id: 'la-mm-kenghat',
      name: 'Kenghat-Kentung Border',
      fromCountry: 'la',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountainous terrain', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    // Laos - Thailand borders
    {
      id: 'la-th-friendship1',
      name: 'First Thai-Lao Friendship Bridge',
      fromCountry: 'la',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Toll fee required']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'la-th-friendship2',
      name: 'Second Thai-Lao Friendship Bridge',
      fromCountry: 'la',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Toll fee required']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    },
    // Laos - Vietnam borders
    {
      id: 'la-vn-nambo',
      name: 'Nam Phao-Cau Treo Border',
      fromCountry: 'la',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountain pass', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'la-vn-laobao',
      name: 'Lao Bao-Dansavanh Border',
      fromCountry: 'la',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['International checkpoint', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    },
    // Laos - Cambodia borders
    {
      id: 'la-kh-voeungkham',
      name: 'Voeung Kham-Dong Kralor Border',
      fromCountry: 'la',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['River crossing', 'Ferry service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'la-kh-nongnok',
      name: 'Nong Nok Khiene-Trapeang Kriel Border',
      fromCountry: 'la',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Remote border', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'th',
  name: 'Thailand',
  continent: 'asia',
  neighbors: ['mm', 'la', 'kh', 'my'],
  borderCrossings: [
    // Thailand - Myanmar borders
    {
      id: 'th-mm-maesot',
      name: 'Mae Sot-Myawaddy Border',
      fromCountry: 'th',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'th-mm-ranong',
      name: 'Ranong-Kawthoung Border',
      fromCountry: 'th',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Ferry service']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    // Thailand - Laos borders
    {
      id: 'th-la-friendship1',
      name: 'First Thai-Lao Friendship Bridge',
      fromCountry: 'th',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Toll fee required']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'th-la-friendship2',
      name: 'Second Thai-Lao Friendship Bridge',
      fromCountry: 'th',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Toll fee required']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    },
    // Thailand - Cambodia borders
    {
      id: 'th-kh-aranyaprathet',
      name: 'Aranyaprathet-Poipet Border',
      fromCountry: 'th',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'th-kh-hatlek',
      name: 'Hat Lek-Cham Yeam Border',
      fromCountry: 'th',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    },
    // Thailand - Malaysia borders
    {
      id: 'th-my-sadao',
      name: 'Sadao-Bukit Kayu Hitam Border',
      fromCountry: 'th',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major southern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'th-my-wangprachan',
      name: 'Wang Prachan-Pengkalan Hulu Border',
      fromCountry: 'th',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'vn',
  name: 'Vietnam',
  continent: 'asia',
  neighbors: ['cn', 'la', 'kh'],
  borderCrossings: [
    // Vietnam - China borders
    {
      id: 'vn-cn-hekou',
      name: 'Hekou-Lao Cai Border',
      fromCountry: 'vn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Chinese visa'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Vietnamese insurance'],
        restrictions: ['Commercial vehicles require permits', 'Restricted hours', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'vn-cn-pingxiang',
      name: 'Pingxiang-Dong Dang Border',
      fromCountry: 'vn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Chinese visa', 'Border pass'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Mountain crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'vn-cn-dongxing',
      name: 'Dongxing-Mong Cai Border',
      fromCountry: 'vn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Coastal permit'],
        restrictions: ['Coastal crossing', 'Tidal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    // Vietnam - Laos borders
    {
      id: 'vn-la-cautreo',
      name: 'Cau Treo-Nam Phao Border',
      fromCountry: 'vn',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountain pass', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'vn-la-laobao',
      name: 'Lao Bao-Dansavanh Border',
      fromCountry: 'vn',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['International checkpoint', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    },
    // Vietnam - Cambodia borders
    {
      id: 'vn-kh-mocbai',
      name: 'Moc Bai-Bavet Border',
      fromCountry: 'vn',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'vn-kh-vinhxuong',
      name: 'Vinh Xuong-Kaam Samnor Border',
      fromCountry: 'vn',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mekong River crossing', 'Ferry service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'kh',
  name: 'Cambodia',
  continent: 'asia',
  neighbors: ['la', 'th', 'vn'],
  borderCrossings: [
    // Cambodia - Laos borders
    {
      id: 'kh-la-dongkralor',
      name: 'Dong Kralor-Voeung Kham Border',
      fromCountry: 'kh',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['River crossing', 'Ferry service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'kh-la-trapeangkriel',
      name: 'Trapeang Kriel-Nong Nok Khiene Border',
      fromCountry: 'kh',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Remote border', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    },
    // Cambodia - Thailand borders
    {
      id: 'kh-th-poipet',
      name: 'Poipet-Aranyaprathet Border',
      fromCountry: 'kh',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'kh-th-chamyeam',
      name: 'Cham Yeam-Hat Lek Border',
      fromCountry: 'kh',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    },
    // Cambodia - Vietnam borders
    {
      id: 'kh-vn-bavet',
      name: 'Bavet-Moc Bai Border',
      fromCountry: 'kh',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'kh-vn-kaamsamnor',
      name: 'Kaam Samnor-Vinh Xuong Border',
      fromCountry: 'kh',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mekong River crossing', 'Ferry service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'my',
  name: 'Malaysia',
  continent: 'asia',
  neighbors: ['th', 'bn', 'id'],
  borderCrossings: [
    // Malaysia - Thailand borders
    {
      id: 'my-th-bukitkayu',
      name: 'Bukit Kayu Hitam-Sadao Border',
      fromCountry: 'my',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Malaysia visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major southern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'my-th-pengkalan',
      name: 'Pengkalan Hulu-Wang Prachan Border',
      fromCountry: 'my',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Malaysia visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    // Malaysia - Brunei borders
    {
      id: 'my-bn-sungaitujuh',
      name: 'Sungai Tujoh Border Crossing',
      fromCountry: 'my',
      toCountry: 'bn',
      requirements: {
        documents: ['Passport', 'Malaysia visa for non-Bruneians', 'Brunei visa for non-Malaysians'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'my-bn-ulam',
      name: 'Ulam Border Crossing',
      fromCountry: 'my',
      toCountry: 'bn',
      requirements: {
        documents: ['Passport', 'Malaysia visa for non-Bruneians', 'Brunei visa for non-Malaysians'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Inland border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    },
    // Malaysia - Indonesia borders
    {
      id: 'my-id-tebedu',
      name: 'Tebedu-Entikong Border',
      fromCountry: 'my',
      toCountry: 'id',
      requirements: {
        documents: ['Passport', 'Malaysia visa', 'Indonesia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Borneo island crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'my-id-padangbesar',
      name: 'Padang Besar-Bukit Kayu Hitam Border',
      fromCountry: 'my',
      toCountry: 'id',
      requirements: {
        documents: ['Passport', 'Malaysia visa', 'Indonesia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    }
  ]
},
  {
  id: 'kg',
  name: 'Kyrgyzstan',
  code: 'KG',
  continent: 'Asia',
  neighbors: ['kz', 'cn', 'tj', 'uz'],
  borderCrossings: [
    {
      id: 'kg-kz-1',
      name: 'Korday Border Crossing',
      fromCountry: 'kg',
      toCountry: 'kz',
      requirements: {
        visa: false,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 60,
      status: 'open',
      crossingType: 'road'
    },
    {
      id: 'kg-kz-2',
      name: 'Chaldovar Border Crossing',
      fromCountry: 'kg',
      toCountry: 'kz',
      requirements: {
        visa: false,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 45,
      status: 'open',
      crossingType: 'road'
    }
  ]
},
   {      
    id: 'kz',
    name: 'Kazakhstan',
    code: 'KZ',
    continent: 'Asia',
    neighbors: ['ru', 'cn', 'kg', 'uz', 'tm'],
    borderCrossings: [
      {
        id: 'kz-ru-1',
        name: 'Oral Border Crossing',
        fromCountry: 'kz',
        toCountry: 'ru',
        requirements: {
          visa: true,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: false
        },
        waitTime: 45,
        status: 'open',
        crossingType: 'road'
      },
      {
        id: 'kz-ru-2',
        name: 'Petropavl Border Crossing',
        fromCountry: 'kz',
        toCountry: 'ru',
        requirements: {
          visa: true,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: false
        },
        waitTime: 30,
        status: 'open',
        crossingType: 'road'
      },
      {
        id: 'kz-cn-1',
        name: 'Khorgos Gateway',
        fromCountry: 'kz',
        toCountry: 'cn',
        requirements: {
          visa: true,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: true
        },
        waitTime: 90,
        status: 'open',
        crossingType: 'road'
      },
      {
        id: 'kz-cn-2',
        name: 'Bakhty Border Crossing',
        fromCountry: 'kz',
        toCountry: 'cn',
        requirements: {
          visa: true,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: true
        },
        waitTime: 120,
        status: 'open',
        crossingType: 'road'
      },
      {
        id: 'kz-kg-1',
        name: 'Korday Border Crossing',
        fromCountry: 'kz',
        toCountry: 'kg',
        requirements: {
          visa: false,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: false
        },
        waitTime: 60,
        status: 'open',
        crossingType: 'road'
      },
      {
        id: 'kz-kg-2',
        name: 'Chaldovar Border Crossing',
        fromCountry: 'kz',
        toCountry: 'kg',
        requirements: {
          visa: false,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: false
        },
        waitTime: 45,
        status: 'open',
        crossingType: 'road'
      },
      {
        id: 'kz-uz-1',
        name: 'Gisht Kuprik Border Crossing',
        fromCountry: 'kz',
        toCountry: 'uz',
        requirements: {
          visa: false,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: false
        },
        waitTime: 75,
        status: 'open',
        crossingType: 'road'
      },
      {
        id: 'kz-uz-2',
        name: 'Saryagash Border Crossing',
        fromCountry: 'kz',
        toCountry: 'uz',
        requirements: {
          visa: false,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: false
        },
        waitTime: 60,
        status: 'open',
        crossingType: 'road'
      },
            {
        id: 'kz-tm-1',
        name: 'Beyneu Border Crossing',
        fromCountry: 'kz',
        toCountry: 'tm',
        requirements: {
          visa: true,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: true
        },
        waitTime: 120,
        status: 'open',
        crossingType: 'road'
      },
      {
        id: 'kz-tm-2',
        name: 'Zhibek Zholy Border Crossing',
        fromCountry: 'kz',
        toCountry: 'tm',
        requirements: {
          visa: true,
          passport: true,
          vehiclePermit: true,
          customsDeclaration: true,
          covidTest: true
        },
        waitTime: 90,
        status: 'open',
        crossingType: 'road'
      }
    ]
  },
    {
    id: 'pk',
    name: 'Pakistan',
    continent: 'asia',
    neighbors: ['af', 'cn', 'in', 'ir'],
    borderCrossings: [
      {
        id: 'pk-af-torkham',
        name: 'Torkham Border Crossing',
        fromCountry: 'pk',
        toCountry: 'af',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Afghan visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
          restrictions: ['Security escort required', 'Limited hours', 'Customs inspection']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-af-chaman',
        name: 'Chaman-Spin Boldak Border',
        fromCountry: 'pk',
        toCountry: 'af',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Afghan visa', 'Special permit'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security escort'],
          restrictions: ['High security area', 'Limited access', 'Customs inspection']
        },
        status: 'restricted',
        waitTime: 180,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-cn-khunjerab',
        name: 'Khunjerab Pass',
        fromCountry: 'pk',
        toCountry: 'cn',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Chinese visa'],
          vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
          restrictions: ['High altitude pass', 'Seasonal closure', 'Customs inspection']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-cn-sost',
        name: 'Karakoram Highway - Sost',
        fromCountry: 'pk',
        toCountry: 'cn',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Chinese visa', 'Mountain permit'],
          vehicleRequirements: ['4x4 vehicle recommended', 'Winter tires', 'High altitude insurance'],
          restrictions: ['World highest border crossing', 'Weather dependent', 'Limited services']
        },
        status: 'open',
        waitTime: 180,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-in-wagah',
        name: 'Wagah-Attari Border',
        fromCountry: 'pk',
        toCountry: 'in',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Indian visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
          restrictions: ['Ceremonial border closing daily', 'No photography during ceremony', 'Customs inspection']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-in-munabao',
        name: 'Munabao-Khokhrapar Rail Crossing',
        fromCountry: 'pk',
        toCountry: 'in',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Indian visa'],
          vehicleRequirements: [],
          restrictions: ['Rail transport only', 'Limited passenger service', 'Customs inspection']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-ir-taftan',
        name: 'Taftan-Mirjaveh Border',
        fromCountry: 'pk',
        toCountry: 'ir',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Iranian visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert driving permit'],
          restrictions: ['Desert crossing', 'Extreme temperatures', 'Customs inspection']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-ir-kohmak',
        name: 'Kohmak Border Crossing',
        fromCountry: 'pk',
        toCountry: 'ir',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Iranian visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain driving permit'],
          restrictions: ['Mountainous terrain', 'Limited facilities', 'Customs inspection']
        },
        status: 'open',
        waitTime: 75,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
    id: 'in',
    name: 'India',
    continent: 'asia',
    neighbors: ['bd', 'bt', 'cn', 'mm', 'np', 'pk'],
    borderCrossings: [
      {
        id: 'in-pk-wagah',
        name: 'Wagah-Attari Border',
        fromCountry: 'in',
        toCountry: 'pk',
        requirements: {
          documents: ['Passport', 'Indian visa', 'Pakistani visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
          restrictions: ['Ceremonial border closing daily', 'No photography during ceremony', 'Customs inspection']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'in-pk-munabao',
        name: 'Munabao-Khokhrapar Rail Crossing',
        fromCountry: 'in',
        toCountry: 'pk',
        requirements: {
          documents: ['Passport', 'Indian visa', 'Pakistani visa'],
          vehicleRequirements: [],
          restrictions: ['Rail transport only', 'Limited passenger service', 'Customs inspection']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      }
    ]
  },
    // China borders
    {
      id: 'in-cn-nathula',
      name: 'Nathu La Pass',
      fromCountry: 'in', 
      toCountryId: 'cn',
      requirements: {
        visa: true,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: true
      },
      waitTime: 120,
      status: 'open',
      crossingType: 'road'
    },
    {
      id: 'in-cn-shipkila',
      name: 'Shipki La Pass',
      fromCountry: 'in', 
      toCountryId: 'cn',
      requirements: {
        visa: true,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: true
      },
      waitTime: 90,
      status: 'open',
      crossingType: 'road'
    },
    // Nepal borders
    {
      id: 'in-np-ruknu',
      name: 'Raxaul-Birgunj Border',
      fromCountry: 'in', 
      toCountryId: 'np',
      requirements: {
        visa: false,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 30,
      status: 'open',
      crossingType: 'road'
    },
    {
      id: 'in-np-sunauli',
      name: 'Sunauli-Bhairahawa Border',
      fromCountry: 'in', 
      toCountryId: 'np',
      requirements: {
        visa: false,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 25,
      status: 'open',
      crossingType: 'road'
    },
    // Bhutan borders
    {
      id: 'in-bt-phuentsholing',
      name: 'Phuentsholing-Jaigaon Border',
      fromCountry: 'in', 
      toCountryId: 'bt',
      requirements: {
        visa: false,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 20,
      status: 'open',
      crossingType: 'road'
    },
    {
      id: 'in-bt-samdrup',
      name: 'Samdrup Jongkhar-Border',
      fromCountry: 'in', 
      toCountryId: 'bt',
      requirements: {
        visa: false,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 15,
      status: 'open',
      crossingType: 'road'
    },
    // Bangladesh borders
    {
      id: 'in-bd-petrapole',
      name: 'Petrapole-Benapole Border',
      fromCountry: 'in', 
      toCountryId: 'bd',
      requirements: {
        visa: true,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 60,
      status: 'open',
      crossingType: 'road'
    },
    {
      id: 'in-bd-dawki',
      name: 'Dawki-Tamabil Border',
      fromCountry: 'in', 
      toCountryId: 'bd',
      requirements: {
        visa: true,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 45,
      status: 'open',
      crossingType: 'road'
    },
    // Myanmar borders
    {
      id: 'in-mm-moreh',
      name: 'Moreh-Tamu Border',
      fromCountry: 'in', 
      toCountryId: 'mm',
      requirements: {
        visa: true,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: true
      },
      waitTime: 90,
      status: 'open',
      crossingType: 'road'
    },
 {
    id: 'cn',
  name: 'China',
  neighbors: ['mm', 'la', 'vn', 'in', 'np', 'bt', 'pk', 'af', 'tj', 'kg', 'kz', 'mn', 'ru'],
  borders: [
    // China - Myanmar (2 crossings)
    {
      id: 'cn-mm-1',
      name: 'Ruili-Muse',
      fromCountry: 'cn',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Commercial vehicles only', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-mm-2',
      name: 'Wanding-Jiegao',
      fromCountry: 'cn',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Limited to certain vehicle types', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },

    // China - Laos (2 crossings)
    {
      id: 'cn-la-1',
      name: 'Mohan-Boten',
      fromCountry: 'cn',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Laos visa on arrival'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Currency declaration', 'Agricultural restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-la-2',
      name: 'Mengla-Deng Ta',
      fromCountry: 'cn',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Limited hours', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },

    // China - Vietnam (3 crossings)
    {
      id: 'cn-vn-1',
      name: 'Hekou-Lao Cai',
      fromCountry: 'cn',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Vietnam visa'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Vietnamese insurance'],
        restrictions: ['Commercial vehicles require permits', 'Restricted hours', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-vn-2',
      name: 'Pingxiang-Dong Dang',
      fromCountry: 'cn',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Vietnam visa', 'Border pass'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Mountain crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-vn-3',
      name: 'Dongxing-Mong Cai',
      fromCountry: 'cn',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Coastal permit'],
        restrictions: ['Coastal crossing', 'Tidal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },

    // China - India (2 crossings)
    {
      id: 'cn-in-1',
      name: 'Nathu La Pass',
      fromCountry: 'cn',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Indian visa', 'Special permit'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Insurance'],
        restrictions: ['Only for commercial vehicles', 'Limited days', 'Heightened security']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-in-2',
      name: 'Shipkila Pass',
      fromCountry: 'cn',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Indian visa', 'Mountain permit'],
        vehicleRequirements: ['4x4 vehicle required', 'Winter equipment', 'High altitude insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Weather dependent']
      },
      status: 'closed',
      waitTime: 240,
      lastUpdated: '2024-01-15'
    },

    // China - Nepal (2 crossings)
    {
      id: 'cn-np-1',
      name: 'Zhangmu-Kodari',
      fromCountry: 'cn',
      toCountry: 'np',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Nepal visa on arrival'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Subject to weather conditions', 'Customs inspection', 'Currency declaration']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-np-2',
      name: 'Gyirong-Rasuwa',
      fromCountry: 'cn',
      toCountry: 'np',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Nepal visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['High altitude crossing', 'Weather dependent', 'Limited facilities']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },

    // China - Bhutan (1 crossing - limited due to terrain)
    {
      id: 'cn-bt-1',
      name: 'Tulung La Pass',
      fromCountry: 'cn',
      toCountry: 'bt',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Bhutan visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Limited access']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },

    // China - Pakistan (2 crossings)
    {
      id: 'cn-pk-1',
      name: 'Khunjerab Pass',
      fromCountry: 'cn',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Pakistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-pk-2',
      name: 'Karakoram Highway - Sost',
      fromCountry: 'cn',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Pakistan visa', 'Mountain permit'],
        vehicleRequirements: ['4x4 vehicle recommended', 'Winter tires', 'High altitude insurance'],
        restrictions: ['World highest border crossing', 'Weather dependent', 'Limited services']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: '2024-01-15'
    },

    // China - Afghanistan (1 crossing - limited due to security)
    {
      id: 'cn-af-1',
      name: 'Wakhjir Pass',
      fromCountry: 'cn',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Afghan visa', 'Military permit'],
        vehicleRequirements: ['Military escort required', 'Special vehicle permit', 'Security clearance'],
        restrictions: ['Highly restricted', 'Security concerns', 'Limited access']
      },
      status: 'closed',
      waitTime: 360,
      lastUpdated: '2024-01-15'
    },

    // China - Tajikistan (2 crossings)
    {
      id: 'cn-tj-1',
      name: 'Kulma Pass',
      fromCountry: 'cn',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Tajikistan visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Limited access']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-tj-2',
      name: 'Qolma Pass',
      fromCountry: 'cn',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['Pamir Mountains crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },

    // China - Kyrgyzstan (2 crossings)
    {
      id: 'cn-kg-1',
      name: 'Irkeshtam Pass',
      fromCountry: 'cn',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kyrgyzstan visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-kg-2',
      name: 'Torugart Pass',
      fromCountry: 'cn',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kyrgyzstan visa', 'Border permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['High altitude crossing', 'Seasonal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },

    // China - Kazakhstan (3 crossings)
    {
      id: 'cn-kz-1',
      name: 'Khorgos Pass',
      fromCountry: 'cn',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['One of the busiest crossings', 'Customs inspection', 'Commercial vehicle queues']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-kz-2',
      name: 'Dostyk-Alashankou',
      fromCountry: 'cn',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Major rail and road crossing', 'Customs inspection', 'Commercial traffic']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-kz-3',
      name: 'Bakhty-Tacheng',
      fromCountry: 'cn',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Steppe crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    },

    // China - Mongolia (3 crossings)
    {
      id: 'cn-mn-1',
      name: 'Erenhot-Zamyn-Üüd',
      fromCountry: 'cn',
      toCountry: 'mn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Mongolia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Desert crossing', 'Sand storms possible', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-mn-2',
      name: 'Takashiken-Bichigt',
      fromCountry: 'cn',
      toCountry: 'mn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Mongolia visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Gobi desert crossing', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-mn-3',
      name: 'Handagai-Mondy',
      fromCountry: 'cn',
      toCountry: 'mn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Mongolia visa', 'Border permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountainous terrain', 'Seasonal access', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },

    // China - Russia (3 crossings)
    {
      id: 'cn-ru-1',
      name: 'Manzhouli-Zabaikalsk',
      fromCountry: 'cn',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Russian insurance'],
        restrictions: ['Commercial vehicles common', 'Customs inspection', 'Long queues possible']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-ru-2',
      name: 'Suifenhe-Pogranichny',
      fromCountry: 'cn',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical certificate'],
        restrictions: ['Rail and road crossing', 'Customs inspection', 'Commercial traffic']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'cn-ru-3',
      name: 'Heihe-Blagoveshchensk',
      fromCountry: 'cn',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Russian visa', 'River crossing permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferry ticket'],
              restrictions: ['Amur river crossing', 'Ferry required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 150,
      lastUpdated: '2024-01-15' 
    }
    ]
  }
];