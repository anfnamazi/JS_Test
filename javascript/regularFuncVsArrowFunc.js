const obj = {
  name: "test",
  print: function () {
    console.log(this);
  },
};

const obj2 = {
  name: "test2",
  print: function () {
    const print2 = () => {
      console.log(this);
    };
    print2();
  },
};

obj.print();

obj2.print();
