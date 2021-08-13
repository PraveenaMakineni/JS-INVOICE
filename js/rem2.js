$('#addRow').click(function () {
    addItem();
});
$('#items_table').on('keyup', '.update', function () {
    var key = event.keyCode || event.charCode; // if the user hit del or backspace, dont do anything
    if( key == 8 || key == 46 ) return false;
    calculateTotals();
});
$('#taxPercentage').change(function () {
    calculateTotals(); // user changed tax percentage, recalculate everything
});

function calculateTotals(){
    
    // get all of the various input typs from the rows 
    // each will be any array of elements
    var nameElements = $('.row-name');
    var quantityElements = $('.row-quantity');
    var taxElements = $('.row-tax');
    var priceElements = $('.row-price');
    var totalElements = $('.row-total');
    
    // get the bottom table elements
    var taxPercentageElement =$('#taxPercentage');
    var subTotalElement =$('#subTotal');
    var totalTaxElement =$('#totalTax');
    var grandTotalElement =$('#grandTotal');

    var subTotal=0;
    var taxTotal=0;
    var grandTotal=0;
    $(quantityElements).each(function(i,e){
        
        // get all the elements for the current row
        var nameElement = $('.row-name:eq(' + i + ')');
        var quantityElement = $('.row-quantity:eq(' + i + ')');
        var taxElement = $('.row-tax:eq(' + i + ')');
        var priceElement = $('.row-price:eq(' + i + ')');
        var totalElement = $('.row-total:eq(' + i + ')');

        // get the needed values from this row
        var qty = quantityElement.val().trim().replace(/[^0-9$.,]/g, ''); // filter out non digits like letters
            qty = qty == '' ? 0 : qty; // if blank default to 0
            quantityElement.val(qty); // set the value back, in case we had to remove soemthing
        var price = priceElement.val().trim().replace(/[^0-9$.,]/g, '');
            price = price == '' ? 0 : price; // if blank default to 0
            priceElement.val(price); // set the value back, in case we had to remove soemthing
    
        // get/set row tax and total
        // also add to our totals for later
        var rowPrice = (price * 1000) * qty
            subTotal = subTotal + rowPrice;
        var tax = taxPercentageElement.val() * rowPrice;
            taxElement.val((tax / 1000).toFixed(2));
            taxTotal = taxTotal + tax;
        var total =   rowPrice + tax
            totalElement.val((total / 1000).toFixed(2));
            grandTotal = grandTotal + total;
    });
    
    // set the bottom table values
    subTotalElement.val((subTotal / 1000).toFixed(2));   
    totalTaxElement.val((taxTotal / 1000).toFixed(2));  
    grandTotalElement.val((grandTotal / 1000).toFixed(2));   
}
function addItem() {
    var itemRow =
        '<tr>' +
        '<td><input type="text" class="form-control row-name" placeholder="Item name" /></td>' +
        '<td><input type="text" class="form-control update row-quantity" placeholder="Quantity" /></td>' +
        '<td><input type="text" class="form-control update row-tax" placeholder="Tax" /></td>' +
        '<td><input type="text" class="form-control update row-price" placeholder="Price" /></td>' +
        '<td><input type="text" class="form-control row-total" disabled placeholder="0,00" /></td>' +
        '</tr>';
    $("#items_table").append(itemRow);
}
addItem(); //call function on load to add the first item
