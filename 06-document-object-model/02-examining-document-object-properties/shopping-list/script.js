let output;

output = document.all
output = document.all[11]

output = document.documentElement;

output = document.head;
output = document.forms;

output = document.images;
output = document[0]
output = document.images[0].src;

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output)
