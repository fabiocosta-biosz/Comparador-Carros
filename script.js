const cars = [
  {
    name: "Toyota Corolla 2.0",
    power: "177 cv",
    consumption: "10.5 km/l (cidade)",
    price: "R$ 150.000",
    pros: "Confiável, confortável, boa revenda",
    cons: "Valor alto, pouco empolgante"
  },
  {
    name: "Honda Civic 2.0",
    power: "155 cv",
    consumption: "11 km/l (cidade)",
    price: "R$ 148.000",
    pros: "Dirigibilidade ótima, confiável",
    cons: "Valor das peças, seguro caro"
  },
  {
    name: "Volkswagen Golf GTI",
    power: "230 cv",
    consumption: "8 km/l (cidade)",
    price: "R$ 210.000",
    pros: "Muito rápido, ótimo acerto dinâmico",
    cons: "Manutenção cara, seguro alto"
  },
  {
    name: "Chevrolet Onix 1.0 Turbo",
    power: "116 cv",
    consumption: "12 km/l (cidade)",
    price: "R$ 100.000",
    pros: "Econômico, moderno",
    cons: "Interior simples"
  },
  {
    name: "Fiat Argo 1.3",
    power: "109 cv",
    consumption: "11 km/l (cidade)",
    price: "R$ 90.000",
    pros: "Bom de manutenção, barato",
    cons: "Motor fraco na estrada"
  }
];

// Preencher selects
function loadCars() {
  const car1 = document.getElementById("car1");
  const car2 = document.getElementById("car2");

  cars.forEach((car) => {
    const option1 = document.createElement("option");
    option1.value = car.name;
    option1.textContent = car.name;

    const option2 = option1.cloneNode(true);

    car1.appendChild(option1);
    car2.appendChild(option2);
  });
}

loadCars();

// Comparação
document.getElementById("compareBtn").addEventListener("click", () => {
  const carName1 = document.getElementById("car1").value;
  const carName2 = document.getElementById("car2").value;

  const carA = cars.find(c => c.name === carName1);
  const carB = cars.find(c => c.name === carName2);

  const result = document.getElementById("result");
  result.classList.remove("hidden");

  result.innerHTML = `
    <h2>Comparação</h2>

    <h3>${carA.name}</h3>
    <p><b>Potência:</b> ${carA.power}</p>
    <p><b>Consumo:</b> ${carA.consumption}</p>
    <p><b>Preço:</b> ${carA.price}</p>
    <p><b>Prós:</b> ${carA.pros}</p>
    <p><b>Contras:</b> ${carA.cons}</p>

    <hr>

    <h3>${carB.name}</h3>
    <p><b>Potência:</b> ${carB.power}</p>
    <p><b>Consumo:</b> ${carB.consumptions}</p>
    <p><b>Preço:</b> ${carB.price}</p>
    <p><b>Prós:</b> ${carB.pros}</p>
    <p><b>Contras:</b> ${carB.cons}</p>
  `;
});
