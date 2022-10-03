const array = [1, 'Gaurav', 5, 'Akshu', 07, 2680, 'Love You💖'];

function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

const result = getRandomItem(array);
console.log(result);