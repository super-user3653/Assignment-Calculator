



// function getName(){
//     var name = document.getElementById("name");
//     alert(name.value);

//     name.value = ""
// }

function getNumber(num){

    var result = document.getElementById("result");

    result.value += num;
}

function ClearResult(){
    var result = document.getElementById("result");
        result.value = "";
}

function GetResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function getSquare(){

    var result = document.getElementById("result");

    var res = result.value * result.value;
    res = parseInt(res);
    result.value = res;

}


