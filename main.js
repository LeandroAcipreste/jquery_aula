$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    });

    $('#cancel').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enviarEnderecoImagem = $('#enviarEnderecoImagem').val(); // estou selecinando o valor que será colcoado no input
        const novoItem = $('<li></li>');// essa variável irá conluir está recebendo a tag <li>
        $(`<img src=${enviarEnderecoImagem}>`).appendTo(novoItem);//aqui estou incluindo a tag <img> valor recebido na variável enviarEnderecoImagem, na tag <li> que está na variável "novoItem"
        $(`<div>
            <a class="overlay-img-link" ${enviarEnderecoImagem}" target="_blank" tittle="link para abrir imagem">
                ver imagem em tamanho real
            </a>
        </div>`).appendTo();// aqui eu também estou incluido o link armazenda na variávelk e incorporando a tag <di> que será incluida tamém na tag <li>
        $(novoItem).appendTo('ul')//Aqqui estu incluindo o valor da variável novoItem na tag <ul> da DOM
        $(novoItem).fadeIn()//Aqui estou fazendo com o que a imagem apareça na dom com fadeIn
        $('#enviarEnderecoImagem').val('')//Aqui estou limpando o input para a próxima inclusão 
    })
});
