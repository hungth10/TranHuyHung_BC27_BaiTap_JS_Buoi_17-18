// Tạo mảng rỗng chứa các số nguyên mà người dùng nhập vào
var nums = [];

// Thêm các số n do user nhập vào mảng
function addNumber() {
  var addNum = +document.getElementById("addNumber").value;

  nums.push(addNum);

  document.getElementById("addNumber").value = "";

  console.log(nums);

  document.getElementById("array").innerHTML = nums.join(", ");
}

// Bài tập 1: tính tổng các số nguyên dương
function calcSum() {
  var sum = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum += nums[i];
    }
  }

  console.log(sum);

  document.getElementById("result-bt1").innerHTML = `
    Tổng các số nguyên dương là: ${sum}`;
}

// Bài tập 2: đếm các số nguyên dương trong mảng
function countInteger() {
  var count = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++;
    }
  }

  console.log(count);

  document.getElementById("result-bt2").innerHTML = `
  Số dương: ${count}`;
}

// Bài tập 3: tìm số nhỏ nhất trong mảng
function findMin() {
  nums.sort(minCompare);

  var minNum = nums[0];

  console.log(nums[0]);

  document.getElementById("result-bt3").innerHTML = `
    Số nhỏ nhất là: ${minNum}`;
}

function minCompare(a, b) {
  return a - b;
}

// Bài tập 4: tìm số dương nhỏ nhất trong mảng
function findIntegerMin() {
  var numsBt4 = [];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      numsBt4.push(nums[i]);
    }
  }

  numsBt4.sort(minCompare);

  var min = numsBt4[0];

  console.log("số dương nhỏ nhất là:", min);

  document.getElementById("result-bt4").innerHTML = `
    Số dương nhỏ nhất là: ${min}`;
}

// Bài Tập 5: Tìm số chẵn cuối cùng trong mảng
function findFinalEven() {
  var numBt5 = [];
  var count = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      numBt5.push(nums[i]);
      count++;
    }
  }

  if (count === 0) {
    document.getElementById(
      "result-bt5"
    ).innerHTML = `không có số chẵn trong mảng`;
    return -1;
  } else {
    numBt5.reverse();
  }

  var finalEvenNum = numBt5[0];

  console.log(`Số chẵn cuối cùng trong mảng là: ${finalEvenNum}`);

  document.getElementById("result-bt5").innerHTML = `
  Số chẵn cuối cùng trong mảng là: ${finalEvenNum}`;
}

// bài tập 6: Đổi chỗ vị trí 2 giá trị trong mảng
function changeLocation() {
  var locate_1 = +document.getElementById("locate-1").value;
  var locate_2 = +document.getElementById("locate-2").value;

  var a = nums[locate_1];
  var b = nums[locate_2];

  if (locate_1 > nums.length - 1 || locate_2 > nums.length - 1) {
    alert("Vị trị nhập vào phải nhỏ hơn hoặc bằng vị trí lớn nhất trong mảng");
  } else {
    document.getElementById("bt6-init-array").innerHTML = `
    Trước khi đổi chỗ: ${nums}`;

    nums[locate_1] = b;
    nums[locate_2] = a;

    document.getElementById("bt6-after-change").innerHTML = `
    Sau khi đổi chỗ: ${nums}`;
  }
}

// Bài tập 7: Sắp xếp tăng dần
function sortUp() {
  nums.sort(minCompare);

  document.getElementById("result-bt7").innerHTML = `
    Sắp xếp tăng dần: ${nums.join(", ")}`;
}

// Bài tập 8: Tìm số nguyên tố đầu tiên trong mảng
function findPrimeNum() {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
      document.getElementById("result-bt8").innerHTML = `
      Số nguyên tố đầu tiên trong mảng là: 2`;
      break;
    } else if (
      nums[i] > 2 &&
      nums[i] % 2 !== 0 &&
      nums[i] % Math.sqrt(nums[i]) !== 0
    ) {
      document.getElementById("result-bt8").innerHTML = `
      Số nguyên tố đầu tiên trong mảng là: ${nums[i]}`;
      break;
    } else {
      document.getElementById("result-bt8").innerHTML = `
      Mảng không có số nguyên tố`;
    }
  }
}

// Bài tập 9: đếm các nguyên trong mảng số thực
var realNums = [];

function addRealNumber() {
  var num = +document.getElementById("addRealNumber").value;

  realNums.push(num);

  document.getElementById("addRealNumber").value = "";

  document.getElementById("array-real-nums").innerHTML = realNums.join(", ");
}

// Đếm số nguyên tố
function countPrimeNum() {
  var count = 0;

  for (var i = 0; i < realNums.length; i++) {
    if (Number.isInteger(realNums[i])) {
      count++;
    }
  }

  document.getElementById("result-bt9").innerHTML = `
  Số lượng số Nguyên: ${count}`;
}

// Bài tập 10: So sánh số dương và số âm
function comparePosNeg() {
  var posiNums = 0; // Đếm số dương
  var negaNums = 0; // Đếm số âm

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      posiNums++;
    }

    if (nums[i] < 0) {
      negaNums++;
    }
  }

  console.log(`Số lượng số Dương: ${posiNums}`);
  console.log(`Số lượng số Âm: ${negaNums}`);

  if (posiNums > negaNums) {
    document.getElementById("result-bt10").innerHTML = ` Số Dương > Số Âm`;
  } else {
    document.getElementById("result-bt10").innerHTML = ` Số Dương < Số Âm`;
  }
}
