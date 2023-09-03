const colField = document.querySelector('.inputCol');
const inputField = document.querySelector('.inputarea');
const btn = document.querySelector('button');
const checkbox = document.querySelector('.filterCheckbox');
const output = document.querySelector('.outputarea');

colField.addEventListener("input", generateFetch);
inputField.addEventListener("input", generateFetch);
checkbox.addEventListener("click", generateFetch);

function generateFetch() {
  //set focus on column field
  //colField.focus()

  const attribute = colField.value.trim();
  const entryString = inputField.value;

  let arr = entryString.split(/\r?\n/);
  arr = arr.map((x) => x.trim());
  arr = arr.filter((x) => x.length > 0);

  const outputArr = [];

  for (const name of arr) {

    let converted = `  <value>${name}</value>`;
    outputArr.push(converted);
  };

  //add condition filter

  outputArr.unshift(`<condition attribute="${attribute}" operator="in">`);
  outputArr.push('</condition>');

  //add filter tags before and after
  if (checkbox.checked) {
    outputArr.unshift('<filter>');
    outputArr.push('</filter>');
  };

  const outputString = outputArr.join('\n');

  output.value = outputString;

}