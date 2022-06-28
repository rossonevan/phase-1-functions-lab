function distanceFromHqInBlocks(someValue) {
    let result = Math.abs(someValue - 42);
    return result;
}

function distanceFromHqInFeet(someValue) {
    let result = distanceFromHqInBlocks(someValue) * 264;
    return result;
}

function distanceTravelledInFeet(someValue, someOtherValue) {
    let result = Math.abs(someValue - someOtherValue) * 264;
    return result;
}

function calculatesFarePrice(someValue, someOtherValue) {
    let distance = distanceTravelledInFeet(someValue, someOtherValue);
    let price;
    if (distance <= 400) {
        price = 0;
    }
    else if (distance >= 400 && distance <= 2000) {
        price = (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500) {
        price = 25;
    }
    else if (distance > 2500) {
        price = "cannot travel that far";
    }
    return price;
}