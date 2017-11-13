document.getElementById('calc').addEventListener("click",function(){
    var op = document.querySelector('input[name="op"]:checked').value;
    var onee = parseInt(document.getElementById('one').value);
    var twoo =parseInt(document.getElementById('two').value);
    typeof (onee) == 'number'

    if (op=='add'){
        document.getElementById('output').innerHTML = onee + "+" + twoo + ":" + (onee + twoo);
        (onee,twoo);
    }else if (op== 'min'){
        docment.getElementById('output').innerHTML = onee + "-" + twoo + ":" + (onee - twoo);
        (onee,twoo);
    }else if (op=='mult'){
        document.getElementById('output').innerHTML = onee + "*" + twoo + ":" + (onee * twoo);
        (onee,twoo);
    }else if (op=='spilt'){
        document.getElementById('output').innerHTML = onee + "/" + twoo + ":" (onee / twoo);
        (onee,twoo);;
    }
});