// Insertion the element.

const arr = [10, 20, 30, 40, 50];
const insertionElement = (addElement, position) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i === position) {
        arr[i] = addElement;
      }
    }
  }
  console.log(arr);
};

const arr2 = [10, 20, 30, 40, 50, 60];

const insertionElementUsingSplice = () => {
  arr2.splice(1, 0, 25);
  console.log(arr2);
};

insertionElement(150, 3);
insertionElementUsingSplice();
