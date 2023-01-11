const product = {
  name: 'Generator', // property
  quantity: 200,
  getQuantity: function() { // method
    return this.quantity;
  },
  sellGood: function() {
    this.quantity--;
  },  
}