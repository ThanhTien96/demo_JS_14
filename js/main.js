




/// BAI TAP 1: cho nguoi dung nhap vo 3 so nguyen. Viet chuong trinh xuat 3 so theo thu tu tang dan.


getMyId('btn_number').onclick = function () {
  //input:
  var numA = Number(getMyId('number1').value);
  var numB = Number(getMyId('number2').value);
  var numC = Number(getMyId('number3').value);
  
  // output:
  var sortNum = '';
  // truong hop 1
  if (numA > numB && numA > numC) {
    if (numB > numC) {
      sortNum = numC + ' < ' + numB + ' < ' + numA;
    }else {
      sortNum = numB + ' < ' + numC + ' < ' + numA;
    }
    //truong hop 2:
  }else if (numB > numA && numB > numC) {
    if (numA > numC) {
      sortNum = numC + ' < ' + numA + ' < ' + numB;
    }else {
      sortNum = numA + ' < ' + numC + ' < ' + numB;
    }
    /// truong hop con lai:
  }else {
    if (numA > numB) {
      sortNum = numB + ' < ' + numA + ' < ' + numC;
    }else {
      sortNum = numA + ' < ' + numB + ' < ' + numC;
    }
  }
  console.log('sắp xếp thứ tự: ', sortNum);
  getMyId('numResult').innerHTML = sortNum;
  
};


/// Bai Tap 2: Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)

getMyId('sayHi').addEventListener('click', function () {
  var wellcome = getMyId('wellcome').value;

  //OUTPUT:
  var greetings = '';

  //process:
  if (wellcome === 'B') {
    greetings = 'Xin Chào Bố!';
  }else if (wellcome === 'M') {
    greetings = 'Xin Chào Mẹ!';
  }else if (wellcome === 'A') {
    greetings = 'Xin Chào Anh Trai!';
  }else {
    greetings = 'Xin Chào Em Gái!';
  };

  getMyId('wellcomeResult').innerHTML = greetings;

    console.log(greetings);
});

/// BAI SO 3: cho 3 so nguyen viet chuong trinh xuat ra co bao nhieu so le va bao nhieu so chan;

getMyId('btnChanLe').addEventListener('click', function () {
  /// input:
  var isNum1 = Number(getMyId('isNum1').value);
  var isNum2 = Number(getMyId('isNum2').value);
  var isNum3 = Number(getMyId('isNum3').value);

  //output:
  var isNumResult = '';
  //truong hop 1:
  if (isNum1 % 2 == 0) {
    if (isNum2 % 2 == 0 && isNum3 % 2 == 0) {
      isNumResult = '3 số chẵn và 0 số lẻ';
    }else if (isNum2 % 2 != 0 && isNum3 % 2 != 0){
      isNumResult = '1 số chẵn và 2 số lẻ';
    }else{
      isNumResult = '2 số chẵn 1 số lẻ';
    }
  /// truong hop 2:
  }else if (isNum1 % 2 != 0) {
    if (isNum2 % 2 != 0 && isNum3 % 2 != 0) {
      isNumResult = '0 số chẵn và 3 số lẻ';
    }else if (isNum2 % 2 == 0 && isNum3 % 2 == 0) {
      isNumResult = '2 số chẵn và 1 số lẻ';
    }else{
      isNumResult = '1 số chẵn và 2 số lẻ';
    }    
  }

  getMyId('chanLeSo').innerHTML = isNumResult;
  console.log(isNumResult);

});

/// Bai Tap 4: viet chuong trinh cho nhap vao 3 canh cua tam giac. Hay cho biet do là tam giac gi?


getMyId('btnTamGiac').onclick = function () {
  // input:
  var canhA = Number(getMyId('canhA').value);
  var canhB = Number(getMyId('canhB').value);
  var canhC = Number(getMyId('canhC').value);

  // output:
  var tamGiac = '';

  if (canhA == canhB) {
    if (canhA == canhC) {
      tamGiac = 'Tam Giác Điều';
    }else if (canhA != canhC || canhB != canhC) {
      tamGiac = 'Tam Giác Cân';
    }
   
  }else if (canhA != canhB){
    
    var canhVuongA = Math.pow(canhA, 2);
    var canhVuongB = Math.pow(canhB, 2);
    var canhVuongC = Math.pow(canhC, 2);
    if (canhA == canhC || canhB == canhC) {
      tamGiac = 'Tam Giác Cân';
    }else if (canhVuongC === canhVuongA + canhVuongB) {
      tamGiac = 'Tam Giác Vuông';
    }
    else{
      tamGiac = 'Một Loại Tam Giác Nào Đó';
    }
  }

  getMyId('tamGiac').innerHTML = tamGiac;
  console.log(tamGiac);
}

/// BAI 5: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.



getMyId('btnTomorow').onclick = function () {
  //input: 
  var toDay = getMyId('day').value;
  var month = getMyId('month').value;
  var year = getMyId('year').value;

  // OUTPUT:
  var tomorow = '';

  //process:

  if (month % 2 != 0 && month <= 7) {
    
    if (toDay == 31) {
      month++;
      tomorow = '1 / ' + month + ' / ' + year; 
    }else if (toDay <= 30) {
      toDay++;
      tomorow = toDay + ' / ' + month + ' / ' + year;
    }

  }else if (month % 2 == 0 && month <= 7) {
    if (month == 2 && toDay == 28) { 
      month++;
      tomorow = '1 / ' + month + ' / ' + year;
    }else if (toDay == 30) {
      month++;
      tomorow = '1 / ' + month + ' / ' + year;
    }else if (toDay < 30) {
      toDay++;
      tomorow = toDay + ' / ' + month + ' / ' + year;
    }
  }else if (month % 2 == 0 && month > 7 && month <= 12) {

    if (toDay == 31 && month == 12) {
      year++;
      tomorow = '1 / 1 / ' + year;
    }else if (toDay == 31) {
      month++;
      tomorow = '1 / ' + month + ' / ' + year;
    }else if (toDay <= 30) {
      toDay++;
      tomorow = toDay + ' / ' + month + ' / ' + year;
    }
  }else if (month % 2 != 0 && month > 7 && month < 12) {
    if (toDay == 30 && month < 12) {
      month++;
      tomorow = '1 / ' + month + ' / ' + year;
    }else if (toDay < 30 && month < 12) {
      toDay++;
      tomorow = toDay + ' / ' + month + ' / ' + year;
    }
  }

   getMyId('hiendate').innerHTML = 'Ngày Mai: ' + tomorow;
};