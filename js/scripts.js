var price , crust_price ,topping_price ;
let total=0;
function GetPizza(name,size,topping,crust, total){
    this.name = name;
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.total = total;   
}


// proceed button
$(document).ready(function(){
    // $("button.proceed").click(function(){
    //   $("button.proceed").hide();
    //   $("#information").hide();
    //   $("div.choise").slideDown(1000);
    // });
    $("button.proceed").click(function(event){
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));