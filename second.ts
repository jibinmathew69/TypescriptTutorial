function greet({greeting, name}:{greeting:string, name:string}):string{
    return "${greeting} ${name}"
}

const message:string = greet({"greeting":"Hello", "name":"Jibin"})
