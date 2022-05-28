// Tạo mảng rỗng chứa các số nguyên mà người dùng nhập vào
var nums = [];

// Thêm các số n do user nhập vào mảng
function addNumber() {
  var addNum = +document.getElementById("addNumber").value;

  nums.push(addNum);

  document.getElementById("addNumber").value = "";

  console.log(nums);
}

// Bài tập 1: tính tổng các số nguyên dương
function calcSum() {
  var sum = 0;

  for (i = 0; i < nums.length; i++) {
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

  for (i = 0; i < nums.length; i++) {
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

  for (i = 0; i < nums.length; i++) {
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

// Bài Tập 5
function findFinalEven() {
  var numBt5 = [];
  var count = 0;

  for (i = 0; i < nums.length; i++) {
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

// bài tập 6
function changeLocation() {
  var locate_1 = +document.getElementById("locate-1").value;
  var locate_2 = +document.getElementById("locate-2").value;

  var a = nums[locate_1];
  var b = nums[locate_2];

  if (locate_1 > nums.length - 1 || locate_2 > nums.length -1) {
    alert("Vị trị nhập vào phải nhỏ hơn hoặc bằng vị trí lớn nhất trong mảng");
  } else {
    document.getElementById('bt6-init-array').innerHTML = `
    Trước khi đổi chỗ: ${nums}`
    
    nums[locate_1] = b;
    nums[locate_2] = a;

    document.getElementById('bt6-after-change').innerHTML = `
    Sau khi đổi chỗ: ${nums}`
  }
}

// Bài tập 7
function sortUp() {
    nums.sort(minCompare);

    document.getElementById('result-bt7').innerHTML = `
    Sắp xếp tăng dần: ${nums.join(", ")}`
}