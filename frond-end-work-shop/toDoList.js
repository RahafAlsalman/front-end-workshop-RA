

const taskInp=$('#inp');
const add=$('#add')
const trach=$('#trach');
const checkbox=$('#checkbox');
let countener=1;
let text=$('#text-countener')

$(document).ready(function(){
add.click(function () {
 let task = taskInp.val();
 if( task == ""){
    alert("please mack suer you write some thing")
    return;
 }


 text.append(`

 <div data-id="${countener}"class=" d-flex justify-content-between my-4 p-2 w-25 m-auto border border-primary" id="color">
 
     <input class="form-check-input" type="checkbox" id="checkbox" value="" aria-label="...">
   
   <p>${task}</p>

 <button id="trach" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
 </div> `)
 
 $(`div[data-id="${countener}"] input`).click(function () {
    $(this).parent().css("text-decoration","line-through");
});
$(`div[data-id="${countener}"] button`).click(function () {
    $(this).parent().remove();
});
taskInp.val('');
taskInp.focus();
countener++
 });
});



 