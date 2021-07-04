const button = document.getElementById('topBtn');

window.onscroll = function showBtn(params) {
    if(pageYOffset>=250){
        button.style.visibility="visible";
    }
    else{
        button.style.visibility="hidden";
    }
    console.log(pageYOffset)
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }