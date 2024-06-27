document.addEventListener('DOMContentLoaded', function() {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const bolhas = document.querySelectorAll('.bolhas span');
    const bolhas2 = document.querySelectorAll('.bolhas span:nth-of-type(even)');
    const retangulo = document.querySelector('.retangulo');
    const retangulo2 = document.querySelector('.retangulo2');
    const body = document.body;

    let clicado = false;
    let clicado2 = false;

    img1.addEventListener('click', function() {
        console.log('botao img1')
        if (!clicado) {
            // Alterar cores das bolhas
            bolhas.forEach(bolha => {
                bolha.style.background = '#FFB3C5';
                bolha.style.boxShadow = '0 0 0 10px #FFB3C544, 0 0 10px #FFB3C5, 0 0 100px #FFB3C5';
            });

            bolhas2.forEach(bolha => {
                bolha.style.background = '#FFD3B5';
                bolha.style.boxShadow = '0 0 0 10px #FFD3B544, 0 0 10px #FFD3B5, 0 0 100px #FFD3B5';
            });

            // Alterar cor e opacidade do retângulo2
            retangulo2.style.backgroundColor = '#222';
            retangulo2.style.opacity = '1';

            // Alterar cor e opacidade do retângulo principal
            retangulo.style.backgroundColor = '#FF005C';
            retangulo.style.opacity = '1';

            // Alterar cor de fundo do body
            body.style.backgroundColor = '#B0B0B0';

            clicado = true;
        } else {
            // Reverter cores das bolhas
            bolhas.forEach(bolha => {
                bolha.style.background = '#FF0072';
                bolha.style.boxShadow = '0 0 0 10px #FF007244, 0 0 50px #FF0072, 0 0 100px #FF0072';
            });

            bolhas2.forEach(bolha =>{
                bolha.style.background = '#FF7F47';
                bolha.style.boxShadow = '0 0 0 10px #FF7F4744, 0 0 10px #FF7F47, 0 0 100px #FF7F47';
            });

            // Reverter cor e opacidade do retângulo2
            retangulo2.style.backgroundColor = '#222222';
            retangulo2.style.opacity = '0.8';

            // Reverter cor e opacidade do retângulo principal
            retangulo.style.backgroundColor = '#222222';
            retangulo.style.opacity = '0.8';

            // Reverter cor de fundo do body
            body.style.backgroundColor = '#404040';

            clicado = false;
        }
    });
    
    img2.addEventListener('click', function() {
        console.log('botao img2')

        if (!clicado2) {

            bolhas.forEach(bolha => {
                bolha.style.background = '#FFB3C5';
                bolha.style.boxShadow = '0 0 0 10px #FFB3C544, 0 0 10px #FFB3C5, 0 0 100px #FFB3C5';
            });

            bolhas2.forEach(bolha => {
                bolha.style.background = '#FFD3B5';
                bolha.style.boxShadow = '0 0 0 10px #FFD3B544, 0 0 10px #FFD3B5, 0 0 100px #FFD3B5';
            });

            // Alterar cor e opacidade do retângulo2
            retangulo2.style.backgroundColor = '#ff8426';
            retangulo2.style.opacity = '1';

            // Alterar cor e opacidade do retângulo principal
            retangulo.style.backgroundColor = '#222';
            retangulo.style.opacity = '1';

            // Alterar cor de fundo do body
            body.style.backgroundColor = '#B0B0B0';

            clicado2 = true;
            clicado = false;

        } else {
            // Reverter cores das bolhas
            bolhas.forEach(bolha => {
                bolha.style.background = '#FF0072';
                bolha.style.boxShadow = '0 0 0 10px #FF007244, 0 0 50px #FF0072, 0 0 100px #FF0072';
            });

            bolhas2.forEach(bolha =>{
                bolha.style.background = '#FF7F47';
                bolha.style.boxShadow = '0 0 0 10px #FF7F4744, 0 0 10px #FF7F47, 0 0 100px #FF7F47';
            });

            // Reverter cor e opacidade do retângulo2
            retangulo2.style.backgroundColor = '#222222';
            retangulo2.style.opacity = '0.8';

            // Reverter cor e opacidade do retângulo principal
            retangulo.style.backgroundColor = '#222222';
            retangulo.style.opacity = '0.8';

            // Reverter cor de fundo do body
            body.style.backgroundColor = '#404040';

            clicado2 = false;
        }
    });        
});

    function showSection(section) {
        var itemSelecionado = document.getElementById(section);

        var items = document.querySelectorAll('.section');
        items.forEach(function(item) {
            if(item.id == itemSelecionado.id){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Chamar a função showSection com a seção inicial que deseja mostrar
    showSection('SobreMim');

    