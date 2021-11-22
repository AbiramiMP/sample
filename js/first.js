function display(){
    var a= document.getElementsByName('name')[0].value
    var b= document.getElementsByName('name')[1].value
    var c= a+b
    alert("hi" +c)
    document.getElementsByName('output')[0].innerHTML=c;
    document.getElementsByName('output')[1].innerHTML=c;

}