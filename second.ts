function greet(options:{greeting:string, name:string}):string{
    return "${options.greeting} ${options.name}"
}

const message:string = greet({"greeting":"Hello", "name":"Jibin"})
