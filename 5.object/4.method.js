const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 사과`);
  },
};

apple.display();

const orange = {
  name: 'orange',
  display: function () {
    console.log(`${this.name}: 오렌지`);
  },
};

orange.display();
