window.onload = function () {
  // Capturar o botão no nosso HTML e guardar em uma variável
  let button = document.querySelector('#start-race-btn');

  // Capturar os elementos que possuem a imagem do carro
  let car1 = document.querySelector('.car1');
  let car2 = document.querySelector('.car2');

  // Definir margem inicial dos carrinhos
  resetCarsPosition(car1, car2);

  // 1o parâmetro -> Qual o tipo do evento (string)
  // 2o parâmetro -> O que fazer quando o evento acontecer (function)
  button.addEventListener('click', function () {
    let currentCar1MarginLeft = parseInt(car1.style.marginLeft);
    car1.style.marginLeft = currentCar1MarginLeft + Math.random() * 100 + 'px';

    let currentCar2MarginLeft = parseInt(car2.style.marginLeft);
    car2.style.marginLeft = currentCar2MarginLeft + Math.random() * 100 + 'px';

    // Se o carro 1 chegou ao final da minha janela do navegador
    if (parseInt(car1.style.marginLeft) > window.innerWidth) {
      // Carro vermelho ganhou!!!
      alert('Carro VERMELHO ganhou a corrida!');
      resetCarsPosition(car1, car2);
    }
    if (parseInt(car2.style.marginLeft) > window.innerWidth) {
      alert('Carro VERDE ganhou a corrida!');
      resetCarsPosition(car1, car2);
    }
  });
}

function resetCarsPosition(car1, car2) {
  car1.style.marginLeft = '0px';
  car2.style.marginLeft = '0px';
}