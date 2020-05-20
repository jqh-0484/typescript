var message: string = "Hello World";
console.log(message);

let username: string = 'jqh';
let years: number = 2;
let works: string = `您好，${username}今年${years}岁`

function greeter(person: string) {
    return "Hollo, " + person
}

let user = "Jane User";

document.body.innerHTML = greeter(user);