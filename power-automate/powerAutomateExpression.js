function generatePA() {
        var action = document.getElementById('t1').value.trim().replaceAll(/\s+/g,'_');
        var element = document.getElementById('t2').value.trim();

        console.log('action:', action)
        console.log('element:', element)

        //if 'element' field is empty 
        if (element.length === 0) {
                var exp = `first(body('${action}')?['value'])`;
        }
        else if (element.length > 0) {
                var exp = `first(body('${action}')?['value'])?['${element}']`;

        }

        document.getElementById('response').value = exp;

}