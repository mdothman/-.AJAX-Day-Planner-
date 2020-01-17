$(document).ready(function() {

    let nine = localStorage.getItem("9am");
    let ten = localStorage.getItem("10am");
    let eleven = localStorage.getItem("11am");
    let twelve = localStorage.getItem("12pm");
    let one = localStorage.getItem("1pm");
    let two = localStorage.getItem("2pm");
    let three = localStorage.getItem("3pm");
    let four = localStorage.getItem("4pm");
    let five = localStorage.getItem("5pm");
    var save_button = $(":button.toSave");
    var hour = $('.row');

    $("#9am").val(nine);
    $("#10am").val(ten);
    $("#11am").val(eleven);
    $("#12pm").val(twelve);
    $("#1pm").val(one);
    $("#2pm").val(two);
    $("#3pm").val(three);
    $("#4pm").val(four);
    $("#5pm").val(five);

    save_button.on("click", function set() {
        var whichRow = $(this).parent().siblings(".hour").children("h6").text();
        var plan = $.trim($(this).parent().siblings(".input").children("textarea").val());
        console.log(whichRow);
        console.log(plan);
        localStorage.setItem(whichRow, plan);
    });

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

    function iterate(item) {
        // console.log(item.id);
        if (item.id == currentTime) { item.classList.add("present") }
        if (item.id > currentTime) { item.classList.add("future") } else { item.classList.add("past") };


    }
    Array.prototype.forEach.call(hour, iterate);



});