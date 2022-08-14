function myFunction() {
    var name = document.getElementById("input").value;
    console.log(name);
    $.post("/takeimage",
        {
            name: name
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
}