const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without template strings

html = '<ul><li>Name: ' + name + ' </li><li>Age: ' + age + ' </li><li> ' + job + '</li><li>' + city + ' </li></ul>';

html = '<ul>' + 
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>'


// with template strings

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`;


document.body.innerHTML = html;