

//Задание 1
//У вас есть массив объектов
//Создайте на основе страрого массива новый массив объектов по образу:
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
const newcars = cars.map(car => {
    return { brand: car.brand, isDiesel: car.isDiesel }
});
console.log(newcars);
//Задание 2
//Создайте новый массив, где оставьте только машины с дизельным двигателем.
const carDisel = cars.filter(car => car.isDiesel == true);
console.log(carDisel);
//Задание 3
//Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const carNotDisel = cars.filter(car => !car.isDiesel);
console.log(carNotDisel);
//Задание 4
//Посчитайте общую стоимость всех машин не с дизельным двигателем.
const totalAmountNonDisel = carNotDisel.reduce((accum, car) => accum + car.price, 0);
console.log(totalAmountNonDisel);
//Задание 5
//Повысьте цену всех машин в массиве на 20%.^
cars.forEach(car => {
    car.price += car.price * 0.2;
});
console.log(cars);
//Задание 6
//Создайте новый массив, где все дизельные машины заменены на
//{ brand: "Tesla", price: 25000, isDiesel: false }
const newCars = cars.slice().map(car => {
    if (car.isDiesel) {
      return { brand: "Tesla", price: 25000, isDiesel: false };
    }
    return car;
  });

  console.log(newCars);