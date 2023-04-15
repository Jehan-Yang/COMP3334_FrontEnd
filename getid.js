document.body.onclick = function(event){
    var id = event.target.id;
    var claname=document.getElementById(id).className;
    confirm("By clicking OK, you confirm that you are going to purchase "+id)
    window.location.href = "tradeWith.html";
}
