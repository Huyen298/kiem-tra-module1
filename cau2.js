let array=[2,3,5,7,9,12,23];
let number=Number(prompt("Nhập số cần tìm"));

   for ( let i = 0; i < array.length; i++) {
       if(number===array[i]) {
            alert("Số cần tìm có trong mảng ở vị trí thứ" + i);
        }
    }


