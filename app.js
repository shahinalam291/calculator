let x = $('.a')
function shahin(v){ 
    let pre = x.val();
    x.val(pre+v)
}

function ag(){
    x.val(" ")
}

function love(){
    let ss = eval(x.val());
    x.val(ss)
}

function cal(){
    let calcuter = x.val();
    if(calcuter != ""){
        x.val(calcuter.slice(0,-1));
    }
}