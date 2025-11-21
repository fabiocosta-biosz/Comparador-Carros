const cars = [
  // TOYOTA (5)
  {
    brand: "Toyota",
    name: "Corolla 2.0",
    power: "177 cv",
    consumption: "10.5 km/l",
    pros: "Confiável, confortável",
    cons: "Pouco empolgante"
  },
  {
    brand: "Toyota",
    name: "Yaris 1.5",
    power: "110 cv",
    consumption: "12.5 km/l",
    pros: "Econômico, manutenção baixa",
    cons: "Desempenho limitado"
  },
  {
    brand: "Toyota",
    name: "Hilux 2.8",
    power: "204 cv",
    consumption: "9 km/l",
    pros: "Muito resistente",
    cons: "Conforto rígido"
  },
  {
    brand: "Toyota",
    name: "Supra MK4",
    power: "330 cv",
    consumption: "7 km/l",
    pros: "Icônico, potente",
    cons: "Difícil de achar"
  },
  {
    brand: "Toyota",
    name: "Prius Hybrid",
    power: "123 cv",
    consumption: "18 km/l",
    pros: "Muito econômico",
    cons: "Desempenho fraco"
  },

  // HONDA (5)
  {
    brand: "Honda",
    name: "Civic 2.0",
    power: "155 cv",
    consumption: "11 km/l",
    pros: "Dirigibilidade ótima",
    cons: "Seguro caro"
  },
  {
    brand: "Honda",
    name: "Fit 1.5",
    power: "116 cv",
    consumption: "13 km/l",
    pros: "Prático e econômico",
    cons: "Barulho interno"
  },
  {
    brand: "Honda",
    name: "City 1.5",
    power: "126 cv",
    consumption: "13 km/l",
    pros: "Confortável",
    cons: "Falta potência na estrada"
  },
  {
    brand: "Honda",
    name: "HR-V 1.8",
    power: "139 cv",
    consumption: "10 km/l",
    pros: "Ergonomia ótima",
    cons: "Motor fraco para o peso"
  },
  {
    brand: "Honda",
    name: "NSX",
    power: "573 cv",
    consumption: "7 km/l",
    pros: "Supercarro híbrido",
    cons: "Complexo de manter"
  },

  // VOLKSWAGEN (5)
  {
    brand: "Volkswagen",
    name: "Gol 1.6",
    power: "104 cv",
    consumption: "11 km/l",
    pros: "Manutenção barata",
    cons: "Interior simples"
  },
  {
    brand: "Volkswagen",
    name: "Golf GTI",
    power: "230 cv",
    consumption: "8 km/l",
    pros: "Muito divertido",
    cons: "Manutenção cara"
  },
  {
    brand: "Volkswagen",
    name: "Jetta GLI",
    power: "230 cv",
    consumption: "10 km/l",
    pros: "Rápido e confortável",
    cons: "Seguro caro"
  },
  {
    brand: "Volkswagen",
    name: "Polo 1.0 TSI",
    power: "128 cv",
    consumption: "13 km/l",
    pros: "Moderno e econômico",
    cons: "Acabamento básico"
  },
  {
    brand: "Volkswagen",
    name: "Tiguan 2.0",
    power: "220 cv",
    consumption: "8 km/l",
    pros: "Espaçoso e forte",
    cons: "Consumo alto"
  },

  // FIAT (5)
  {
    brand: "Fiat",
    name: "Argo 1.3",
    power: "109 cv",
    consumption: "11 km/l",
    pros: "Bom custo/benefício",
    cons: "Motor limitado"
  },
  {
    brand: "Fiat",
    name: "Uno Mille",
    power: "66 cv",
    consumption: "13 km/l",
    pros: "Muito econômico",
    cons: "Pouco seguro"
  },
  {
    brand: "Fiat",
    name: "Toro 2.0 TD",
    power: "170 cv",
    consumption: "10 km/l",
    pros: "Confortável",
    cons: "Preço alto"
  },
  {
    brand: "Fiat",
    name: "Fastback 1.3 Turbo",
    power: "185 cv",
    consumption: "12 km/l",
    pros: "Ágil e econômico",
    cons: "Suspensão dura"
  },
  {
    brand: "Fiat",
    name: "Strada 1.3",
    power: "109 cv",
    consumption: "12 km/l",
    pros: "Robusta",
    cons: "Acabamento simples"
  },

  // CHEVROLET (5)
  {
    brand: "Chevrolet",
    name: "Onix 1.0 Turbo",
    power: "116 cv",
    consumption: "12 km/l",
    pros: "Moderno",
    cons: "Recall polêmico"
  },
  {
    brand: "Chevrolet",
    name: "Cruze 1.4 Turbo",
    power: "153 cv",
    consumption: "11 km/l",
    pros: "Confortável",
    cons: "Desvalorização alta"
  },
  {
    brand: "Chevrolet",
    name: "Camaro SS",
    power: "461 cv",
    consumption: "6 km/l",
    pros: "Muito potente",
    cons: "Consumo altíssimo"
  },
  {
    brand: "Chevrolet",
    name: "S10 2.8",
    power: "200 cv",
    consumption: "9 km/l",
    pros: "Motor forte",
    cons: "Manutenção cara"
  },
  {
    brand: "Chevrolet",
    name: "Celta 1.0",
    power: "70 cv",
    consumption: "13 km/l",
    pros: "Barato",
    cons: "Básico demais"
  },

  // FORD (5)
  {
    brand: "Ford",
    name: "Fiesta 1.6",
    power: "128 cv",
    consumption: "11 km/l",
    pros: "Bom de dirigir",
    cons: "Peças caras"
  },
  {
    brand: "Ford",
    name: "Focus 2.0",
    power: "178 cv",
    consumption: "10 km/l",
    pros: "Dirigibilidade excelente",
    cons: "Desvalorização"
  },
  {
    brand: "Ford",
    name: "Ka 1.0",
    power: "85 cv",
    consumption: "13 km/l",
    pros: "Econômico",
    cons: "Interior simples"
  },
  {
    brand: "Ford",
    name: "Mustang GT",
    power: "466 cv",
    consumption: "6 km/l",
    pros: "Ícone americano",
    cons: "Difícil de manter"
  },
  {
    brand: "Ford",
    name: "Ranger 3.2",
    power: "200 cv",
    consumption: "9 km/l",
    pros: "Muito forte",
    cons: "Conforto duro"
  },

  // BMW (5)
  {
    brand: "BMW",
    name: "320i",
    power: "184 cv",
    consumption: "11 km/l",
    pros: "Equilíbrio perfeito",
    cons: "Manutenção cara"
  },
  {
    brand: "BMW",
    name: "X1",
    power: "192 cv",
    consumption: "10 km/l",
    pros: "SUV premium",
    cons: "Espaço limitado"
  },
  {
    brand: "BMW",
    name: "M3",
    power: "510 cv",
    consumption: "6 km/l",
    pros: "Extremamente esportivo",
    cons: "Seguro absurdo"
  },
  {
    brand: "BMW",
    name: "i3 elétrico",
    power: "170 cv",
    consumption: "Elétrico",
    pros: "Eficiente",
    cons: "Autonomia baixa"
  },
  {
    brand: "BMW",
    name: "X5",
    power: "340 cv",
    consumption: "7 km/l",
    pros: "Luxuoso",
    cons: "Manutenção altíssima"
  },

  // MERCEDES (5)
  {
    brand: "Mercedes",
    name: "C200",
    power: "204 cv",
    consumption: "11 km/l",
    pros: "Conforto premium",
    cons: "Peças caras"
  },
  {
    brand: "Mercedes",
    name: "A200",
    power: "163 cv",
    consumption: "12 km/l",
    pros: "Moderno",
    cons: "Espaço pequeno"
  },
  {
    brand: "Mercedes",
    name: "GLA 200",
    power: "163 cv",
    consumption: "11 km/l",
    pros: "Confortável",
    cons: "Suspensão dura"
  },
  {
    brand: "Mercedes",
    name: "AMG GT",
    power: "550 cv",
    consumption: "5 km/l",
    pros: "Superesportivo",
    cons: "Manutenção absurda"
  },
  {
    brand: "Mercedes",
    name: "S500",
    power: "435 cv",
    consumption: "7 km/l",
    pros: "Nível máximo de luxo",
    cons: "Altíssimo custo de manutenção"
  },

  // AUDI (5)
  {
    brand: "Audi",
    name: "A3 Sedan",
    power: "150 cv",
    consumption: "12 km/l",
    pros: "Elegante",
    cons: "Peças caras"
  },
  {
    brand: "Audi",
    name: "A4",
    power: "190 cv",
    consumption: "12 km/l",
    pros: "Tecnológico",
    cons: "Manutenção elevada"
  },
  {
    brand: "Audi",
    name: "Q3",
    power: "180 cv",
    consumption: "10 km/l",
    pros: "Confortável",
    cons: "Seguro caro"
  },
  {
    brand: "Audi",
    name: "RS3",
    power: "400 cv",
    consumption: "6 km/l",
    pros: "Muito forte",
    cons: "Peças muito caras"
  },
  {
    brand: "Audi",
    name: "TT",
    power: "230 cv",
    consumption: "9 km/l",
    pros: "Design icônico",
    cons: "Pouco espaço"
  },

  // PEUGEOT (5)
  {
    brand: "Peugeot",
    name: "208 1.6",
    power: "118 cv",
    consumption: "13 km/l",
    pros: "Acabamento bom",
    cons: "Desvalorização"
  },
  {
    brand: "Peugeot",
    name: "2008 1.6",
    power: "120 cv",
    consumption: "11 km/l",
    pros: "Confortável",
    cons: "Revisões caras"
  },
  {
    brand: "Peugeot",
    name: "308 GTI",
    power: "272 cv",
    consumption: "8 km/l",
    pros: "Muito forte",
    cons: "Peças raras"
  },
  {
    brand: "Peugeot",
    name: "3008",
    power: "165 cv",
    consumption: "10 km/l",
    pros: "Interior de luxo",
    cons: "Manutenção alta"
  },
  {
    brand: "Peugeot",
    name: "206 1.4",
    power: "82 cv",
    consumption: "12 km/l",
    pros: "Barato",
    cons: "Elétrica sensível"
  },

  // RENAULT (5)
  {
    brand: "Renault",
    name: "Sandero 1.6",
    power: "118 cv",
    consumption: "12 km/l",
    pros: "Espaçoso",
    cons: "Acabamento simples"
  },
  {
    brand: "Renault",
    name: "Duster 1.6",
    power: "120 cv",
    consumption: "10 km/l",
    pros: "Robusto",
    cons: "Acabamento pobre"
  },
  {
    brand: "Renault",
    name: "Kwid 1.0",
    power: "70 cv",
    consumption: "15 km/l",
    pros: "Muito econômico",
    cons: "Construção simples"
  },
  {
    brand: "Renault",
    name: "Clio 1.0",
    power: "76 cv",
    consumption: "15 km/l",
    pros: "Muito econômico",
    cons: "Interior básico"
  },
  {
    brand: "Renault",
    name: "Megane RS",
    power: "280 cv",
    consumption: "8 km/l",
    pros: "Hot hatch extremo",
    cons: "Manutenção cara"
  },

  // (CONTINUAÇÃO DA LISTA…)
];{
  brand: "BMW",
  models: [
    {
      name: "320i",
      horsepower: "184 cv",
      consumption: "11 km/l",
      pros: "conforto, acabamento premium",
      cons: "manutenção cara"
    },
    {
      name: "330i",
      horsepower: "258 cv",
      consumption: "10 km/l",
      pros: "desempenho forte, tecnologia",
      cons: "alto custo de peças"
    },
    {
      name: "M3 E46",
      horsepower: "343 cv",
      consumption: "7 km/l",
      pros: "clássico, dirigibilidade incrível",
      cons: "alto custo de manutenção"
    },
    {
      name: "X1",
      horsepower: "192 cv",
      consumption: "11 km/l",
      pros: "SUV confortável",
      cons: "poucos equipamentos nas versões base"
    },
    {
      name: "M4",
      horsepower: "431 cv",
      consumption: "6 km/l",
      pros: "altíssimo desempenho",
      cons: "manutenção muito alta"
    }
  ]
}{
  brand: "Audi",
  models: [
    {
      name: "A3 Sedan",
      horsepower: "150 cv",
      consumption: "13 km/l",
      pros: "econômico, moderno",
      cons: "acabamento simplificado"
    },
    {
      name: "A4",
      horsepower: "190 cv",
      consumption: "12 km/l",
      pros: "conforto, tecnologia",
      cons: "revisões caras"
    },
    {
      name: "RS3",
      horsepower: "400 cv",
      consumption: "6 km/l",
      pros: "super hatch de alta performance",
      cons: "manutenção muito elevada"
    },
    {
      name: "Q3",
      horsepower: "180 cv",
      consumption: "10 km/l",
      pros: "SUV premium confiável",
      cons: "equipamentos opcionais caros"
    },
    {
      name: "TT",
      horsepower: "230 cv",
      consumption: "11 km/l",
      pros: "design esportivo",
      cons: "espaço interno pequeno"
    }
  ]
}{
  brand: "Subaru",
  models: [
    {
      name: "Impreza WRX STI",
      horsepower: "310 cv",
      consumption: "7 km/l",
      pros: "AWD de alta performance",
      cons: "manutenção complexa"
    },
    {
      name: "BRZ",
      horsepower: "205 cv",
      consumption: "10 km/l",
      pros: "leve e divertido",
      cons: "motor fraco para alguns"
    },
    {
      name: "Forester XT",
      horsepower: "240 cv",
      consumption: "8 km/l",
      pros: "SUV rápido",
      cons: "alto consumo"
    },
    {
      name: "Legacy GT",
      horsepower: "250 cv",
      consumption: "8 km/l",
      pros: "confortável e forte",
      cons: "peças caras"
    },
    {
      name: "Impreza 2.0",
      horsepower: "150 cv",
      consumption: "11 km/l",
      pros: "confiável",
      cons: "acabamento simples"
    }
  ]
}{
  brand: "Mitsubishi",
  models: [
    {
      name: "Lancer Evolution X",
      horsepower: "295 cv",
      consumption: "6 km/l",
      pros: "AWD brutal, esportivo",
      cons: "peças difíceis"
    },
    {
      name: "Lancer GT",
      horsepower: "160 cv",
      consumption: "10 km/l",
      pros: "design bonito",
      cons: "desempenho mediano"
    },
    {
      name: "ASX",
      horsepower: "160 cv",
      consumption: "9 km/l",
      pros: "bom espaço",
      cons: "modelo antigo"
    },
    {
      name: "Pajero Full",
      horsepower: "200 cv",
      consumption: "6 km/l",
      pros: "robustez extrema",
      cons: "consumo alto"
    },
    {
      name: "Outlander",
      horsepower: "170 cv",
      consumption: "11 km/l",
      pros: "confortável",
      cons: "aceleração fraca"
    }
  ]
}{
  brand: "Volvo",
  models: [
    {
      name: "XC40",
      horsepower: "190 cv",
      consumption: "12 km/l",
      pros: "segurança máxima",
      cons: "manutenção cara"
    },
    {
      name: "XC60",
      horsepower: "254 cv",
      consumption: "10 km/l",
      pros: "SUV premium completo",
      cons: "alto custo"
    },
    {
      name: "S60",
      horsepower: "254 cv",
      consumption: "11 km/l",
      pros: "tecnologia avançada",
      cons: "desvalorização"
    },
    {
      name: "V40",
      horsepower: "180 cv",
      consumption: "12 km/l",
      pros: "hatch premium seguro",
      cons: "peças raras"
    },
    {
      name: "XC90",
      horsepower: "320 cv",
      consumption: "8 km/l",
      pros: "luxo extremo",
      cons: "custo altíssimo"
    }
  ]
}{
  brand: "Jaguar",
  models: [
    { name: "XE", horsepower: "250 cv", consumption: "10 km/l", pros: "luxo britânico", cons: "alto custo de manutenção" },
    { name: "XF", horsepower: "300 cv", consumption: "9 km/l", pros: "conforto e design", cons: "consumo elevado" },
    { name: "F-Type", horsepower: "450 cv", consumption: "6 km/l", pros: "esportivo clássico", cons: "uso caro no dia a dia" },
    { name: "E-Pace", horsepower: "246 cv", consumption: "10 km/l", pros: "SUV esportivo", cons: "espaço interno limitado" },
    { name: "I-Pace", horsepower: "400 cv", consumption: "elétrico", pros: "tecnologia elétrica avançada", cons: "preço alto" }
  ]
}{
  brand: "Porsche",
  models: [
    { name: "911 Carrera", horsepower: "379 cv", consumption: "8 km/l", pros: "esportivo icônico", cons: "muito caro" },
    { name: "Cayenne", horsepower: "340 cv", consumption: "7 km/l", pros: "SUV potente", cons: "consumo alto" },
    { name: "Panamera", horsepower: "330 cv", consumption: "8 km/l", pros: "sedã de luxo", cons: "preço alto" },
    { name: "Macan", horsepower: "252 cv", consumption: "9 km/l", pros: "SUV compacto premium", cons: "manutenção cara" },
    { name: "718 Cayman", horsepower: "300 cv", consumption: "9 km/l", pros: "desempenho esportivo", cons: "apenas 2 lugares" }
  ]
}{
  brand: "Mercedes",
  models: [
    {
      name: "C180",
      horsepower: "156 cv",
      consumption: "12 km/l",
      pros: "luxo, conforto",
      cons: "peças muito caras"
    },
    {
      name: "C200",
      horsepower: "204 cv",
      consumption: "11 km/l",
      pros: "bom desempenho",
      cons: "manutenção elevada"
    },
    {
      name: "AMG C63",
      horsepower: "476 cv",
      consumption: "5 km/l",
      pros: "som V8 icônico",
      cons: "uso caro no dia a dia"
    },
    {
      name: "GLA 200",
      horsepower: "163 cv",
      consumption: "12 km/l",
      pros: "SUV moderno",
      cons: "pouco espaço interno"
    },
    {
      name: "A45 AMG",
      horsepower: "381 cv",
      consumption: "6 km/l",
      pros: "hot hatch absurdamente forte",
      cons: "custo de manutenção"
    }
  ]
}
