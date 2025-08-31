let carArray = [];
let nextId = 1;

const addOne = (model, color, age) => {
    // Check if any parameter is empty or undefined
    if (!model || !color || !age) {
        return false
    }

    const newCar = {
        id: nextId++, // Adding one to the id number
        model,
        color,
        age
    };

    carArray.push(newCar); // Adds the car to the array
    return newCar; // Returns the new car object
}

const getAll = () => { return carArray; }

const findById = (id) => {
    const numericId = Number(id); // converts the ID to a number
    const car = carArray.find(item => item.id === numericId); // finds the car with the matching ID
    return car || false; // returns the found car or false if not found
}

const updateOneById = (id, updatedData) => {
    const car = findById(id);
    if (car) {
        // Update properties only if they are provided in the updatedData
        if (updatedData.model) car.model = updatedData.model;
        if (updatedData.color) car.color = updatedData.color;
        if (updatedData.age) car.age = updatedData.age;
        return car; // returns updated car object
    } else {
        return false; // Returns false if the car with provided ID is not found
    }
}

const deleteOneById = (id) => {
    const car = findById(id);
    if (car) {
        const initialLength = carArray.length;
        carArray = carArray.filter(car => car.id !== Number(id)); // Filters OUT the car with the matching ID
        return carArray.length < initialLength; // Returns true if the array length decreased, indicating success
    }
    return false; // Returns false if the car was not found
}

if (require.main === module) { // checks if the script is being run directly
    // require.amin refers to the module that started the application, so you don't have to comment this out before exporting
    //Add cars
    let result = addOne('Corolla', 'Red', 3);
    console.log(result);
    result = addOne('Civic', 'Blue', 2);
    console.log(result);

    console.log('getAll called: ', getAll());

    console.log('findByID called: ', findById(1));

    console.log('updateOneById called', updateOneById(1, { age: 4, color: 'Black' }));
    console.log('findById called after update', findById(1));

    console.log('deleteOnebyId called: ', deleteOneById(1));
    console.log('findById called after deletation: ', findById(1));
    console.log('getAll called after deletation: ', getAll());
}

// EXPORTING

const Car = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
};

module.exports = Car;