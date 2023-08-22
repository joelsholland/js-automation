function generatePA() {
        const action = document.getElementById('t1').value.trim().replaceAll(/\s+/g, '_');
        const element = document.getElementById('t2').value.trim();
        const response = document.getElementById('response');
        const beforeAction = "first(body('";
        const afterAction = "')?['value'])";
        const beforeElement = "?['";
        const afterElement = "']";
        
        //clear whatever was in the output
        response.innerHTML = ''

        //create colorful span
        actionSpan = document.createElement("span")
        actionSpan.setAttribute("class", "actionColor")
        actionSpan.innerText = action

        response.append(beforeAction, actionSpan, afterAction);

        if (element.length > 0) {

                elementSpan = document.createElement("span");
                elementSpan.setAttribute("class", "elementColor");
                elementSpan.innerText = element;

                response.append(beforeElement, elementSpan, afterElement);
        }
}