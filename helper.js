var ageElements = document.getElementsByClassName('age');

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

for (const e of ageElements) {
    e.innerText = calculateAge(new Date(2001, 2, 20)).toString();
}
