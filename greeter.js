var message = "Hello World";
console.log(message);
var username = 'jqh';
var years = 2;
var works = "\u60A8\u597D\uFF0C" + username + "\u4ECA\u5E74" + years + "\u5C81";
function greeter(person) {
    return "Hollo, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
