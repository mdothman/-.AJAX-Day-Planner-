$(document).ready(function() {
    console.log("ready!");

    // The Current day
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    // document.write(today); (This was found on stack overflow.)
    $("#currentDay").text(today)

    console.log(moment().format('LTS'));

    // This is where I was able to highlight the row based on the time
    var date = new Date();
    var currentTime = date.getHours();



    // This is the row selector
    var hour = $('.row')
    var input_textarea = $("textarea");
    var save_button = $(":button.toSave");

    var x = "";
    save_button.on("click", function set() {
        var whichRow = $(this).parent().siblings(".hour").children("h6").text();
        var plan = $.trim($(this).parent().siblings(".input").children("textarea").val());
        console.log(whichRow);
        console.log(plan);
        localStorage.setItem(whichRow, plan);
        x = localStorage.getItem(whichRow)

    });
    console.log(x);

    document.onload = function textVal() {


        for (var iOf_text = 0; iOf_text < input_textarea.length; iOf_text++) {
            var textId = $(this).attr("id")
            console.log(textId)
                // if (textId == hourKey) {
                //     $(this).val(localStorage.getItem(storageKey()))
                // }
        }
        // for (var iof_store = 0; iof_store < localStorage.length; iof_store++) {
        //     var hourKey = localStorage.key(iof_store);
        //     console.log(hourKey);

        // }




    }







    function iterate(item) {
        // console.log(item.id);
        if (item.id == currentTime) { item.classList.add("present") }
        if (item.id > currentTime) { item.classList.add("future") } else { item.classList.add("past") };


    }
    Array.prototype.forEach.call(hour, iterate);

});
// You have to treat the var hour like an array, and call the iterate function for each object in the array.


// This is for saving user input