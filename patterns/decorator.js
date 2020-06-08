function Sale(price) {
   this.price = price;
}

Sale.prototype.getPrice = function () {
   return this.price;
}

Sale.prototype.decorate = function(decoratorName) {
   const decorator = Sale.decorators[decoratorName];
   const parent = this;

   function F() {
      this.uber = parent;
   }

   F.prototype = parent;
   const decorated = new F();

   Object.assign(decorated, decorator);

   /* const proto = Object.getPrototypeOf(this);
    Object.setPrototypeOf(decorator, proto);
    Object.setPrototypeOf(this, decorator);*/

   return decorated;
};

Sale.decorators = {};

Sale.decorators.money = {
   getPrice: function () {
      const price = this.uber.getPrice();

      return `$${price.toFixed(2)}`;
   }
}

Sale.decorators.fedTax = {
   getPrice: function () {
      const price = this.uber.getPrice();

      return price + price * 0.05;
   }
}

let sale = new Sale(100);

sale = sale.decorate('fedTax');
sale = sale.decorate('money');
sale.getPrice();//$100.00