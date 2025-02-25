
nameVal = document.querySelector('.inputName').value;
ageVal = document.querySelector('.inputAge').value;
btn = document.querySelector('button');
btn.addEventListener("click", getAzFunc);

async function call_api(){
const baseUrl = "https://web-app-rooibos.azurewebsites.net/api/HttpTrigger_First"
const fullUrl = `${baseUrl}?name=${nameVal}&age=${ageVal}}`; 

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
    console.log(`${nameVal} ${ageVal}`)
    a = call_api() ;
    console.log(a);

}