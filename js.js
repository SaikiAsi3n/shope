var index=0;

function nextslide() {
    if(index==2){
        index=-1;
    }
    index++;
    var img=["./img/qc3.jpg" , "./img/qc4.jpg" , "./img/qc5.jpg"];
    document.getElementById('img__to').src = img[index]; 
}

function backslide() {
    if(index==0){
        index=3;
    }
    index--;
    var img=["./img/qc3.jpg" , "./img/qc4.jpg" , "./img/qc5.jpg"];
    document.getElementById('img__to').src = img[index];
}

var img = document.getElementById('myImg');
        var modal = document.getElementById('myModal');                   
        var modalImg    = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
        }         
        var span = document.getElementsByClassName("close")[0];
          span.onclick = function() { 
            modal.style.display = "none";
          }