      var click=0;

      //Pega as tag´s do html
      var hotspot  = document.getElementById('ponto');
      var checkName = document.getElementsByClassName('linha');
      var visibleName = document.querySelectorAll('div > div > span');
      var boxInput = document.querySelectorAll('form > div');
      var erro     = document.querySelectorAll('form > div > input');

      function fomulario(){

        //Armazena os dados do formulário
        var name     = document.formSite.nome.value;
        var email    = document.formSite.email.value;
        var assunto  = document.formSite.assunto.value;
        var mensagem = document.formSite.mensagem.value;

        for (var i = 0; i < erro.length; i++) {
          erro[i].addEventListener('focus', function(e){
            document.getElementById("alert").innerHTML = "";
          });
        };

        erro[0].className = "";

        if(click === 0){
          if(validacao(name) === true){
            animacao();
            click++;
          };
        }else if(click === 1){
          if(validacao(email) === true){
            animacao();
            click++;
          };

        }else if(click === 2){
          if(validacao(assunto) === true){
            animacao();
            click++;
          };
        }else {
          if(validacao(mensagem) === true){
            animacao();
            click++;
          };
        };

        document.getElementById('alert').innerHTML = error;
      };

      // Função Animação
      function animacao() {
        boxInput[click].style.display = 'none';
        hotspot.style.webkitAnimationName = 'movimento-' + click.toString();
        checkName[click].style.webkitAnimationName = 'linha-corte';
        visibleName[click + 1].style.webkitAnimationName = 'titulo-anim';
        boxInput[click + 1].style.cssText = 'display:block; animation-name:boxVisible;';
      };

      //Função validação
      function validacao(stringFormulario){
        var regexString = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
        var regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        var valida = false; 

        if (click === 0) {
          if((stringFormulario !== "") && (stringFormulario.length > 5) && (regexString.test(stringFormulario) === true)){
            valida = true;
          } else if (stringFormulario === "") {               
            erro[0].className += "erro";
            error = "<i class='fa fa-exclamation'></i> Campo vazio";
          } else if (regexString.test(stringFormulario) === false) {
            erro[0].className += "erro";
            error = "<i class='fa fa-exclamation'></i> Apenas letras";
          } else {
            erro[0].className += "erro";
            error = "<i class='fa fa-exclamation'></i> Precisa ter mais de 5 caracteres";
          };
        } else if (click === 1) {
          if((stringFormulario !== "") && (regexEmail.test(stringFormulario) === true)){
            valida = true;
          } else if (stringFormulario === "") {
            error = "<i class='fa fa-exclamation'></i> Campo vazio";
          } else {
            error = "<i class='fa fa-exclamation'></i> E-mail inválido";                    
          };
        } else if (click === 2) {
          if(stringFormulario !== ""){
            valida = true;
          } else {
            error = "<i class='fa fa-exclamation'></i> Campo vazio";
          };
        } else {
          if(stringFormulario !== ""){
            valida = true;
          } else {
            error = "<i class='fa fa-exclamation'></i> Campo vazio";
          };
        };

        return valida;
      };
