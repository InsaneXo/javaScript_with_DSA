const data = [10, 20, 30, 40, 50, 60];

const arrayDeletion = (position) => {
  for (let i = position; i < data.length - 1; i++) {
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  console.log(data);
};

arrayDeletion(4);
