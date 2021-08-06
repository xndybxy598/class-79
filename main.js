var NoS_Array = [];

function submit(){
    var name1 = document.getElementById("NoS#1").value;
    var name2 = document.getElementById("NoS#2").value;
    var name3 = document.getElementById("NoS#3").value;
    var name4 = document.getElementById("NoS#4").value;

    NoS_Array.push(name1);
    NoS_Array.push(name2);
    NoS_Array.push(name3);
    NoS_Array.push(name4);

    console.log(NoS_Array);

    document.getElementById("displayName").innerHTML = NoS_Array;
    document.getElementById("submitBttn").style.display = "none";
    document.getElementById("sortBttn").style.display = "inline-block"

}

function sort(){
    NoS_Array.sort();
    console.log(NoS_Array);
    document.getElementById("displayName").innerHTML = NoS_Array;

}