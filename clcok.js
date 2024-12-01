function starttime(){
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("demo").innerHTML = h + ":" + m + ":" + s;
    setTimeout(starttime, 1000);
}

function checkTime(i){
    if(i < 10){i ="0" + i;}
    return i;
}

function currentdate(){
    const d1 = new Date()
    document.getElementById("date").innerHTML = d1;
}

currentdate();
starttime();