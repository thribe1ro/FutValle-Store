// MODIFICAÇÃO DA BARRA DO SCROOL
window.addEventListener("scroll", function() {
    var header = document.querySelector(".content");
    var logo = document.querySelector("#logo");
    header.classList.toggle("rolagem", window.scrollY >= 10)
    logo.classList.toggle("rolagem", window.scrollY >= 10)
})


//=============================================================================================================================//

// ABRIR E FECHAR QUADRADO DO 1 AO 5

function abrirContent() {
    var contentQuadrado1 = document.querySelector(".QuadradoTelaVenda1");
    var contentQuadrado2 = document.querySelector(".QuadradoTelaVenda2");
    var contentQuadrado3 = document.querySelector(".QuadradoTelaVenda3");
    var contentQuadrado4 = document.querySelector(".QuadradoTelaVenda4");
    var contentQuadrado5 = document.querySelector(".QuadradoTelaVenda5");

    if (contentQuadrado1.style.display == "flex") {
        contentQuadrado1.style.display = "none";
        contentQuadrado1.style.margin = "-150rem auto"
    } else {
        contentQuadrado1.style.display = "flex";
        contentQuadrado1.style.margin = "-118rem auto"
        contentQuadrado2.style.display = "none"
        contentQuadrado3.style.display = "none"
        contentQuadrado4.style.display = "none"
        contentQuadrado5.style.display = "none"

    }
}



function abrirContent2() {
    var contentQuadrado1 = document.querySelector(".QuadradoTelaVenda1");
    var contentQuadrado2 = document.querySelector(".QuadradoTelaVenda2");
    var contentQuadrado3 = document.querySelector(".QuadradoTelaVenda3");
    var contentQuadrado4 = document.querySelector(".QuadradoTelaVenda4");
    var contentQuadrado5 = document.querySelector(".QuadradoTelaVenda5");


    if (contentQuadrado2.style.display == "flex") {
        contentQuadrado2.style.display = "none";
        contentQuadrado2.style.margin = "-150rem auto"
    } else {
        contentQuadrado2.style.display = "flex";
        contentQuadrado2.style.margin = "-118rem auto"
        contentQuadrado1.style.display = "none"
        contentQuadrado3.style.display = "none"
        contentQuadrado4.style.display = "none"
        contentQuadrado5.style.display = "none"
    }
}

function abrirContent3() {
    var contentQuadrado1 = document.querySelector(".QuadradoTelaVenda1");
    var contentQuadrado2 = document.querySelector(".QuadradoTelaVenda2");
    var contentQuadrado3 = document.querySelector(".QuadradoTelaVenda3");
    var contentQuadrado4 = document.querySelector(".QuadradoTelaVenda4");
    var contentQuadrado5 = document.querySelector(".QuadradoTelaVenda5");


    if (contentQuadrado3.style.display == "flex") {
        contentQuadrado3.style.display = "none";
        contentQuadrado3.style.margin = "-150rem auto"
    } else {
        contentQuadrado3.style.display = "flex";
        contentQuadrado3.style.margin = "-118rem auto"
        contentQuadrado2.style.display = "none"
        contentQuadrado4.style.display = "none"
        contentQuadrado5.style.display = "none"
        contentQuadrado1.style.display = "none"
    }
}

function abrirContent4() {
    var contentQuadrado1 = document.querySelector(".QuadradoTelaVenda1");
    var contentQuadrado2 = document.querySelector(".QuadradoTelaVenda2");
    var contentQuadrado3 = document.querySelector(".QuadradoTelaVenda3");
    var contentQuadrado4 = document.querySelector(".QuadradoTelaVenda4");
    var contentQuadrado5 = document.querySelector(".QuadradoTelaVenda5");


    if (contentQuadrado4.style.display == "flex") {
        contentQuadrado4.style.display = "none";
        contentQuadrado4.style.margin = "-150rem auto"
    } else {
        contentQuadrado4.style.display = "flex";
        contentQuadrado4.style.margin = "-118rem auto"
        contentQuadrado2.style.display = "none"
        contentQuadrado3.style.display = "none"
        contentQuadrado5.style.display = "none"
        contentQuadrado1.style.display = "none"

    }
}

function abrirContent5() {
    var contentQuadrado1 = document.querySelector(".QuadradoTelaVenda1");
    var contentQuadrado2 = document.querySelector(".QuadradoTelaVenda2");
    var contentQuadrado3 = document.querySelector(".QuadradoTelaVenda3");
    var contentQuadrado4 = document.querySelector(".QuadradoTelaVenda4");
    var contentQuadrado5 = document.querySelector(".QuadradoTelaVenda5");



    if (contentQuadrado5.style.display == "flex") {
        contentQuadrado5.style.display = "none";
        contentQuadrado5.style.margin = "-150rem auto"
    } else {
        contentQuadrado5.style.display = "flex";
        contentQuadrado5.style.margin = "-118rem auto"
        contentQuadrado2.style.display = "none"
        contentQuadrado3.style.display = "none"
        contentQuadrado4.style.display = "none"
        contentQuadrado1.style.display = "none"

    }
}
// FIM DE ABRIR E FECHAR QUADRADO 1 A0 5

function selecionarCamisa(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_25.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOMEBACK24_25.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_TYPE1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_TYPE2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_TYPE3.png";
    }
    document.getElementById("iconeGrande1").src = arquivo;
}

// SÃO PAULO CASA 24
function highlightShirts1(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOMEBACK24_25.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_25.JPEG";

    }
    document.getElementById('highlight-shirts-squares-sp').src = arquivo
}

function selecionarCamisa2(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOME23.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOMEBACK23.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/corinthians/CORINTHIANS23_TYPE1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/corinthians/CORINTHIANS23_TYPE2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/corinthians/CORINTHIANS23_TYPE3.png";
    }
    document.getElementById("iconeGrande2").src = arquivo;
}

//CORINTHIANS CASA 23
function highlightShirts2(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOMEBACK23.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOME23.JPEG";

    }
    document.getElementById('highlight-shirts-squares-sccp').src = arquivo
}

function selecionarCamisa3(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25.JPEG"
    } if (tipo == 2) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOMEBACK24_25.JPEG"
    } if (tipo == 3) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25_TYPE1.JPEG"
    } if (tipo == 4) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25_TYPE2.JPEG"
    } if (tipo == 5) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25_TYPE3.png"
    }
    document.getElementById("iconeGrande3").src = arquivo;
}

//PALMEIRAS CASA 24
function highlightShirts3(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOMEBACK24_25.JPEG"
    } if (tipo == 2) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25.JPEG"

    }
    document.getElementById('highlight-shirts-squares-sep').src = arquivo
}

function selecionarCamisa4(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25.JPEG"
    } if (tipo == 2) {
        arquivo = "/image/team/palmeiras/PALMEIRASFORABACK24_25.JPEG"
    } if (tipo == 3) {
        arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25_TYPE1.JPEG"
    } if (tipo == 4) {
        arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25_TYPE2.JPEG"
    } if (tipo == 5) {
        arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25_TYPE3.JPEG"
    }
    document.getElementById("iconeGrande4").src = arquivo;
}

//PALMEIRAS FORA 24
function highlightShirts4(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/palmeiras/PALMEIRASFORABACK24_25.JPEG"
    } if (tipo == 2) {
        arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25.JPEG"

    }
    document.getElementById('highlight-shirts-squares-sep-fora').src = arquivo
}

function selecionarCamisa5(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25FRONT.JPEG"
    } if (tipo == 2) {
        arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25BACK.JPEG"
    } if (tipo == 3) {
        arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25_TYPE1.JPEG"
    } if (tipo == 4) {
        arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25_TYPE2.JPEG"
    } if (tipo == 5) {
        arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25_TYPE3.JPEG"
    }
    document.getElementById("iconeGrande5").src = arquivo;
}

// SAO PAULO FORA 24
function highlightShirts5(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25BACK.JPEG"
    } if (tipo == 2) {
        arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25FRONT.JPEG"

    }
    document.getElementById('highlight-shirts-squares-sp-fora').src = arquivo
}

// TROCAR AS IMAGENS DENTRO DOS QUADRADOS 1 AO 5

//=============================================================================================================================//

// Seletor para abrir os times brasileiros //

const select = document.getElementsByName('timesBrasileirao')
const selectCorinthians = document.getElementById('quadradoCorinthians')
const selectFlamengo = document.getElementById('quadradoFlamengo')
const selectPalmeiras = document.getElementById('quadradoPalmeiras')
const selectSaoPaulo = document.getElementById('quadradoSaoPaulo')
const selectSantos = document.getElementById('quadradoSantos')
const tamanhoLigas = document.getElementById("quadradoMaior")
const footer = document.getElementById("footer")

// Abrir as ligas //

function selectLigas() {
    const selectLigas = document.getElementsByName('selectLiga')
    const selectBrasileirao = document.getElementById('selecionarTimes')
    const letra = document.getElementById('abrirTexto')
        // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO CORINTHIANS
        var AbrirCorinthians1 = document.querySelector(".TelaAtivaVendaCorinthians1");
        var AbrirCorinthians2 = document.querySelector(".TelaAtivaVendaCorinthians2");
        var AbrirCorinthians3 = document.querySelector(".TelaAtivaVendaCorinthians3");
        var AbrirCorinthians4 = document.querySelector(".TelaAtivaVendaCorinthians4");
        // =========================================================================== //

                // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO FLAMENGO
                var AbrirFlamengo1 = document.querySelector(".TelaAtivaVendaFlamengo1");
                // =========================================================================== //
                // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO PALMEIRAS
                var AbrirPalmeiras1 = document.querySelector(".TelaAtivaVendaPalmeiras1");
                var AbrirPalmeiras2 = document.querySelector(".TelaAtivaVendaPalmeiras2");
        // =========================================================================== //
                        // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO SAO PAULO
                        var AbrirSaoPaulo1 = document.querySelector(".TelaAtivaVendaSaoPaulo1");
                        var AbrirSaoPaulo2 = document.querySelector(".TelaAtivaVendaSaoPaulo2");
                // =========================================================================== //
                // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO SANTOS
                var AbrirSantos1 = document.querySelector(".TelaAtivaVendaSantos1");
                // =========================================================================== //
                var contentQuadrado1 = document.querySelector(".QuadradoTelaVenda1");
                var contentQuadrado2 = document.querySelector(".QuadradoTelaVenda2");
                var contentQuadrado3 = document.querySelector(".QuadradoTelaVenda3");
                var contentQuadrado4 = document.querySelector(".QuadradoTelaVenda4");
                var contentQuadrado5 = document.querySelector(".QuadradoTelaVenda5");
                // =========================================================================== //

    if (selectLigas[0].checked) {
        selectBrasileirao.style.display = 'flex'
        letra.style.display = 'none'
        tamanhoLigas.style.height = "115vh"
        selectCorinthians.style.display = 'none'
        selectFlamengo.style.display = 'none'
        selectPalmeiras.style.display = 'none'
        selectSaoPaulo.style.display = 'none'
        selectSantos.style.display = 'none'

        // FECHAR QUADRADO 1 A0 5 QUANDO ESTIVER ABERTA
        contentQuadrado1.style.display = "none"
        contentQuadrado2.style.display = "none"
        contentQuadrado3.style.display = "none"
        contentQuadrado4.style.display = "none"
        contentQuadrado5.style.display = "none"
        //  ======================================== //

    // FECHAR CORINTHIANS QUANDO ESTIVER ABERTA
    AbrirCorinthians1.style.display = "none";
    AbrirCorinthians2.style.display = "none";
    AbrirCorinthians3.style.display = "none";
    AbrirCorinthians4.style.display = "none";
    //  ======================================== //
            // FECHAR FLAMENGO QUANDO ESTIVER ABERTA
            AbrirFlamengo1.style.display = "none";
            //  ======================================== //
                            // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO PALMEIRAS
                            AbrirPalmeiras1.style.display = "none";
                            AbrirPalmeiras2.style.display = "none";
                            // =========================================================================== //
                                    // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO SAO PAULO
                                    AbrirSaoPaulo1.style.display = "none";
                                    AbrirSaoPaulo2.style.display = "none";
                    // =========================================================================== //
            
                            // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO SANTOS
                            AbrirSantos1.style.display = "none";
                            // =========================================================================== //


    } if (selectLigas[1].checked) {
        selectBrasileirao.style.display = 'none'
        letra.style.display = 'none'
        tamanhoLigas.style.height = "115vh"
        selectCorinthians.style.display = 'none'
        selectFlamengo.style.display = 'none'
        selectPalmeiras.style.display = 'none'
        selectSaoPaulo.style.display = 'none'
        selectSantos.style.display = 'none'
        
        selectCorinthians.style.display = 'none'
        selectFlamengo.style.display = 'none'
        selectPalmeiras.style.display = 'none'
        selectSaoPaulo.style.display = 'none'
        selectSantos.style.display = 'none'

    // FECHAR CORINTHIANS QUANDO ESTIVER ABERTA
    AbrirCorinthians1.style.display = "none";
    AbrirCorinthians2.style.display = "none";
    AbrirCorinthians3.style.display = "none";
    AbrirCorinthians4.style.display = "none";
    //  ======================================== //
        // FECHAR FLAMENGO QUANDO ESTIVER ABERTA
        AbrirFlamengo1.style.display = "none";
        //  ======================================== //
                        // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO PALMEIRAS
                        AbrirPalmeiras1.style.display = "none";
                        AbrirPalmeiras2.style.display = "none";
                        // =========================================================================== //
                                // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO SAO PAULO
                                AbrirSaoPaulo1.style.display = "none";
                                AbrirSaoPaulo2.style.display = "none";
                // =========================================================================== //
        
                        // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO SANTOS
                        AbrirSantos1.style.display = "none";
                        // =========================================================================== //

                        contentQuadrado1.style.display = "none"
                        contentQuadrado2.style.display = "none"
                        contentQuadrado3.style.display = "none"
                        contentQuadrado4.style.display = "none"
                        contentQuadrado5.style.display = "none"
                        // =========================================================================== //
    }
}

// Abrir os times //

function selectBrasileirao() {

    // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO CORINTHIANS
    var AbrirCorinthians1 = document.querySelector(".TelaAtivaVendaCorinthians1");
    var AbrirCorinthians2 = document.querySelector(".TelaAtivaVendaCorinthians2");
    var AbrirCorinthians3 = document.querySelector(".TelaAtivaVendaCorinthians3");
    var AbrirCorinthians4 = document.querySelector(".TelaAtivaVendaCorinthians4");
    // =========================================================================== //

        // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO FLAMENGO
        var AbrirFlamengo1 = document.querySelector(".TelaAtivaVendaFlamengo1");
        // =========================================================================== //
                // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO PALMEIRAS
               var AbrirPalmeiras1 = document.querySelector(".TelaAtivaVendaPalmeiras1");
               var AbrirPalmeiras2 = document.querySelector(".TelaAtivaVendaPalmeiras2");
                // =========================================================================== //
                        // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO SAO PAULO
                        var AbrirSaoPaulo1 = document.querySelector(".TelaAtivaVendaSaoPaulo1");
                        var AbrirSaoPaulo2 = document.querySelector(".TelaAtivaVendaSaoPaulo2");
        // =========================================================================== //
                // VARIAVEIS DE FECHAR QUANDO ESTIVER ABERTO SANTOS
                var AbrirSantos1 = document.querySelector(".TelaAtivaVendaSantos1");
                // =========================================================================== //
                var contentQuadrado1 = document.querySelector(".QuadradoTelaVenda1");
                var contentQuadrado2 = document.querySelector(".QuadradoTelaVenda2");
                var contentQuadrado3 = document.querySelector(".QuadradoTelaVenda3");
                var contentQuadrado4 = document.querySelector(".QuadradoTelaVenda4");
                var contentQuadrado5 = document.querySelector(".QuadradoTelaVenda5");
                // =========================================================================== //

if (select[0].checked) {
    selectCorinthians.style.display = 'flex'
    selectFlamengo.style.display = 'none'
    selectPalmeiras.style.display = 'none'
    selectSaoPaulo.style.display = 'none'
    selectSantos.style.display = 'none'
        // FECHAR CORINTHIANS QUANDO ESTIVER ABERTA
        AbrirCorinthians1.style.display = "none";
        AbrirCorinthians2.style.display = "none";
        AbrirCorinthians3.style.display = "none";
        AbrirCorinthians4.style.display = "none";
        //  ======================================== //
        // FECHAR FLAMENGO QUANDO ESTIVER ABERTA
        AbrirFlamengo1.style.display = "none";
        //  ======================================== //
            // FECHAR PALMEIRAS QUANDO ESTIVER ABERTA
        AbrirPalmeiras1.style.display = "none";
        AbrirPalmeiras2.style.display = "none";
    // FECHAR SAO PAULO QUANDO ESTIVER ABERTA
    AbrirSaoPaulo1.style.display = "none";
    AbrirSaoPaulo2.style.display = "none";
    //  ======================================== //
    // FECHAR SANTOS QUANDO ESTIVER ABERTA
    AbrirSantos1.style.display = "none"
    //  ======================================== //
    contentQuadrado1.style.display = "none"
    contentQuadrado2.style.display = "none"
    contentQuadrado3.style.display = "none"
    contentQuadrado4.style.display = "none"
    contentQuadrado5.style.display = "none"
    // ======================================== //
    footer.style.margin = "70rem 0 0 0"

} if (select[1].checked) {
    selectCorinthians.style.display = 'none'
    selectFlamengo.style.display = 'flex'
    selectPalmeiras.style.display = 'none'
    selectSaoPaulo.style.display = 'none'
    selectSantos.style.display = 'none'
    // FECHAR CORINTHIANS QUANDO ESTIVER ABERTA
    AbrirCorinthians1.style.display = "none";
    AbrirCorinthians2.style.display = "none";
    AbrirCorinthians3.style.display = "none";
    AbrirCorinthians4.style.display = "none";
    //  ======================================== //
    // FECHAR PALMEIRAS QUANDO ESTIVER ABERTA
    AbrirFlamengo1.style.display = "none";
    //  ======================================== //
    AbrirPalmeiras1.style.display = "none";
    AbrirPalmeiras2.style.display = "none";
    // FECHAR SAO PAULO QUANDO ESTIVER ABERTA
    AbrirSaoPaulo1.style.display = "none";
    AbrirSaoPaulo2.style.display = "none";
    //  ======================================== //
    // FECHAR SANTOS QUANDO ESTIVER ABERTA
    AbrirSantos1.style.display = "none"
    //  ======================================== //
    contentQuadrado1.style.display = "none"
    contentQuadrado2.style.display = "none"
    contentQuadrado3.style.display = "none"
    contentQuadrado4.style.display = "none"
    contentQuadrado5.style.display = "none"
    // ======================================== //
    footer.style.margin = "0"

} if (select[2].checked) {
    selectCorinthians.style.display = 'none'
    selectFlamengo.style.display = 'none'
    selectPalmeiras.style.display = 'flex'
    selectSaoPaulo.style.display = 'none'
    selectSantos.style.display = 'none'
        // FECHAR CORINTHIANS QUANDO ESTIVER ABERTA
        AbrirCorinthians1.style.display = "none";
        AbrirCorinthians2.style.display = "none";
        AbrirCorinthians3.style.display = "none";
        AbrirCorinthians4.style.display = "none";
        //  ======================================== //
        // FECHAR PALMEIRAS QUANDO ESTIVER ABERTA
        AbrirFlamengo1.style.display = "none";
        //  ======================================== //
        AbrirPalmeiras1.style.display = "none";
        AbrirPalmeiras2.style.display = "none";
        // FECHAR SAO PAULO QUANDO ESTIVER ABERTA
        AbrirSaoPaulo1.style.display = "none";
        AbrirSaoPaulo2.style.display = "none";
        //  ======================================== //
        // FECHAR SANTOS QUANDO ESTIVER ABERTA
        AbrirSantos1.style.display = "none"
        //  ======================================== //
        contentQuadrado1.style.display = "none"
        contentQuadrado2.style.display = "none"
        contentQuadrado3.style.display = "none"
        contentQuadrado4.style.display = "none"
        contentQuadrado5.style.display = "none"
        // ======================================== //
        footer.style.margin = "16rem 0 0 0rem"

} if (select[3].checked) {
    selectCorinthians.style.display = 'none'
    selectFlamengo.style.display = 'none'
    selectPalmeiras.style.display = 'none'
    selectSaoPaulo.style.display = 'flex'
    selectSantos.style.display = 'none'
        // FECHAR CORINTHIANS QUANDO ESTIVER ABERTA
        AbrirCorinthians1.style.display = "none";
        AbrirCorinthians2.style.display = "none";
        AbrirCorinthians3.style.display = "none";
        AbrirCorinthians4.style.display = "none";
        //  ======================================== //
        // FECHAR PALMEIRAS QUANDO ESTIVER ABERTA
        AbrirFlamengo1.style.display = "none";
        //  ======================================== //
        AbrirPalmeiras1.style.display = "none";
        AbrirPalmeiras2.style.display = "none";
        // FECHAR SAO PAULO QUANDO ESTIVER ABERTA
        AbrirSaoPaulo1.style.display = "none";
        AbrirSaoPaulo2.style.display = "none";
        //  ======================================== //
        // FECHAR SANTOS QUANDO ESTIVER ABERTA
        AbrirSantos1.style.display = "none"
        //  ======================================== //
        contentQuadrado1.style.display = "none"
        contentQuadrado2.style.display = "none"
        contentQuadrado3.style.display = "none"
        contentQuadrado4.style.display = "none"
        contentQuadrado5.style.display = "none"
        // ======================================== //
        footer.style.margin = "16rem 0 0 0"

} if (select[4].checked) {
    selectCorinthians.style.display = 'none'
    selectFlamengo.style.display = 'none'
    selectPalmeiras.style.display = 'none'
    selectSaoPaulo.style.display = 'none'
    selectSantos.style.display = 'flex'
   // FECHAR CORINTHIANS QUANDO ESTIVER ABERTA
    AbrirCorinthians1.style.display = "none";
    AbrirCorinthians2.style.display = "none";
    AbrirCorinthians3.style.display = "none";
    AbrirCorinthians4.style.display = "none";
    //  ======================================== //
    // FECHAR PALMEIRAS QUANDO ESTIVER ABERTA
    AbrirFlamengo1.style.display = "none";
    //  ======================================== //
    AbrirPalmeiras1.style.display = "none";
    AbrirPalmeiras2.style.display = "none";
    // FECHAR SAO PAULO QUANDO ESTIVER ABERTA
    AbrirSaoPaulo1.style.display = "none";
    AbrirSaoPaulo2.style.display = "none";
    //  ======================================== //
    // FECHAR SANTOS QUANDO ESTIVER ABERTA
    AbrirSantos1.style.display = "none"
    //  ======================================== //
    contentQuadrado1.style.display = "none"
    contentQuadrado2.style.display = "none"
    contentQuadrado3.style.display = "none"
    contentQuadrado4.style.display = "none"
    contentQuadrado5.style.display = "none"
    // ======================================== //
    footer.style.margin = "0"
}

}
// PARTE ONDE CLICA NO BOTAR DE COMPRAR OU ENCOMENDAR
function Estoque() {
    
    const tamanhoCorinthiansCASA23 = document.getElementsByName('tamanhoCorinthiansCASA23')
    const tamanhoCorinthiansFORA23 = document.getElementsByName('tamanhoCorinthiansFORA23')
    const tamanhoCorinthiansCASA24 = document.getElementsByName('tamanhoCorinthiansCASA24')
    const tamanhoCorinthiansFORA24 = document.getElementsByName('tamanhoCorinthiansFORA24')

    const textoBotaoComprarSCCP1 = document.getElementById("textoBotaoComprarSCCP1")
    const textoBotaoComprarSCCP2 = document.getElementById("textoBotaoComprarSCCP2")
    const textoBotaoComprarSCCP3 = document.getElementById("textoBotaoComprarSCCP3")
    const textoBotaoComprarSCCP4 = document.getElementById("textoBotaoComprarSCCP4")

    if (tamanhoCorinthiansCASA23[0].disabled && tamanhoCorinthiansCASA23[1].disabled && tamanhoCorinthiansCASA23[2].disabled && tamanhoCorinthiansCASA23[3].disabled && tamanhoCorinthiansCASA23[4].disabled == true) {
        textoBotaoComprarSCCP1.innerHTML = `ENCOMENDAR`;
    } else {
        textoBotaoComprarSCCP1.innerHTML = `COMPRAR`;
    }
    if ( tamanhoCorinthiansFORA23[0].disabled && tamanhoCorinthiansFORA23[1].disabled && tamanhoCorinthiansFORA23[2].disabled && tamanhoCorinthiansFORA23[3].disabled && tamanhoCorinthiansFORA23[4].disabled == true) {
        textoBotaoComprarSCCP2.innerHTML = `ENCOMENDAR`;
    } else {
        textoBotaoComprarSCCP2.innerHTML = `COMPRAR`;
    }
    if (tamanhoCorinthiansCASA24[0].disabled && tamanhoCorinthiansCASA24[1].disabled && tamanhoCorinthiansCASA24[2].disabled && tamanhoCorinthiansCASA24[3].disabled && tamanhoCorinthiansCASA24[4].disabled == true) {
        textoBotaoComprarSCCP3.innerHTML = `ENCOMENDAR`;
    } else {
        textoBotaoComprarSCCP3.innerHTML = `COMPRAR`;
    }
    if (tamanhoCorinthiansFORA24[0].disabled && tamanhoCorinthiansFORA24[1].disabled && tamanhoCorinthiansFORA24[2].disabled && tamanhoCorinthiansFORA24[3].disabled && tamanhoCorinthiansFORA24[4].disabled == true) {
        textoBotaoComprarSCCP4.innerHTML = `ENCOMENDAR`;
    } else {
        textoBotaoComprarSCCP4.innerHTML = `COMPRAR`;
    }

    // FIM ESTOQUE CORINTHIANS //
    const tamanhoFlamengoCASA24 = document.getElementsByName('tamanhoFlamengoCASA24')

    const textoBotaoComprarFLA1 = document.getElementById("textoBotaoComprarFLA1")

    if (tamanhoFlamengoCASA24[0].disabled && tamanhoFlamengoCASA24[1].disabled && tamanhoFlamengoCASA24[2].disabled && tamanhoFlamengoCASA24[3].disabled && tamanhoFlamengoCASA24[4].disabled == true) {
        textoBotaoComprarFLA1.innerHTML = `ENCOMENDAR`;
    } else {
        textoBotaoComprarFLA1.innerHTML = `COMPRAR`;
    }

        // FIM ESTOQUE FLAMENGO //

        const tamanhoPalmeirasCASA24 = document.getElementsByName("tamanhoPalmeirasCASA24")
        const tamanhoPalmeirasFORA24 = document.getElementsByName("tamanhoPalmeirasFORA24")

        const textoBotaoComprarSEP1 = document.getElementById("textoBotaoComprarSEP1")
        const textoBotaoComprarSEP2 = document.getElementById("textoBotaoComprarSEP2")
        if (tamanhoPalmeirasCASA24[0].disabled && tamanhoPalmeirasCASA24[1].disabled && tamanhoPalmeirasCASA24[2].disabled && tamanhoPalmeirasCASA24[3].disabled && tamanhoPalmeirasCASA24[4].disabled == true) {
            textoBotaoComprarSEP1.innerHTML = `ENCOMENDAR`;
        } else {
            textoBotaoComprarSEP1.innerHTML = `COMPRAR`;
        }

        if (tamanhoPalmeirasFORA24[0].disabled && tamanhoPalmeirasFORA24[1].disabled && tamanhoPalmeirasFORA24[2].disabled && tamanhoPalmeirasFORA24[3].disabled && tamanhoPalmeirasFORA24[4].disabled == true) {
            textoBotaoComprarSEP2.innerHTML = `ENCOMENDAR`;
        } else {
            textoBotaoComprarSEP2.innerHTML = `COMPRAR`;
        }
        
        // FIM ESTOQUE PALMEIRAS //

        const tamanhoSaoPauloCASA24 = document.getElementsByName("tamanhoSaoPauloCASA24")
        const tamanhoSaoPauloFORA24 = document.getElementsByName("tamanhoSaoPauloFORA24")

        const textoBotaoComprarSPFC1 = document.getElementById("textoBotaoComprarSPFC1")
        const textoBotaoComprarSPFC2 = document.getElementById("textoBotaoComprarSPFC2")

        if (tamanhoSaoPauloCASA24[0].disabled && tamanhoSaoPauloCASA24[1].disabled && tamanhoSaoPauloCASA24[2].disabled && tamanhoSaoPauloCASA24[3].disabled && tamanhoSaoPauloCASA24[4].disabled == true) {
            textoBotaoComprarSPFC1.innerHTML = `ENCOMENDAR`;
        } else {
            textoBotaoComprarSPFC1.innerHTML = `COMPRAR`;
        }

        if (tamanhoSaoPauloFORA24[0].disabled && tamanhoSaoPauloFORA24[1].disabled && tamanhoSaoPauloFORA24[2].disabled && tamanhoSaoPauloFORA24[3].disabled && tamanhoSaoPauloFORA24[4].disabled == true) {
            textoBotaoComprarSPFC2.innerHTML = `ENCOMENDAR`;
        } else {
            textoBotaoComprarSPFC2.innerHTML = `COMPRAR`;
        }

        // FIM ESTOQUE SÃO PAULO //

        const tamanhoSantosCB24 = document.getElementsByName("tamanhoSantosCB24")

        const textoBotaoComprarSFC1 = document.getElementById("textoBotaoComprarSFC1")

        if (tamanhoSantosCB24[0].disabled && tamanhoSantosCB24[1].disabled && tamanhoSantosCB24[2].disabled && tamanhoSantosCB24[3].disabled && tamanhoSantosCB24[4].disabled == true) {
            textoBotaoComprarSFC1.innerHTML = `ENCOMENDAR`;
        } else {
            textoBotaoComprarSFC1.innerHTML = `COMPRAR`;
        }

        // FIM ESTOQUE SANTOS //
        
    }

// ============================================================================== //

// TUDO DO CORINTHIANS //

function abrirCorinthiansUm() {
    const AbrirCorinthians1 = document.querySelector(".TelaAtivaVendaCorinthians1");
    const AbrirCorinthians2 = document.querySelector(".TelaAtivaVendaCorinthians2");
    const AbrirCorinthians3 = document.querySelector(".TelaAtivaVendaCorinthians3");
    const AbrirCorinthians4 = document.querySelector(".TelaAtivaVendaCorinthians4");

    if (AbrirCorinthians1.style.display == "flex") {
        AbrirCorinthians1.style.display = "none";
        AbrirCorinthians1.style.margin = "-67rem auto"
    } else {
        AbrirCorinthians1.style.display = "flex";
        AbrirCorinthians1.style.margin = "-135rem auto"
        AbrirCorinthians2.style.display = "none";
        AbrirCorinthians3.style.display = "none";
        AbrirCorinthians4.style.display = "none";
    }
}

function selectCorinthiansUm(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOME23.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOMEBACK23.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/corinthians/CORINTHIANS23_TYPE1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/corinthians/CORINTHIANS23_TYPE2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/corinthians/CORINTHIANS23_TYPE3.png";
    }
    document.getElementById("iconeGrandeCorinthians1").src = arquivo;
}

function camisaCorinthiansUm(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOMEBACK23.JPEG";
    }
    if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOME23.JPEG";
    }
    document.getElementById('quadradoCorinthiansUm').src = arquivo
}

function abrirCorinthiansDois() {
    const AbrirCorinthians1 = document.querySelector(".TelaAtivaVendaCorinthians1");
    const AbrirCorinthians2 = document.querySelector(".TelaAtivaVendaCorinthians2");
    const AbrirCorinthians3 = document.querySelector(".TelaAtivaVendaCorinthians3");
    const AbrirCorinthians4 = document.querySelector(".TelaAtivaVendaCorinthians4");

    if (AbrirCorinthians2.style.display == "flex") {
        AbrirCorinthians2.style.display = "none";
        AbrirCorinthians2.style.margin = "-67rem auto"
    } else {
        AbrirCorinthians2.style.display = "flex";
        AbrirCorinthians2.style.margin = "-135rem auto"
        AbrirCorinthians1.style.display = "none";
        AbrirCorinthians3.style.display = "none";
        AbrirCorinthians4.style.display = "none";
    }
}

function selectCorinthiansDois(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANS23FORAFRONT.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANS23FORABACK.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/corinthians/CORINTHIANS23FORA_TYPE1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/corinthians/CORINTHIANS23FORA_TYPE2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/corinthians/CORINTHIANS23FORA_TYPE3.png";
    }
    document.getElementById("iconeGrandeCorinthians2").src = arquivo;
}

function camisaCorinthiansDois(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANS23FORABACK.JPEG";
    }
    if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANS23FORAFRONT.JPEG";
    }
    document.getElementById('quadradoCorinthiansDois').src = arquivo
}

function abrirCorinthiansTres() {
    const AbrirCorinthians1 = document.querySelector(".TelaAtivaVendaCorinthians1");
    const AbrirCorinthians2 = document.querySelector(".TelaAtivaVendaCorinthians2");
    const AbrirCorinthians3 = document.querySelector(".TelaAtivaVendaCorinthians3");
    const AbrirCorinthians4 = document.querySelector(".TelaAtivaVendaCorinthians4");

    if (AbrirCorinthians3.style.display == "flex") {
        AbrirCorinthians3.style.display = "none";
        AbrirCorinthians3.style.margin = "-67rem auto"
    } else {
        AbrirCorinthians3.style.display = "flex";
        AbrirCorinthians3.style.margin = "-135rem auto"
        AbrirCorinthians1.style.display = "none";
        AbrirCorinthians2.style.display = "none";
        AbrirCorinthians4.style.display = "none";
    }
}

function selectCorinthiansTres(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOME24.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOMEBACK24.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/corinthians/CORINTHIANS24_TYPE1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/corinthians/CORINTHIANS24_TYPE2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/corinthians/CORINTHIANS24_TYPE3.JPEG";
    }
    document.getElementById("iconeGrandeCorinthians3").src = arquivo;
}

function camisaCorinthiansTres(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOMEBACK24.JPEG";
    }
    if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANSHOME24.JPEG";
    }
    document.getElementById('quadradoCorinthiansTres').src = arquivo
}

function abrirCorinthiansQuatro() {
    const AbrirCorinthians1 = document.querySelector(".TelaAtivaVendaCorinthians1");
    const AbrirCorinthians2 = document.querySelector(".TelaAtivaVendaCorinthians2");
    const AbrirCorinthians3 = document.querySelector(".TelaAtivaVendaCorinthians3");
    const AbrirCorinthians4 = document.querySelector(".TelaAtivaVendaCorinthians4");

    if (AbrirCorinthians4.style.display == "flex") {
        AbrirCorinthians4.style.display = "none";
        AbrirCorinthians4.style.margin = "-67rem auto"
    } else {
        AbrirCorinthians4.style.display = "flex";
        AbrirCorinthians4.style.margin = "-135rem auto"
        AbrirCorinthians1.style.display = "none";
        AbrirCorinthians2.style.display = "none";
        AbrirCorinthians3.style.display = "none";
    }
}

function selectCorinthiansQuatro(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANS24FORAFRONT.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANS24FORABACK.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/corinthians/CORINTHIANS24FORA_TYPE1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/corinthians/CORINTHIANS24FORA_TYPE2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/corinthians/CORINTHIANS24FORA_TYPE3.JPEG";
    }
    document.getElementById("iconeGrandeCorinthians4").src = arquivo;
}

function camisaCorinthiansQuatro(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/corinthians/CORINTHIANS24FORABACK.JPEG";
    }
    if (tipo == 2) {
        arquivo = "/image/team/corinthians/CORINTHIANS24FORAFRONT.JPEG";
    }
    document.getElementById('quadradoCorinthiansQuatro').src = arquivo
}


// PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE CORINTHIANS 1
const ComprarCorinthiansCasa23 = document.querySelector(".ComprarCorinthiansCasa23")
const tamanhoCorinthiansCASA23 = document.getElementsByName('tamanhoCorinthiansCASA23')
let ERRO1 = document.getElementById('selecionarTamanhoCorinthians1')
const CorinthiansCASA23 = "Camisa Corinthians CASA 2023" 


ComprarCorinthiansCasa23.addEventListener("click", function(){
    if (ComprarCorinthiansCasa23) {
ERRO1.style.display = 'flex'
} if (tamanhoCorinthiansCASA23[0].checked) {
ERRO1.style.display = 'none'
if (ComprarCorinthiansCasa23) {
    let TamanhoSCCP = "P"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansCASA23[1].checked) {
ERRO1.style.display = 'none'
if (ComprarCorinthiansCasa23) {
    let TamanhoSCCP = "M"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansCASA23[2].checked) {
ERRO1.style.display = 'none'
if (ComprarCorinthiansCasa23) {
    let TamanhoSCCP = "G"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansCASA23[3].checked) {
ERRO1.style.display = 'none'
if (ComprarCorinthiansCasa23) {
    let TamanhoSCCP = "GG"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansCASA23[4].checked) {
ERRO1.style.display = 'none'
if (ComprarCorinthiansCasa23) {
    let TamanhoSCCP = "XG"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} else {
EncomendarCorinthiansCasa23();
}
})

function EncomendarCorinthiansCasa23() {
const tamanhoCorinthiansCASA23 = document.getElementsByName('tamanhoCorinthiansCASA23')
let ERRO1 = document.getElementById('selecionarTamanhoCorinthians1')
if (tamanhoCorinthiansCASA23[0].disabled && tamanhoCorinthiansCASA23[1].disabled && tamanhoCorinthiansCASA23[2].disabled && tamanhoCorinthiansCASA23[3].disabled && tamanhoCorinthiansCASA23[4].disabled == true) {
    if (EncomendarCorinthiansCasa23) {
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + CorinthiansCASA23)
    ERRO1.style.display = 'none'
    }
}
}

/* FIM PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE CORINTHIANS 1 */

// PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE CORINTHIANS 2
const ComprarCorinthiansFora23 = document.querySelector(".ComprarCorinthiansFora23")
const tamanhoCorinthiansFORA23 = document.getElementsByName('tamanhoCorinthiansFORA23')
let ERRO2 = document.getElementById('selecionarTamanhoCorinthians2')
const CorinthiansFORA23 = "Camisa Corinthians FORA 2023" 

ComprarCorinthiansFora23.addEventListener("click", function() {
    if (ComprarCorinthiansFora23) {
        ERRO2.style.display = "flex"
    } if (tamanhoCorinthiansFORA23[0].checked) {
        ERRO2.style.display = "none"
        if (ComprarCorinthiansFora23) {
            let TamanhoSCCP = "P"
            window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
        }
    } if (tamanhoCorinthiansFORA23[1].checked) {
        ERRO2.style.display = "none"
        if (ComprarCorinthiansFora23) {
            let TamanhoSCCP = "M"
            window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
        }
    } if (tamanhoCorinthiansFORA23[2].checked) {
        ERRO2.style.display = "none"
        if (ComprarCorinthiansFora23) {
            let TamanhoSCCP = "G"
            window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
        }
    }  if (tamanhoCorinthiansFORA23[3].checked) {
        ERRO2.style.display = "none"
        if (ComprarCorinthiansFora23) {
            let TamanhoSCCP = "GG"
            window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
        }
    }  if (tamanhoCorinthiansFORA23[4].checked) {
        ERRO2.style.display = "none"
        if (ComprarCorinthiansFora23) {
            let TamanhoSCCP = "XG"
            window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA23 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
        }
    } else {
        EncomendarCorinthiansFora23();
    }
}) 

function EncomendarCorinthiansFora23() {
    const tamanhoCorinthiansFORA23 = document.getElementsByName('tamanhoCorinthiansFORA23')
    let ERRO2 = document.getElementById('selecionarTamanhoCorinthians2')
    if (tamanhoCorinthiansFORA23[0].disabled && tamanhoCorinthiansFORA23[1].disabled && tamanhoCorinthiansFORA23[2].disabled && tamanhoCorinthiansFORA23[3].disabled && tamanhoCorinthiansFORA23[4].disabled == true) {
    if (EncomendarCorinthiansFora23) {
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + CorinthiansFORA23)
    ERRO2.style.display = 'none'
    }
}
}

/* FIM PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE CORINTHIANS 2 */

// PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE CORINTHIANS 3
const ComprarCorinthiansCasa24 = document.querySelector(".ComprarCorinthiansCasa24")
const tamanhoCorinthiansCASA24 = document.getElementsByName('tamanhoCorinthiansCASA24')
let ERRO3 = document.getElementById('selecionarTamanhoCorinthians3')
const CorinthiansCASA24 = "Camisa Corinthians CASA 2024"

ComprarCorinthiansCasa24.addEventListener("click", function(){
    if (ComprarCorinthiansCasa24) {
ERRO3.style.display = 'flex'
} if (tamanhoCorinthiansCASA24[0].checked) {
ERRO3.style.display = 'none'
if (ComprarCorinthiansCasa24) {
    let TamanhoSCCP = "P"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansCASA24[1].checked) {
if (ComprarCorinthiansCasa24) {
    let TamanhoSCCP = "M"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansCASA24[2].checked) {
if (ComprarCorinthiansCasa24) {
    let TamanhoSCCP = "G"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansCASA24[3].checked) {
if (ComprarCorinthiansCasa24) {
    let TamanhoSCCP = "GG"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansCASA24[4].checked) {
if (ComprarCorinthiansCasa24) {
    let TamanhoSCCP = "XG"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansCASA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} else {
EncomendarCorinthiansCasa24();
}
})

function EncomendarCorinthiansCasa24() {
    const tamanhoCorinthiansCASA24 = document.getElementsByName('tamanhoCorinthiansCASA24')
    let ERRO3 = document.getElementById('selecionartamanhoCorinthians3')
    if (tamanhoCorinthiansCASA24[0].disabled && tamanhoCorinthiansCASA24[1].disabled && tamanhoCorinthiansCASA24[2].disabled && tamanhoCorinthiansCASA24[3].disabled && tamanhoCorinthiansCASA24[4].disabled == true) {
    if (EncomendarCorinthiansCasa24) {
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + CorinthiansCASA24)
    ERRO3.style.display = 'none'
    }
}
}

/* FIM PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE CORINTHIANS 3 */

// PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE CORINTHIANS 4

const ComprarCorinthiansFora24 = document.querySelector(".ComprarCorinthiansFora24")
const tamanhoCorinthiansFORA24 = document.getElementsByName('tamanhoCorinthiansFORA24')
let ERRO4 = document.getElementById('selecionarTamanhoCorinthians4')
const CorinthiansFORA24 = "Camisa Corinthians FORA 2024"

ComprarCorinthiansFora24.addEventListener("click", function(){
    if (ComprarCorinthiansFora24) {
ERRO4.style.display = 'flex'
} if (tamanhoCorinthiansFORA24[0].checked) {
ERRO4.style.display = 'none'
if (ComprarCorinthiansFora24) {
    let TamanhoSCCP = "P"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansFORA24[1].checked) {
if (ComprarCorinthiansFora24) {
    let TamanhoSCCP = "M"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansFORA24[2].checked) {
if (ComprarCorinthiansFora24) {
    let TamanhoSCCP = "G"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansFORA24[3].checked) {
if (ComprarCorinthiansFora24) {
    let TamanhoSCCP = "GG"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoCorinthiansFORA24[4].checked) {
if (ComprarCorinthiansFora24) {
    let TamanhoSCCP = "XG"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + CorinthiansFORA24 + "%20tamanho%20" + TamanhoSCCP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} else {
EncomendarCorinthiansFora24();
}
})

function EncomendarCorinthiansFora24() {
    const tamanhoCorinthiansFORA24 = document.getElementsByName('tamanhoCorinthiansFORA24')
    let ERRO4 = document.getElementById('selecionartamanhoCorinthians4')
    if (tamanhoCorinthiansFORA24[0].disabled && tamanhoCorinthiansFORA24[1].disabled && tamanhoCorinthiansFORA24[2].disabled && tamanhoCorinthiansFORA24[3].disabled && tamanhoCorinthiansFORA24[4].disabled == true) {
    if (EncomendarCorinthiansFora24) {
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + CorinthiansFORA24)
    ERRO4.style.display = 'none'
    }
}
}

/* FIM PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE CORINTHIANS 4*/

//=============================================================================================================================//

// TUDO DO FLAMENGO //

function abrirFlamengoUm() {
    const AbrirFlamengo1 = document.querySelector(".TelaAtivaVendaFlamengo1");

    if (AbrirFlamengo1.style.display == "flex") {
        AbrirFlamengo1.style.display = "none";
        AbrirFlamengo1.style.margin = "-67rem auto"
    } else {
        AbrirFlamengo1.style.display = "flex";
        AbrirFlamengo1.style.margin = "-67rem auto"
    }
}

function selectFlamengoUm(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/Flamengo/FLAMENGO24CASAFRONT.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/Flamengo/FLAMENGO24BACK.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/Flamengo/FLAMENGO24CASA_TYPE_1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/Flamengo/FLAMENGO24CASA_TYPE_2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/Flamengo/FLAMENGO24CASA_TYPE_3.JPEG";
    }
    document.getElementById("iconeGrandeFlamengo1").src = arquivo;
}

function camisaFlamengoUm(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/Flamengo/FLAMENGO24BACK.JPEG";
    }
    if (tipo == 2) {
        arquivo = "/image/team/Flamengo/FLAMENGO24CASAFRONT.JPEG";
    }
    document.getElementById('quadradoFlamengoUm').src = arquivo
}


// PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE FLAMENGO 1 

const ComprarFlamengoCasa24 = document.querySelector(".ComprarFlamengoCasa24")
const tamanhoFlamengoCASA24 = document.getElementsByName('tamanhoFlamengoCASA24')
let ERRO5 = document.getElementById('selecionarTamanhoFlamengo1')
const FlamengoCASA24 = "Camisa Flamengo CASA 2024"

ComprarFlamengoCasa24.addEventListener("click", function(){
    if (ComprarFlamengoCasa24) {
ERRO5.style.display = 'flex'
} if (tamanhoFlamengoCASA24[0].checked) {
ERRO5.style.display = 'none'
if (ComprarFlamengoCasa24) {
    let TamanhoFLA = "P"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + FlamengoCASA24 + "%20tamanho%20" + TamanhoFLA + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoFlamengoCASA24[1].checked) {
if (ComprarFlamengoCasa24) {
    let TamanhoFLA = "M"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + FlamengoCASA24 + "%20tamanho%20" + TamanhoFLA + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoFlamengoCASA24[2].checked) {
if (ComprarFlamengoCasa24) {
    let TamanhoFLA = "G"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + FlamengoCASA24 + "%20tamanho%20" + TamanhoFLA + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoFlamengoCASA24[3].checked) {
if (ComprarFlamengoCasa24) {
    let TamanhoFLA = "GG"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + FlamengoCASA24 + "%20tamanho%20" + TamanhoFLA + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} if (tamanhoFlamengoCASA24[4].checked) {
if (ComprarFlamengoCasa24) {
    let TamanhoFLA = "XG"
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + FlamengoCASA24 + "%20tamanho%20" + TamanhoFLA + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
}
} else {
EncomendarFlamengoCASA24();
}
})

function EncomendarFlamengoCASA24() {
    const tamanhoFlamengoCASA24 = document.getElementsByName('tamanhoFlamengoCASA24')
    let ERRO5 = document.getElementById('selecionartamanhoFlamengo1')
    if (tamanhoFlamengoCASA24[0].disabled && tamanhoFlamengoCASA24[1].disabled && tamanhoFlamengoCASA24[2].disabled && tamanhoFlamengoCASA24[3].disabled && tamanhoFlamengoCASA24[4].disabled == true) {
    if (EncomendarFlamengoCASA24) {
    window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + FlamengoCASA24)
    ERRO5.style.display = 'none'
    }
}
}

/* FIM  PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE FLAMENGO */

//=============================================================================================================================//

// TUDO DO PALMEIRAS //

function abrirPalmeirasUm() {
    const AbrirPalmeiras1 = document.querySelector(".TelaAtivaVendaPalmeiras1");
    const AbrirPalmeiras2 = document.querySelector(".TelaAtivaVendaPalmeiras2");

    if (AbrirPalmeiras1.style.display == "flex") {
        AbrirPalmeiras1.style.display = "none";
        AbrirPalmeiras1.style.margin = "-67rem auto"
    } else {
        AbrirPalmeiras1.style.display = "flex";
        AbrirPalmeiras1.style.margin = "-67rem auto"
        AbrirPalmeiras2.style.display = "none";
    }
}

function selectPalmeirasUm(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOMEBACK24_25.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25_TYPE1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25_TYPE2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25_TYPE3.png";
    }
    document.getElementById("iconeGrandePalmeiras1").src = arquivo;
}

function camisaPalmeirasUm(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOMEBACK24_25.JPEG";
    }
    if (tipo == 2) {
        arquivo = "/image/team/palmeiras/PALMEIRASHOME24_25.JPEG";
    }
    document.getElementById('quadradoPalmeirasUm').src = arquivo
}

    function abrirPalmeirasDois() {
        const AbrirPalmeiras1 = document.querySelector(".TelaAtivaVendaPalmeiras1");
        const AbrirPalmeiras2 = document.querySelector(".TelaAtivaVendaPalmeiras2");
        
    
        if (AbrirPalmeiras2.style.display == "flex") {
            AbrirPalmeiras2.style.display = "none";
            AbrirPalmeiras2.style.margin = "-67rem auto"
        } else {
            AbrirPalmeiras2.style.display = "flex";
            AbrirPalmeiras2.style.margin = "-67rem auto"
            AbrirPalmeiras1.style.display = "none";
        }
    }
    
    function selectPalmeirasDois(tipo) {
        if (tipo == 1) {
            arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25.JPEG";
        } if (tipo == 2) {
            arquivo = "/image/team/palmeiras/PALMEIRASFORABACK24_25.JPEG";
        } if (tipo == 3) {
            arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25_TYPE1.JPEG";
        } if (tipo == 4) {
            arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25_TYPE2.JPEG";
        } if (tipo == 5) {
            arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25_TYPE3.JPEG";
        }
        document.getElementById("iconeGrandePalmeiras2").src = arquivo;
    }

    function camisaPalmeirasDois(tipo) {
        if (tipo == 1) {
            arquivo = "/image/team/palmeiras/PALMEIRASFORABACK24_25.JPEG";
        }
        if (tipo == 2) {
            arquivo = "/image/team/palmeiras/PALMEIRASFORA24_25.JPEG";
        }
        document.getElementById('quadradoPalmeirasDois').src = arquivo
    }

    // PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE PALMEIRAS 1 

    const ComprarPalmeirasCasa24 = document.querySelector(".ComprarPalmeirasCasa24")
    const tamanhoPalmeirasCASA24 = document.getElementsByName('tamanhoPalmeirasCASA24')
    let ERRO6 = document.getElementById('selecionarTamanhoPalmeiras1')
    const PalmeirasCASA24 = "Camisa Palmeiras CASA 2024"

    ComprarPalmeirasCasa24.addEventListener("click", function(){
        if (ComprarPalmeirasCasa24) {
    ERRO6.style.display = 'flex'
    } if (tamanhoPalmeirasCASA24[0].checked) {
    ERRO6.style.display = 'none'
    if (ComprarPalmeirasCasa24) {
        let TamanhoSEP = "P"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasCASA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoPalmeirasCASA24[1].checked) {
    if (ComprarPalmeirasCasa24) {
        let TamanhoSEP = "M"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasCASA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoPalmeirasCASA24[2].checked) {
    if (ComprarPalmeirasCasa24) {
        let TamanhoSEP = "G"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasCASA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoPalmeirasCASA24[3].checked) {
    if (ComprarPalmeirasCasa24) {
        let TamanhoSEP = "GG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasCASA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoPalmeirasCASA24[4].checked) {
    if (ComprarPalmeirasCasa24) {
        let TamanhoSEP = "XG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasCASA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } else {
    EncomendarPalmeirasCASA24();
    }
    })

    function EncomendarPalmeirasCASA24() {
        const tamanhoPalmeirasCASA24 = document.getElementsByName('tamanhoPalmeirasCASA24')
        let ERRO6 = document.getElementById('selecionarTamanhoPalmeiras1')
        if (tamanhoPalmeirasCASA24[0].disabled && tamanhoPalmeirasCASA24[1].disabled && tamanhoPalmeirasCASA24[2].disabled && tamanhoPalmeirasCASA24[3].disabled && tamanhoPalmeirasCASA24[4].disabled == true) {
        if (EncomendarPalmeirasCASA24) {
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + PalmeirasCASA24)
        ERRO6.style.display = 'none'
        }
    }
    }

    /* FIM PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE PALEMIRAS 1 */

    // PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE PALMEIRAS 2

    const ComprarPalmeirasFora24 = document.querySelector(".ComprarPalmeirasFora24")
    const tamanhoPalmeirasFORA24 = document.getElementsByName('tamanhoPalmeirasFORA24')
    let ERRO7 = document.getElementById('selecionarTamanhoPalmeiras2')
    const PalmeirasFORA24 = "Camisa Palmeiras FORA 2024"

    ComprarPalmeirasFora24.addEventListener("click", function(){
        if (ComprarPalmeirasFora24) {
    ERRO7.style.display = 'flex'
    } if (tamanhoPalmeirasFORA24[0].checked) {
    ERRO7.style.display = 'none'
    if (ComprarPalmeirasFora24) {
        let TamanhoSEP = "P"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasFORA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoPalmeirasFORA24[1].checked) {
    if (ComprarPalmeirasFora24) {
        let TamanhoSEP = "M"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasFORA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoPalmeirasFORA24[2].checked) {
    if (ComprarPalmeirasFora24) {
        let TamanhoSEP = "G"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasFORA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoPalmeirasFORA24[3].checked) {
    if (ComprarPalmeirasFora24) {
        let TamanhoSEP = "GG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasFORA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoPalmeirasFORA24[4].checked) {
    if (ComprarPalmeirasFora24) {
        let TamanhoSEP = "XG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + PalmeirasFORA24 + "%20tamanho%20" + TamanhoSEP + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } else {
    EncomendarPalmeirasFORA24();
    }
    })

    function EncomendarPalmeirasFORA24() {
        const tamanhoPalmeirasFORA24 = document.getElementsByName('tamanhoPalmeirasFORA24')
        let ERRO7 = document.getElementById('selecionarTamanhoPalmeiras2')
        if (tamanhoPalmeirasFORA24[0].disabled && tamanhoPalmeirasFORA24[1].disabled && tamanhoPalmeirasFORA24[2].disabled && tamanhoPalmeirasFORA24[3].disabled && tamanhoPalmeirasFORA24[4].disabled == true) {
        if (EncomendarPalmeirasCASA24) {
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + PalmeirasFORA24)
        ERRO7.style.display = 'none'
        }
    }
    }
    
    /* FIM PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE */

//=============================================================================================================================//

// TUDO DO SÃO PAULO //

    function abrirSaoPauloUm() {
    const AbrirSaoPaulo1 = document.querySelector(".TelaAtivaVendaSaoPaulo1");
    const AbrirSaoPaulo2 = document.querySelector(".TelaAtivaVendaSaoPaulo2");

    if (AbrirSaoPaulo1.style.display == "flex") {
        AbrirSaoPaulo1.style.display = "none";
        AbrirSaoPaulo1.style.margin = "-67rem auto"
    } else {
        AbrirSaoPaulo1.style.display = "flex";
        AbrirSaoPaulo1.style.margin = "-67rem auto"
        AbrirSaoPaulo2.style.display = "none";
    }
    }

    function selectSaoPauloUm(tipo) {
    if (tipo == 1) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_25.JPEG";
    } if (tipo == 2) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOMEBACK24_25.JPEG";
    } if (tipo == 3) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_TYPE1.JPEG";
    } if (tipo == 4) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_TYPE2.JPEG";
    } if (tipo == 5) {
        arquivo = "/image/team/saopaulo/SAOPAULOHOME24_TYPE3.png";
    }
    document.getElementById("iconeGrandeSaoPaulo1").src = arquivo;
    }

    function camisaSaoPauloUm(tipo) {
        if (tipo == 1) {
            arquivo = "/image/team/saopaulo/SAOPAULOHOMEBACK24_25.JPEG";
        }
        if (tipo == 2) {
            arquivo = "/image/team/saopaulo/SAOPAULOHOME24_25.JPEG";
        }
        document.getElementById('quadradoSaoPauloUm').src = arquivo
    }

    function abrirSaoPauloDois() {
        const AbrirSaoPaulo2 = document.querySelector(".TelaAtivaVendaSaoPaulo2");
        const AbrirSaoPaulo1 = document.querySelector(".TelaAtivaVendaSaoPaulo1");
    
        if (AbrirSaoPaulo2.style.display == "flex") {
            AbrirSaoPaulo2.style.display = "none";
            AbrirSaoPaulo2.style.margin = "-67rem auto"
        } else {
            AbrirSaoPaulo2.style.display = "flex";
            AbrirSaoPaulo2.style.margin = "-67rem auto"
            AbrirSaoPaulo1.style.display = "none";
        }
    }
    
    function selectSaoPauloDois(tipo) {
        if (tipo == 1) {
            arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25FRONT.JPEG";
        } if (tipo == 2) {
            arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25BACK.JPEG";
        } if (tipo == 3) {
            arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25_TYPE1.JPEG";
        } if (tipo == 4) {
            arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25_TYPE2.JPEG";
        } if (tipo == 5) {
            arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25_TYPE3.JPEG";
        }
        document.getElementById("iconeGrandeSaoPaulo2").src = arquivo;
    }

    function camisaSaoPauloDois(tipo) {
        if (tipo == 1) {
            arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25BACK.JPEG";
        }
        if (tipo == 2) {
            arquivo = "/image/team/saopaulo/SAOPAULOFORA24_25FRONT.JPEG";
        }
        document.getElementById('quadradoSaoPauloDois').src = arquivo
    }


    // PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE SAO PAULO 1

    const ComprarSaoPauloCasa24 = document.querySelector(".ComprarSaoPauloCasa24")
    const tamanhoSaoPauloCASA24 = document.getElementsByName('tamanhoSaoPauloCASA24')
    let ERRO8 = document.getElementById('selecionarTamanhoSaoPaulo1')
    const SaoPauloCASA24 = "Camisa São Paulo CASA 2024"

    ComprarSaoPauloCasa24.addEventListener("click", function(){
        if (ComprarSaoPauloCasa24) {
    ERRO8.style.display = 'flex'
    } if (tamanhoSaoPauloCASA24[0].checked) {
    ERRO8.style.display = 'none'
    if (ComprarSaoPauloCasa24) {
        let TamanhoSPFC = "P"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloCASA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSaoPauloCASA24[1].checked) {
    if (ComprarSaoPauloCasa24) {
        let TamanhoSPFC = "M"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloCASA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSaoPauloCASA24[2].checked) {
    if (ComprarSaoPauloCasa24) {
        let TamanhoSPFC = "G"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloCASA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSaoPauloCASA24[3].checked) {
    if (ComprarSaoPauloCasa24) {
        let TamanhoSPFC = "GG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloCASA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSaoPauloCASA24[4].checked) {
    if (ComprarSaoPauloCasa24) {
        let TamanhoSPFC = "XG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloCASA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } else {
    EncomendarSaoPauloCASA24();
    }
    })

    function EncomendarSaoPauloCASA24() {
        const tamanhoSaoPauloCASA24 = document.getElementsByName('tamanhoSaoPauloCASA24')
        let ERRO8 = document.getElementById('selecionarTamanhoSaoPaulo1')
        if (tamanhoSaoPauloCASA24[0].disabled && tamanhoSaoPauloCASA24[1].disabled && tamanhoSaoPauloCASA24[2].disabled && tamanhoSaoPauloCASA24[3].disabled && tamanhoSaoPauloCASA24[4].disabled == true) {
        if (EncomendarSaoPauloCASA24) {
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + SaoPauloCASA24)
        ERRO8.style.display = 'none'
        }
    }
    }

    /* FIM PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE */

    // PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE SAO PAULO 2
    const ComprarSaoPauloFora24 = document.querySelector(".ComprarSaoPauloFora24")
    const tamanhoSaoPauloFORA24 = document.getElementsByName('tamanhoSaoPauloFORA24')
    let ERRO9 = document.getElementById('selecionarTamanhoSaoPaulo2')
    const SaoPauloFORA24 = "Camisa São Paulo FORA 2024"

    ComprarSaoPauloFora24.addEventListener("click", function(){
        if (ComprarSaoPauloFora24) {
    ERRO9.style.display = 'flex'
    } if (tamanhoSaoPauloFORA24[0].checked) {
    ERRO9.style.display = 'none'
    if (ComprarSaoPauloFora24) {
        let TamanhoSPFC = "P"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloFORA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSaoPauloFORA24[1].checked) {
    if (ComprarSaoPauloFora24) {
        let TamanhoSPFC = "M"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloFORA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSaoPauloFORA24[2].checked) {
    if (ComprarSaoPauloFora24) {
        let TamanhoSPFC = "G"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloFORA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSaoPauloFORA24[3].checked) {
    if (ComprarSaoPauloFora24) {
        let TamanhoSPFC = "GG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloFORA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSaoPauloFORA24[4].checked) {
    if (ComprarSaoPauloFora24) {
        let TamanhoSPFC = "XG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SaoPauloFORA24 + "%20tamanho%20" + TamanhoSPFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } else {
    EncomendarSaoPauloFORA24();
    }
    })

    function EncomendarSaoPauloFORA24() {
        const tamanhoSaoPauloFORA24 = document.getElementsByName('tamanhoSaoPauloFORA24')
        let ERRO9 = document.getElementById('selecionarTamanhoSaoPaulo2')
        if (tamanhoSaoPauloFORA24[0].disabled && tamanhoSaoPauloFORA24[1].disabled && tamanhoSaoPauloFORA24[2].disabled && tamanhoSaoPauloFORA24[3].disabled && tamanhoSaoPauloFORA24[4].disabled == true) {
        if (EncomendarSaoPauloFORA24) {
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + SaoPauloFORA24)
        ERRO9.style.display = 'none'
        }
    }
    }

    /* FIMPARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE SAO PAULO */

//=============================================================================================================================//

// TUDO DO SANTOS //


function abrirSantosUm() {
    const AbrirSantos1 = document.querySelector(".TelaAtivaVendaSantos1");

    if (AbrirSantos1.style.display == "flex") {
        AbrirSantos1.style.display = "none";
        AbrirSantos1.style.margin = "-67rem auto"
    } else {
        AbrirSantos1.style.display = "flex";
        AbrirSantos1.style.margin = "-67rem auto"
    }
    }

    function selectSantosUm(tipo) {
        if (tipo == 1) {
            arquivo = "/image/team/santos/SANTOS_CBFRONT.JPEG";
        } if (tipo == 2) {
            arquivo = "/image/team/santos/SANTOS_CB_TYPE1.JPEG";
        } if (tipo == 3) {
            arquivo = "/image/team/santos/SANTOS_CB_TYPE2.JPEG";
        } if (tipo == 4) {
            arquivo = "/image/team/santos/SANTOS_CB_TYPE3.JPEG";
        } if (tipo == 5) {
            arquivo = "/image/team/santos/SANTOS_CB_TYPE4.JPEG";
        }
        document.getElementById("iconeGrandeSantos1").src = arquivo;
        }

        function camisaSantosUm(tipo) {
            if (tipo == 1) {
                arquivo = "/image/team/santos/SANTOS_CB_TYPE1.JPEG";
            }
            if (tipo == 2) {
                arquivo = "/image/team/santos/SANTOS_CBFRONT.JPEG";
            }
            document.getElementById('quadradoSantosUm').src = arquivo
        }

    // PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE SANTOS 1

    const ComprarSantosCB24 = document.querySelector(".ComprarSantosCB24")
    const tamanhoSantosCB24 = document.getElementsByName('tamanhoSantosCB24')
    let ERRO10 = document.getElementById('selecionarTamanhoSantos1')
    const SantosCB24 = "Camisa Santos Charlie Brown"

    ComprarSantosCB24.addEventListener("click", function(){
        if (ComprarSantosCB24) {
    ERRO10.style.display = 'flex'
    } if (tamanhoSantosCB24[0].checked) {
    ERRO10.style.display = 'none'
    if (ComprarSantosCB24) {
        let TamanhoSFC = "P"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SantosCB24 + "%20tamanho%20" + TamanhoSFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSantosCB24[1].checked) {
    if (ComprarSantosCB24) {
        let TamanhoSFC = "M"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SantosCB24 + "%20tamanho%20" + TamanhoSFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSantosCB24[2].checked) {
    if (ComprarSantosCB24) {
        let TamanhoSFC = "G"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SantosCB24 + "%20tamanho%20" + TamanhoSFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSantosCB24[3].checked) {
    if (ComprarSantosCB24) {
        let TamanhoSFC = "GG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SantosCB24 + "%20tamanho%20" + TamanhoSFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } if (tamanhoSantosCB24[4].checked) {
    if (ComprarSantosCB24) {
        let TamanhoSFC = "XG"
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%2C%20gostei%20da%20" + SantosCB24 + "%20tamanho%20" + TamanhoSFC + "%20e%20gostaria%20de%20saber%20mais%20detalhes.")
    }
    } else {
    EncomendarSantosCB24();
    }
    })

    function EncomendarSantosCB24() {
        const tamanhoSantosCB24 = document.getElementsByName('tamanhoSantosCB24')
        let ERRO10 = document.getElementById('selecionarTamanhoSantos1')
        if (tamanhoSantosCB24[0].disabled && tamanhoSantosCB24[1].disabled && tamanhoSantosCB24[2].disabled && tamanhoSantosCB24[3].disabled && tamanhoSantosCB24[4].disabled == true) {
        if (EncomendarSantosCB24) {
        window.open("https://wa.me/5512988203607?text=Ol%C3%A1%20gostaria%20de%20encomendar%20a%20" + SantosCB24)
        ERRO10.style.display = 'none'
        }
    }
    }

    /* FIM PARTE ONDE MUDA DE COMPRAR PARA ENCOMENDAR SE TIVER ESTOQUE SANTOS 1 */

//=============================================================================================================================//