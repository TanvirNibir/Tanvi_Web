const Car = require("./carLib");
const getAllCars = (req, res) => {
    const cars = Car.getAll();
    res.json(cars);
};

const createCar = (req, res) => {
    const { model, color, age } = req.body;

    const newCar = Car.addOne(model, color, age);

    if (newCar) {
        res.json(newCar);
    } else {
        res.status(500).json({ message: "Failed to create car" });
    }
};
const getCarById = (req, res) => {
    const carId = req.params.carId;
    const car = Car.findById(carId);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
};
