const input = document.getElementById("input") as HTMLInputElement
input.autofocus = true
input.addEventListener("input", event => {
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})