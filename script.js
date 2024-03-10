// Função para alternar a visibilidade da resposta e girar o ícone
function alternarResposta() {
    // Seleciona o elemento resposta com base no elemento pai (.Duvida)
    const resposta = this.nextElementSibling;

    // Alternar classe 'ativo' para mostrar ou ocultar a resposta
    resposta.classList.toggle('ativo');

    // Verifica e altera o atributo aria-expanded para acessibilidade
    const aria_expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !aria_expanded);

    // Seleciona o ícone dentro do botão
    const icone = this.querySelector('i');

    // Gira o ícone ao alternar a resposta
    icone.classList.toggle('rotated');
}

// Adiciona o evento de clique para as perguntas e os botões
const perguntas = document.querySelectorAll('.duvida-pergunta, .duvida-botao');
perguntas.forEach(elemento => {
    elemento.addEventListener('click', alternarResposta);
});



// Função para redirecionar para index.html
function irParaIndex() {
    window.location.href = "index.html";
}

// Função para redirecionar para Inscricao.html
function irParaInscricao() {
    window.location.href = "Inscricao.html";
}

// Função para redirecionar para PerguntasRespostas.html
function irParaPerguntas() {
    window.location.href = "PerguntasRespostas.html";
}

// barrinnha index
document.addEventListener("DOMContentLoaded", function() {
    const expandableItems = document.querySelectorAll('.expandable');
    
    expandableItems.forEach(item => {
        item.addEventListener('click', () => {
            const subItems = item.parentNode.querySelectorAll('.sub-items');
            subItems.forEach(subItem => {
                if (subItem.style.display === 'none' || subItem.style.display === '') {
                    subItem.style.display = 'block';
                    subItem.style.height = '0px'; // Adiciona altura inicial de 0px
                    subItem.style.paddingTop = '0px'; // Adiciona preenchimento superior inicial de 0px
                    subItem.style.paddingBottom = '0px'; // Adiciona preenchimento inferior inicial de 0px
                    subItem.style.opacity = '0'; // Adiciona opacidade inicial de 0
                    setTimeout(() => {
                        subItem.style.height = 'auto'; // Altera altura para "auto" após um pequeno intervalo
                        subItem.style.paddingTop = '10px'; // Adiciona preenchimento superior
                        subItem.style.paddingBottom = '10px'; // Adiciona preenchimento inferior
                        subItem.style.opacity = '1'; // Altera opacidade para 1
                    }, 10);
                } else {
                    subItem.style.height = '0px'; // Reduz a altura de volta a 0
                    subItem.style.paddingTop = '0px'; // Remove o preenchimento superior
                    subItem.style.paddingBottom = '0px'; // Remove o preenchimento inferior
                    subItem.style.opacity = '0'; // Altera opacidade para 0
                    setTimeout(() => {
                        subItem.style.display = 'none'; // Oculta o elemento após a animação
                    }, 300);
                }
            });
        });
    });
});


// login script
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// barrinha

$(document).ready(function(){
    var slick = $('.barrinha').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><i class="bx bx-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bx bx-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Adiciona manipulador de eventos para pausar o carrossel ao clicar em um dos itens <ol>
    $('.sub-items').click(function() {
        slick.slick('slickPause'); // Pausa o carrossel
    });

    // Adiciona manipulador de eventos para retomar a reprodução automática quando clicar em um dos itens <ol>
    $('.sub-items').on('mouseleave', function() {
        slick.slick('slickPlay'); // Retoma a reprodução automática do carrossel
    });

    // Função para animação do subtítulo ao rolar a página
    function verificarVisibilidade() {
        var subtitulo = document.querySelector('.subtitulo');
        var posicaoTopo = subtitulo.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (posicaoTopo < screenHeight * 0.75) {
            subtitulo.classList.add('aparecer');
            window.removeEventListener('scroll', verificarVisibilidade); // Remove o evento de scroll após a animação ser acionada
        }
    }

    window.addEventListener('scroll', verificarVisibilidade);
});

const tds = document.querySelectorAll('.category');

  // Adiciona um evento de clique a cada 'td'
  tds.forEach(td => {
    td.addEventListener('click', () => {
      // Encontra o elemento 'ul' dentro da 'td' clicada
      const ul = td.nextElementSibling.querySelector('ul.topics');
      
      // Alterna a classe 'hidden' para mostrar ou ocultar os itens
      ul.classList.toggle('hidden');
    });
  });