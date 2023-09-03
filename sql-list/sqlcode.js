const colField = document.querySelector('.inputCol')
const inputField = document.querySelector('.inputarea');
const output = document.querySelector('.outputarea');

inputField.addEventListener("input", generateSQL);

function generateSQL() {

  const entryString = inputField.value;

  let arr = entryString.split(/\r?\n/);
  arr = arr.map((x) => x.trim());
  arr = arr.filter((x) => x.length > 0);

  const outputArr = [];

  for (const name of arr) {
    let converted = `'${name}'`;
    outputArr.push(converted);
  };

  let outputString = outputArr.join(',');

  outputString = `(${outputString})`;

  output.value = outputString;

}