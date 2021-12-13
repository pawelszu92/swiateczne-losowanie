function formSubmitted(form) {
    const textarea = form.elements[0];
    let result = 'Schemat: \nKto kupuje : komu kupuje\n\n';

    const names = new String(textarea.value)
        .split(';')
        .filter(v => v.length > 0)
        .sort();
    const copyNames = [...names];

    names.forEach(name => {
        let noValue = true;
        let index;
        do {
            index = Math.floor(Math.random() * copyNames.length);
            noValue = name === copyNames[index];
        }
        while (noValue);
        result += `${name} : ${copyNames[index]}\n`;
        copyNames.splice(index, 1);
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = result;

    // prevent page reload on submit
    return false;
}

function getArrayElement(arrayLength) {
    return Math.floor(Math.random() * (arrayLength - 1));
  }