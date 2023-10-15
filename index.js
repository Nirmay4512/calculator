document.getElementById('add').onclick = function(){
    let n1 = document.getElementById('first number').value;
    n1 = Number(n1);
    let n2 = document.getElementById('second number').value;
    n2 = Number(n2);
        document.getElementById('mylabel').innerHTML = n1+=n2;
}
document.getElementById('sub').onclick = function(){
    let n1 = document.getElementById('first number').value;
    n1 = Number(n1);
    let n2 = document.getElementById('second number').value;
    n2 = Number(n2);
    document.getElementById('mylabel').innerHTML = n1-=n2;
}
document.getElementById('divide').onclick = function(){
    let n1 = document.getElementById('first number').value;
    n1 =Number(n1);
    let n2 = document.getElementById('second number').value;
    n2 = Number(n2);
    document.getElementById('mylabel').innerHTML = n1/n2;
}
document.getElementById('multiply').onclick = function(){
    let n1 = document.getElementById('first number').value;
    n1 = Number(n1);
    let n2 = document.getElementById('second number').value;
    n2 = Number(n2);
    document.getElementById('mylabel').innerHTML = n1*n2;
}
document.getElementById('clear').onclick = function(){
    window.location.reload();
}
    
    
    
    