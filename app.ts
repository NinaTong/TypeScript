const arrayStr = [{name: "Sledgehammer",price: 125.76},{name: "Axe",price: 190.51},{name: "Bandsaw",price: 562.14},{name: "Chisel",price: 13.9},{name: "Hacksaw",price: 19.45}];

//
// creat product list
//
function myFunction() {
    var lt;
    lt += '<tr><th>Name</th><th>Price</th><th>Add</th></tr>';    
    for(var i=0; i<arrayStr.length; i++){
      lt += '<tr>';
      lt += '<td>'+arrayStr[i].name+'</td>';
      lt += '<td>'+arrayStr[i].price.toFixed(2)+'</td>';
      lt += '<td><a href="#" onclick="addFunction('+i+')" id ='+i+'>+1</a></td>';
      lt += '</tr>';
    }
    $('#withdraw-list-data-body').append(lt);   
  }

//
// add product to shopping cart
//
function addFunction(i){
  var ll;
  var num = 1;
                                    
  // if same product just add counting                                 
  if(document.getElementById(i+'-product')){
    var numOrg = $("#"+i+"num").text();   
    num = 1 + Number(numOrg);
    $("#"+i+"num").text(num);
    var price = num * arrayStr[i].price;
    $("#"+i+"total").text(price.toFixed(2));
  }else{
    var all = arrayStr[i].price * num;
    ll += '<tr id="'+i+'-product">';
    ll += '<td>'+arrayStr[i].name+'</td>';
    ll += '<td>'+arrayStr[i].price.toFixed(2)+'</td>';
    ll += '<td id="'+i+'num">'+num+'</td>';
    ll += '<td id="'+i+'total">'+all.toFixed(2)+'</td>';
    ll += '<td><a href="#"  id="'+i+'-remove" onClick="removeFunction('+i+')">remove</a></td>';
    ll += '</tr>';
    $('#shoppingCart-list').append(ll);
  }
  
// count and add total price
  var to = 0; 
  for(var n=0; n <arrayStr.length; n++){
    var tot = $("#"+n+"total").text();
    var total = Number(tot);
    to += total;
  }
  
  if(to > 0){
    $("#tota").remove();
    var k = '<tr id="tota">';
    k += '<td></td><td></td>';
    k += '<td>Total</td>';
    k += '<td id="tot-price">'+to.toFixed(2)+'</td>';
    k += '</tr>';
    $('#shoppingCart-list').append(k);
  }
  
}

//
// delete product from shopping cart
//
function removeFunction(i) {
    var num = $("#"+i+"num").text();   
    var number = Number(num);
  
    var tot = $("#tot-price").text();   
    var total = Number(tot);
  
    total -= arrayStr[i].price;
 
  if(number == 1){
    $('#' + i + '-product').remove();
  }else{
    number -= 1;
    $("#"+i+"num").text(number);  
    var price = $("#"+i+"total").text();
    var pri = Number(price);
    pri -= arrayStr[i].price;
    $("#"+i+"total").text(pri.toFixed(2));
  }
  
  if(total > 0){
    $('#tot-price').text(total.toFixed(2));
  }else{
    $('#tota').remove();
  } 
}
