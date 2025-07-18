// Star Pattern Programs

// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}

// *
// **
// ***
// ****

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = "*" + row;
  }
  console.log(row);
}

// 1
// 12
// 123
// 1234
// 12345

n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  console.log(row);
}

// 1
// 22
// 333
// 4444
// 55555

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

// 12345
// 1234
// 123
// 12
// 1
n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// ....*
// ...**
// ..***
// .****
// *****

n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + ".";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

// 1
// 10
// 101
// 1010
// 10101

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}

// 1
// 01
// 010
// 1010
// 10101

let toggling = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + toggling;
    if (toggling == 1) {
      toggling = 0;
    } else {
      toggling = 1;
    }
  }
  console.log(row);
}
