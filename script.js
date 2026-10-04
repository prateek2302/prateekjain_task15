// 1. Regular Function Declaration: Find the maximum number in the array
function findMax(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 2. Anonymous Function Expression: Calculate the sum of all elements in the array
const calculateSum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// 3. Arrow Function: Count the number of odd numbers in the array
const countOddNumbers = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) % 2 === 1) {
      count++;
    }
  }
  return count;
};

// Runner function to execute operations and print output
const processArray = (arr) => {
  const maxVal = findMax(arr);
  const sumVal = calculateSum(arr);
  const oddCount = countOddNumbers(arr);

  // Console Output (as requested)
  console.log(`Ex Array: [${arr.join(", ")}]`);
  console.log(`Maximum number: ${maxVal}`);
  console.log(`Sum of all elements: ${sumVal}`);
  console.log(`Count of odd numbers: ${oddCount}`);
  console.log("-----------------------------------");

  // DOM Display
  const container = document.getElementById("output-container");
  if (container) {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <strong>Array:</strong> [${arr.join(", ")}]<br>
      • <strong>Maximum number:</strong> ${maxVal}<br>
      • <strong>Sum of all elements:</strong> ${sumVal}<br>
      • <strong>Count of odd numbers:</strong> ${oddCount}
    `;
    container.appendChild(card);
  }
};

// Sample Array from assignment guidelines
const sampleArray = [4, 8, 2, 11, 6, 7, 10];
processArray(sampleArray);

// Dummy Arrays for additional testing
const testArray1 = [15, 22, 8, 19, 31, 40];
const testArray2 = [1, 3, 5, 7, 9];

processArray(testArray1);
processArray(testArray2);