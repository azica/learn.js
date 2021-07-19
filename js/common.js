
let img = document.querySelectorAll('.img');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');

box1.ondragover = allowDrop;
box2.ondragover = allowDrop;

function allowDrop(e) {
  e.preventDefault();
}

var draggedItem =  null;
for(let i = 0; i < img.length; i++) {
  const item = img[i];

  item.addEventListener('dragstart', function(ev){
    console.log('dragstart');
    draggedItem = item;
    ev.dataTransfer.setData("text/plain", ev.target.id);
  })
  item.addEventListener('dragend', function(){
    draggedItem = null;
 })
}
box1.ondrop = drop;
box2.ondrop = drop;
function drop(event) {
    event.target.appendChild(draggedItem);
};


for (let i = 0; i < 6; i++) { //! Эту строку можно изменить
  for (let j = 0; j < 5; j++) {
    if (i === 5 && j === 5) {
      //! Эту строку можно изменить
    }
  
    console.log(i, j);
  }
 }

// SENDING AJAX FORM 
$(document).ready(function() {

	$("#news__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for sending. Soon we will connect to you");
			$("#news__form").trigger("reset");
		});
		return false;
	});
	
});