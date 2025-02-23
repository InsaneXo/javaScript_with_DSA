// Traversing all element

const arr = [1, 2, 3, 5, 10, 30, 470, 39];

for (let i = 0; i < arr.length; i++) {
  console.log(`Array of ${i} index is ${arr[i]}`);
}

// Accessing an element

const accesingElement = (index) => {
  if ( index === arr.length && typeof parseInt(index) === "number" && index >= 0) {
    console.log(`Accessing an element of an array : ${arr[index]}`);
  }
  else{
    console.log("Please Enter Correct Value")
  }
};

accesingElement(30)
