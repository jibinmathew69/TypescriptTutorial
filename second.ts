function greet(greeting:string, name:string = "John"):string{
    return "${greeting} ${name}"
}

const message:string = greet("Hello", "Jibin")
const message2:string = greet("Hello")
