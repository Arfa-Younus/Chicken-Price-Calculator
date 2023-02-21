function calculatePrice() {
    var quantity = document.getElementById("quantity").value;
    var price = 500;
    var totalPrice = quantity * price;
    document.getElementById("result").innerHTML = "Total price: " + totalPrice + " Kg";
  }
  