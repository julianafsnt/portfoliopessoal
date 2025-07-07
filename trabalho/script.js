// Aguarda todo o HTML da página carregar antes de executar qualquer script para evitar erro
document.addEventListener('DOMContentLoaded', () => {

    // EFEITO DE DIGITAÇÃO 
    // Seleciona o elemento que terá o efeito
    const elementoDigitando = document.querySelector(".digitando");
    
    // Verifica se o elemento '.digitando' realmente existe na página atual
    if (elementoDigitando) {
        const texto = "Futura Desenvolvedora de Sistemas...";
        let i = 0;
        elementoDigitando.textContent = ""; // Garante que o elemento comece vazio

        function digitar() {
            if (i < texto.length) {
                elementoDigitando.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, 100); // Velocidade da digitação
            }
        }
        digitar(); // Inicia o efeito
    }

    // --- BOTÃO VOLTAR AO TOPO ---
    const botaoTopo = document.getElementById("voltar-topo");
    if (botaoTopo) {
        window.addEventListener("scroll", () => {
            // Adiciona ou remove a classe '.visivel' para mostrar/esconder o botão
            if (window.scrollY > 300) {
                botaoTopo.classList.add('visivel');
            } else {
                botaoTopo.classList.remove('visivel');
            }
        });

        botaoTopo.addEventListener("click", () => {
            // Rola a página suavemente para o topo
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // MODO ESCURO/CLARO COM MEMÓRI
    const botaoModo = document.getElementById("modo-escuro");
    if (botaoModo) {
        // Função para atualizar o ícone do botão (sol ou lua)
        const aplicarTema = () => {
            const isDark = document.body.classList.contains('dark');
            botaoModo.textContent = isDark ? "☀️" : "🌙";
        };

        // Ao carregar a página, verifica se o tema 'dark' está salvo
        if (localStorage.getItem('tema') === 'dark') {
            document.body.classList.add('dark');
        }
        
        aplicarTema();

        botaoModo.addEventListener("click", () => {
            // Alterna a classe 'dark' no body
            document.body.classList.toggle("dark");
            
            // Salva ou remove a preferência do usuário na memória do navegador caso ja tenha sido determinadi anteriormente
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('tema', 'dark');
            } else {
                localStorage.removeItem('tema');
            }
            // Atualiza o ícone
            aplicarTema();
        });
    }

    // PEQUIENA ANIMAÇÃO DAS REDES SOCIAIS
    const redesSociais = document.querySelectorAll(".social-bar a");
    if (redesSociais.length > 0) { // Verifica os icones
        redesSociais.forEach((link, index) => {
            link.style.opacity = "0";
            link.style.transition = `opacity 0.5s ease ${index * 0.15}s`;
            // Força o navegador a aplicar o estilo
            setTimeout(() => {
                link.style.opacity = "1";
            }, 100);
        });
    }

});