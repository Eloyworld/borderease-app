// data/countries.ts
export interface Country       {
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
      id: 'in-mm-zokhawthar',
      name: 'Zokhawthar-Rih Border',
      fromCountry: 'in', 
      toCountryId: 'mm',
      requirements: {
        visa: true,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: true
      },
      waitTime: 75,
      status: 'open',
      crossingType: 'road'
    }
  ]
},

  {
  id: 'cn',
  name: 'China',
  continent: 'asia',
  neighbors: ['mm', 'la', 'vn', 'in', 'np', 'bt', 'pk', 'af', 'tj', 'kg', 'kz', 'mn', 'ru'],
  borderCrossings: [
    // China - Myanmar (2 crossings)
    {
      id: 'cn-mm-1',
      name: 'Ruili-Muse',
      fromCountry: 'cn',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport with 6 months validity', 'Chinese visa', 'Border permit'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Chinese insurance'],
        restrictions: ['Commercial vehicles require special permits', 'Customs inspection', 'Restricted hours']
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

