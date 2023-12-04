var $ = function (id) {
    return document.getElementById(id); 
};


window.onload = function () {
    
    $("calculate").onclick = processEntries;


    $("clear").onclick = clearForm;

    
    $("subtotal").onclick = clearInput;
    $("tax_rate").onclick = clearInput;

    
    $("subtotal").focus();
};

var processEntries = function () {
    
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);

    
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        return;
    }

    
    var salesTax = subtotal * (taxRate / 100);
    var total = subtotal + salesTax;

    
    $("sales_tax").value = salesTax.toFixed(2);
    $("total").value = total.toFixed(2);
};

var clearForm = function () {
    
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";

   
    $("subtotal").focus();
};

var clearInput = function () {
    
    this.value = "";
    
    $("sales_tax").value = "";
    $("total").value = "";
};

