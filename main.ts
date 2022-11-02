let lista_de_texto: string[] = []
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= lista_de_texto.length - 1; index++) {
        basic.showString("" + (lista_de_texto[index]))
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (lista_de_texto[1]))
    basic.pause(100)
    basic.showString("" + (lista_de_texto[3]))
    basic.pause(100)
    basic.showString("" + (lista_de_texto[7]))
    basic.pause(100)
})
basic.forever(function () {
    lista_de_texto = [
    "Marc Z",
    "Oriol",
    "Bernat",
    "Giorgi",
    "Nayely",
    "Maria",
    "Marc",
    "Dayana"
    ]
})
