type Salutation = {greeting:string, name:string}

function greet({greeting, name}:Salutation):string{
    return "${greeting} ${name}"
}

const message:string = greet({"greeting":"Hello", "name":"Jibin"})
