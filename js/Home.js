let nameUser = localStorage.getItem("nameUser")
let nameTxt = document.getElementById("nameUser")
let nameTxt2 = document.getElementById("nameUser2")
nameTxt.innerHTML = `${nameUser}`
nameTxt2.innerHTML = `${nameUser}`

let histText = document.getElementById("Movis")
let historico = localStorage.getItem("Historico")
histText.innerHTML = historico

let saldoText = document.getElementById("saldo")
let saldoText2 = document.getElementById("saldo2")
let saldoInicial = localStorage.getItem("saldo")



saldoText.innerText = saldoInicial
saldoText2.innerText = saldoInicial

let btcText = document.getElementById("btcValor")
let btcInicial = localStorage.getItem("btnSaldo")

btcText.innerText = btcInicial

let cdiText = document.getElementById("cdiValor")
let cdiInicial = localStorage.getItem("cdiSaldo")

cdiText.innerText = cdiInicial

let acoesText = document.getElementById("acoesValor")
let acoesInicial = localStorage.getItem("acoesSaldo")

acoesText.innerText = acoesInicial
function btnReset() {
    const data = new Date()
    let dia = data.getDate()

    let saldoText = document.getElementById("saldo")
    let saldoInicial = 0

    saldoText.innerText = saldoInicial
    localStorage.setItem("saldo", saldoInicial)


    let btcText = document.getElementById("btcValor")
    let btcInicial = 0

    btcText.innerText = btcInicial
    localStorage.setItem("btnSaldo", btcInicial)

    let cdiText = document.getElementById("cdiValor")
    let cdiInicial = 0

    cdiText.innerText = cdiInicial
    localStorage.setItem("cdiSaldo", cdiInicial)


    let acoesText = document.getElementById("acoesValor")
    let acoesInicial = 0

    acoesText.innerText = acoesInicial
    localStorage.setItem("acoesSaldo", acoesInicial)

    let histText = document.getElementById("acoesValor")
    let histInicial = ``

    histText = histInicial
    localStorage.setItem("Historico", histInicial)

    atualizarMovis(dia, "Saldo e Ativos Resetados", "Reset", 0)


}
function confirmSaldo() {
    let saldoAdicionado = document.getElementById("saldoAdd").value
    let saldo = document.getElementById("saldo");
    let saldoV = document.getElementById("saldo").innerText// obs: toda variável que tem .value no final retorna string//
    let modal = document.getElementById("modal-body")
    const data = new Date()
    let dia = data.getDate()

    if (saldoAdicionado <= 0 || !saldoAdicionado) {

        alert("Saldo negativo ou igual a zero não pode ser adicionado!")

    } else {

        alert("Saldo Atualizado")
        saldo.innerText = Number(saldoV) + Number(saldoAdicionado)
        modal.style.display = "none"

        let saldoNovo = Number(saldoV) + Number(saldoAdicionado)
        localStorage.setItem("saldo", saldoNovo)
        atualizarMovis(dia, "Adição de Saldo", "Trasferência", saldoAdicionado)

    }
}
function cancelSaldo() {
    let modal = document.getElementById("modal-body")
    modal.style.display = "none"
}
function addSaldo() {
    let modal = document.getElementById("modal-body")
    modal.style.display = "flex"
}



const btn = document.getElementById("ocultBtn")
btn.addEventListener('click', function () {

    let saldo = document.getElementById("saldo")

    if (saldo.style.filter === "blur(0px)") {
        saldo.style.filter = "blur(5px)"
    } else if (saldo.style.filter === "blur(5px)") {
        saldo.style.filter = "blur(0px)"
    } else {
        alert("Deu bug pai, Não chora :)")
    }


});

function btnMovi() {

    let modal = document.getElementById("modal-movimentacao")
    modal.style.display = "flex"
};
function cancel() {
    let modal = document.getElementById("modal-movimentacao")
    modal.style.display = "none"
}

function escolher(nome) {

    let input = document.getElementById("ondeElevai")

    input.value = nome

}
function trasferir() {
    let saldo = document.getElementById("saldo")
    let saldoV = document.getElementById("saldo").innerText
    let valor = Number(document.getElementById("valor").value)
    let ondeVai = document.getElementById("ondeElevai").value.toLowerCase()
    let btc = document.getElementById("btcValor")
    let btcValor = document.getElementById("btcValor").innerText
    let modal = document.getElementById("modal-movimentacao")


    let cdi = document.getElementById("cdiValor")
    let cdiValor = document.getElementById("cdiValor").innerText

    let acoes = document.getElementById("acoesValor")
    let acoesValor = document.getElementById("acoesValor").innerText

    const data = new Date()
    let dia = data.getDate()

    if (valor > saldoV) {
        alert("Saldo insuficiente")
    } else if (!valor || !ondeVai) {
        alert("Preencha todas as informações.")
    } else if (ondeVai.includes("bitcoin") ||
        ondeVai.includes("ethereum") ||
        ondeVai.includes("dogcoin")) {

        btc.innerText = Number(valor) + Number(btcValor);

        saldo.innerText = Number(saldoV) - Number(valor);

        let saldoNovo = Number(saldoV) - Number(valor);

        localStorage.setItem("saldo", saldoNovo)

        let saldoBtc = Number(valor) + Number(btcValor)

        localStorage.setItem("btnSaldo", saldoBtc)

        alert("transação concluida!")
        atualizarMovis(dia, "Criptomoeda", "Investimento", valor)
        modal.style.display = "none"

    } else if (ondeVai.includes("cdi") || ondeVai.includes("cdb")) {

        cdi.innerText = Number(valor) + Number(cdiValor);

        saldo.innerText = Number(saldoV) - Number(valor);

        let saldoNovo = Number(saldoV) - Number(valor);

        localStorage.setItem("saldo", saldoNovo)

        let saldocdi = Number(valor) + Number(cdiValor)

        localStorage.setItem("cdiSaldo", saldocdi)

        alert("transação concluida!")

        atualizarMovis(dia, "Cdi/Renda Fixa", "Investimento", valor)

        modal.style.display = "none"
    } else if (ondeVai.includes("ações") ||
        ondeVai.includes("itaú") ||
        ondeVai.includes("petrobras") ||
        ondeVai.includes("vale") ||
        ondeVai.includes("apple")) {

        acoes.innerText = Number(valor) + Number(acoesValor);

        saldo.innerText = Number(saldoV) - Number(valor);

        let saldoNovo = Number(saldoV) - Number(valor);

        localStorage.setItem("saldo", saldoNovo)

        let saldoacoes = Number(valor) + Number(acoesValor)

        localStorage.setItem("acoesSaldo", saldoacoes)

        alert("transação concluida!")



        atualizarMovis(dia, "Renda Variável", "Investimento", valor)

        modal.style.display = "none"
    }
}

function atualizarMovis(data, nome, categoria, valor) {

    let historico = document.getElementById("Movis")

    historico.innerHTML += `
    <tr class="transaction-row">
        <td class="text-secondary small" style="font-size: 0.75rem;">${data}</td>
        <td class="fw-bold text-primary">${nome}</td>
        <td>
            <span class="transaction-badge">
                <i class='bx bx-purchase-tag-alt me-1'></i>${categoria}
            </span>
        </td>
        <td class="text-end fw-bold text-primary">
            R$ ${valor}
        </td>
    </tr>`

    localStorage.setItem("Historico", historico.innerHTML) //O .innerHTML neste caso , converte o Objeto em Texto//



}


const email = JSON.parse(localStorage.getItem("email"))
let nameEmail = document.getElementById("perfilEmail")


if (!email) {
    nameEmail.innerHTML = `Email do Usuário.`
} else {
    nameEmail.innerHTML = `${email}`
}


let patriText = document.getElementById("patrimonio")
patriText.innerHTML = (Number(btcInicial) + Number(acoesInicial) + Number(cdiInicial)).toFixed(2)



function btnPersonalizar() {

    let modal = document.getElementById("modal-Perfil")
    modal.style.display = "flex"
};
function cancelPersonalizacao() {
    let modal = document.getElementById("modal-Perfil")
    modal.style.display = "none"
}

function Personalizar() {

    let name = document.getElementById("name").value
    let nameText = document.getElementById("nameUser")
    let nameText2 = document.getElementById("nameUser2")
    nameText.innerHTML = "<h1>Usuario</h1>"
    nameText2.innerHTML = "<h1>Usuario</h1>"

    if (!name) {
        alert("Preencha tudo antes de confirmar.")
    }
    else {
        nameText.innerHTML = `${name}`
        nameText2.innerHTML = `${name}`
        localStorage.setItem("nameUser", name)


        alert("Nome do perfil atualizado!")

        let modal = document.getElementById("modal-Perfil")
        modal.style.display = "none"
    }




}