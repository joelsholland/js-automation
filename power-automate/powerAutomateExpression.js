const actionField = document.getElementById('t1');
const elementField = document.getElementById('t2');
const response = document.getElementById('response');

actionField.addEventListener("input", generatePA);
elementField.addEventListener("input", generatePA);

function generatePA() {
        const action = document.getElementById('t1').value.trim().replaceAll(/\s+/g, '_');
        const element = document.getElementById('t2').value.trim();
        const beforeAction = "first(body('";
        const afterAction = "')?['value'])";

        //clear whatever was in the output
        response.innerHTML = '';

        //if action and element are empty keep output empty and exit the function
        if (action.length === 0 && element.length === 0) {
                return;
        }

        //create colorful span
        actionSpan = document.createElement("span");
        actionSpan.setAttribute("class", "actionColor");
        actionSpan.innerText = action;

        //show output with only action
        response.append(beforeAction, actionSpan, afterAction);

        if (element.length > 0) {
                beforeElement = "?['";
                afterElement = "']";

                elementSpan = document.createElement("span");
                elementSpan.setAttribute("class", "elementColor");
                elementSpan.innerText = element;

                //show output with action and element
                response.append(beforeElement, elementSpan, afterElement);
        }
}
