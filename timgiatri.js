let input = +prompt("Nhập giá trị");
var flag = false;
let number = [-3, 5, 1, 3, 2, 10];
let i = 0;
while(i<number.length){    
    if(number[i]==input){
        flag=true;
        break;
    }
    i++;
}
if (flag==true) {
    alert("Giá trị " + input + " nằm ở vị trí " + i);
}
else {
    alert("Giá trị " + input + " không nằm trong mảng");
}
