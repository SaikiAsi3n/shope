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