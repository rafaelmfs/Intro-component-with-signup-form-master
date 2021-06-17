function funcaoGeral(){
    const form = document.querySelector("#formulario");
    const inputs = form.querySelectorAll("input");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        validarCampos();
        
    })

    function validarCampos(){
        inputs.forEach(function (input){
            let iconError = input.nextElementSibling;
            let msgError = iconError.nextElementSibling;
            let div = input.parentNode;

            if(input.value === ""){
                adicionarClassesError(input, iconError, msgError, div);
            }else{
                input.classList = "";
                iconError.classList = "icon-error";
                msgError.classList = "msg-error";
                div.classList = "";
                if(input.id === "email"){
                    validarEmail(input);
                }
            }
        });
    }

    function adicionarClassesError(input, iconError, msgError, div){

        div.classList = "animacao-error";
        input.classList ="error-border";
        iconError.classList = "icon-error error";
        msgError.classList ="msg-error error";
        if(input.id === "email"){
            document.getElementById("email-invalido").classList = "msg-error";
            input.placeholder = "email@example/com";
        }

    }

    function validarEmail(input){
        const re = /\S+@\S+\.\S+/;
        let email = input.value;
        if(!re.test(email)){
            document.getElementById("email-invalido").classList = "msg-error error";
            input.nextElementSibling.classList = "icon-error error";
            input.classList = "error-border";
            input.parentNode.classList = "animacao-error";
        }
        else{
            document.getElementById("email-invalido").classList = "msg-error";
            input.nextElementSibling.classList = "icon-error";
            input.classList = "";
            input.parentNode.classList = "";

        }

    }




}

funcaoGeral();

