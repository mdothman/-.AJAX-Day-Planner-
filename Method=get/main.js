$(document).ready(function() {
    console.log("ready!");
});
// The Current day
var today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
// document.write(today); (This was found on stack overflow.)
$("#currentDay").text(today)

console.log(moment().format('LTS'));
console.log(today);
console.log(dd);
console.log(mm);
console.log(yyyy);

const currentTime = moment().format('LT');
const hour = $(".row");

function iterate(item) {
    console.log(item.id);
    if (item.id == currentTime) { item.classList.add("present") } else if (item.id > currentTime) { item.classList.add("future") } else { item.classList.add("past") };


    // if (item == currentTime) { addClass(".present") };
    // if (item > currentTime) { addClass(".future") };
    // if (item < currentTime) { addClass(".past") };

}

Array.prototype.forEach.call(hour, iterate);
var input_textarea = document.querySelector('.plans');
var output_div = document.querySelector('.input');
var save_button = document.querySelector('.save');

save_button.addEventListener('click', updateOutput);

output_div.textContent = localStorage.getItem();
input_textarea.value = localStorage.getItem();

function updateOutput() {
    localStorage.setItem(input_textarea, input_textarea.value);

    output_div.textContent = input_textarea.value;
}





;

// hour[i].forEach(function() {
//     console.log(this)
// })
// console.log(hour[1]);
// hour.each(function() {
//     if (val == currentTime) {console.log(val)};


// function highlighter() {
//     currentTime = parseInt(currentTime);
//     if (hour == currentTime) { addClass(".present") };
// };

console.log(currentTime);