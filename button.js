        const button = document.querySelector('#botao');
        const mensa = document.querySelector('#mensagem');
        button.addEventListener('click', textoT);
        function textoT() {
            mensa.innerHTML = "Seja bem-vindo(a) à minha página! Tenha um ótimo dia!"
        }