const image = document.images[0];
let btn= document.querySelectorAll('button')
let index = 1
let timer;
function nextImage(){
    if (index>=7){
        index =1
    }
    else{
        ++index
    }
    //index = index >= 7 ? 1 : ++index;
    image.src =`/img/img${index}.jpg`
}
function perviousImage(){
    if (index <= 1){
        index = 7
    }
    else{
        --index
    }
    //index = index <= 7 ? 1 : --index;
    image.src = `/img/img${index}.jpg`
    
}
function startShow() {
        timer=setInterval(()=>{
            nextImage()
        },300)
}

function stop(){
   clearInterval(timer)

}