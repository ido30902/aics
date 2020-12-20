function upload_details() {

    // extract the details
    var first_name = document.getElementById("first_name").innerHTML;
    var middle_name = document.getElementById("middle_name").innerHTML;
    var last_name = document.getElementById("last_name").innerHTML;
    var supplier_email = document.getElementById("supplier_email").innerHTML;
    var orders_email = document.getElementById("orders_email").innerHTML;
    var phone_number = document.getElementById("phone_number").innerHTML;

    console.log("performed an HTTP request");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/suppliers/new", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "first_name": first_name,
        "middle_name": middle_name,
        "last_name": last_name,
        "supplier_email": supplier_email,
        "orders_email": orders_email,
        "phone_number": phone_number
    }));
}