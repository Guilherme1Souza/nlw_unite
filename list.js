let participantes = [
    {
        nome: "Guilherme",
        email: "guilhermeeduardo@outlook.com",
        dataInscrição: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 10)
    },
    {
        nome: "Maykon",
        email: "matk@gmail.com",
        dataInscrição: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 1, 25, 22, 25)
    },
    {
        nome: "Lucas",
        email: "lucas@yahoo.com",
        dataInscrição: new Date(2024, 2, 23, 14, 30),
        dataCheckIn: new Date(2024, 2, 25, 20, 45)
    },
    {
        nome: "Ana",
        email: "ana@gmail.com",
        dataInscrição: new Date(2024, 2, 24, 10, 15),
        dataCheckIn: new Date(2024, 2, 25, 18, 0)
    },
    {
        nome: "Pedro",
        email: "pedro@hotmail.com",
        dataInscrição: new Date(2024, 2, 24, 12, 45),
        dataCheckIn: new Date(2024, 2, 25, 19, 30)
    },
    {
        nome: "Sara",
        email: "sara@gmail.com",
        dataInscrição: new Date(2024, 2, 24, 16, 0),
        dataCheckIn: new Date(2024, 2, 25, 21, 15)
    },
    {
        nome: "Luiza",
        email: "luiza@hotmail.com",
        dataInscrição: new Date(2024, 2, 24, 18, 30),
        dataCheckIn: new Date(2024, 2, 25, 22, 45)
    },
    {
        nome: "Rafael",
        email: "rafael@gmail.com",
        dataInscrição: new Date(2024, 2, 25, 8, 0),
        dataCheckIn: new Date(2024, 2, 26, 9, 20)
    },
    {
        nome: "Marina",
        email: "marina@yahoo.com",
        dataInscrição: new Date(2024, 2, 25, 10, 30),
        dataCheckIn: new Date(2024, 2, 26, 11, 45)
    },
    {
        nome: "Fernando",
        email: "fernando@gmail.com",
        dataInscrição: new Date(2024, 2, 25, 14, 15),
        dataCheckIn: new Date(2024, 2, 26, 17, 30)
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscrição = dayjs(Date.now()).to
        (participante.dataInscrição)

    const dataCheckIn = dayjs(Date.now()).to
        (participante.dataCheckIn)

    return `
<tr>
    <td>
        <strong>${participante.nome}</strong>
        <br>
        <small>${participante.email}</small>
    </td>
    <td>${dataInscrição}</td>
    <td>${dataCheckIn}</td>
</tr>
`
}

const atualizarLista = (participantes) => {
    let output = ""

    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante)
    }

    document.querySelector('tbody')
        .innerHTML = output
}

atualizarLista(participantes)