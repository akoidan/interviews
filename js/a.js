/*
==== Just Falafs ====
      ~ Menu ~
Starters
dumplings, peanuts or salad
Mains
bento, sushi, pasta or rice
Desserts
apples, strawberries or cheese
*/


/**
 * Makes first letter uppercase
 * */
function capitilize(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
}

/**
 * Returns the intersection of 2 arrays
 */
function getIntersection(a) {
    return foodCategories[a].filter(value => -1 !== chefDishes.indexOf(value));
}

/**
 * Returns string representation of array [a,b,c,d] = 'a, b, d or c'
 * */
function separateOrComma(intersection) {
    const last = intersection.pop();
    return `${intersection.join(', ')} or ${last}`
}

/**
 * sdfa sdf
 * */
function printBusyMenu(foodCategories) {
    for (let a in foodCategories) {
        console.log(capitilize(a));
        let intersection = getIntersection(a);
        intersection.sort((a, b) =>  (foodPrerMins[a]  || 100 ) -  (foodPrerMins[b] ||  100));
        console.log(separateOrComma(intersection));
    }
}

/**
 * asdfasdf
 * */
function printSameOrderMenu(foodCategories) {
    for (let a in foodCategories) {
        console.log(capitilize(a));
        let intersection = getIntersection(a).reverse();
        console.log(separateOrComma(intersection));
    }
}

const foodCategories = {
    starters: ["peanuts", "bread", "salad", "dumplings"],
    mains: ["steak", "bento", "chicken", "pizza", "sandwich", "wrap", "sushi", "burger", "hotdog", "pasta", "burrito", "taco", "rice"],
    desserts: ["apples", "strawberries", "cheese", "pie", "icecream", "cake"]
};
const chefDishes = ["strawberries", "dumplings", "pasta", "rice", "apples", "salad", "peanuts", "cheese", "bento", "sushi"];
const isBusy = false;
const foodPrerMins = {
    'salad': 0.5, // 1
    'pasta': 4,
    'pizza': 8,
    'burger': 6,
    'dumplings': 6, // 1
    'strawberries': 10,
};

if (isBusy) {
    printBusyMenu(foodCategories);
} else {
    printSameOrderMenu(foodCategories);
}

