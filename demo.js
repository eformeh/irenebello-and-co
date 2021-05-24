// if (!$("input#b")[0].checkValidity()) {
//     alert("Not Valid");
// }
$(document).ready(function () {
    var inputText = $("input[type=text]");
    var inputPass = $("input[type=password]");
    var inputEmail = $("input[type=email");
    var inputdate = $("input[type=date");


    $("#sub").on("click", function () {

        borderColor(inputText);
        borderColor(inputPass);
        borderColor(inputEmail);
        borderColor(inputdate);

    });



    function borderColor(input) {

        if (input.length !== 0) {

            if (!input[0].checkValidity()) {
                input.css("border", "solid red 3.2px");

            } else {
                input.css("border", "none");

            }

        }
    }


});