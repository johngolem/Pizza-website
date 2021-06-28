var price , crust_price ,topping_price ;
let total=0;
function GetPizza(name,size,topping,crust, total){
    this.name = name;
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.total = total;
}