$(document).ready(function(){
    let master = {
        u: "master",
        s: "0123"
    }
    $('#login').click(function(){
        if($('#usuario').val()==master.u && $('#senha').val()==master.s){
            window.location.replace("index.html")
        }
        else{
            let div = $('<div></div>')
            div.attr({'id':'childAlerta','class':'alert alert-danger col-12', 'role': 'alert'})
            div.text('Acesso negado!')
            
            $('#alerta').append(div)

            setTimeout(function(){ 
                $('#childAlerta').remove()
            }, 1500);
            
        }
    })

   
})

