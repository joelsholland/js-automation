
nameField = document.querySelector('.inputName');
ageField = document.querySelector('.inputAge');
btn = document.querySelector('button');
btn.addEventListener("click", getAzFunc);

async function call_api(){

nameVal = nameField.value;
ageVal = ageField.value;

const baseUrl = "https://web-app-rooibos.azurewebsites.net/api/HttpTrigger_First"
const fullUrl = `${baseUrl}?name=${nameVal}&age=${ageVal}}`; 

console.log(fullUrl);

try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

function getAzFunc() {
    a = call_api() ;
    console.log(a);

}