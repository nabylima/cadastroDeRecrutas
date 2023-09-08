const nomeDoRecruta = prompt("Insira o primeiro nome Recruta:")
const sobrenome = prompt("Insira o sobrenome do Recruta:")
const campoDeEstudo = prompt("Insira o campo de estudo do Recruta:")
const anoDeNascimento = prompt("Insira o ano de nascimento do Recruta:")

alert (
    "Recruta Cadastrado com Sucesso!\n" +
    "\n Nome Completo do Recruta: " + nomeDoRecruta + " " + sobrenome +
    "\n Campo de estudo do Recruta: " + campoDeEstudo +
    "\n Idade do Recruta: " + (2023 - anoDeNascimento)
)

    