const cars = [
    { id: 1, destination: 'New York', mileage: 1000 },
    { id: 2, destination: 'London', mileage: 2000 },
];

export const getCars = () => cars;

export const addCar = (car) => cars.push(car);

export const updateCar = (id, car) => {
    const index = cars.findIndex((c) => c.id === id);
    if (index !== -1) cars[index] = car;
};
export const deleteCar = (id) => {
    const index = cars.findIndex((c) => c.id === id);
    if (index !== -1) cars.splice(index, 1);
};