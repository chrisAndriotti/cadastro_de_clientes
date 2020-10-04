$(document).ready(function(){
    
    // SAIR DO MENU DA TELA INDEX
    $('#sair').click(function(){
        window.location.replace("login.html")
    })

    let clienteObj = []

    // MODAL DE CADASTRO DE CLIENTE , BOTÃO PARA CADASTRAR NOVO CLIENTE
    $('#setCliente').click(function(){
        $('tbody').show()
        let cliente = {
            id: 0
            ,nome: $('#nome').val()
            ,cpf: $('#cpf').val()
            ,celular: $('#celular').val()
            ,email: $('#email').val()
            ,redes: $('#redes').val()
            ,cep: $('#cep').val()
            ,rua: $('#rua').val()
            ,numero: $('#numero').val()
            ,complemento: $('#complemento').val()
        }

        let clienteLS = JSON.parse(localStorage.getItem('clientes'))

        let rep = false

        let vazio = false

        if(clienteLS == null)
            clienteObj = []
        else{
            for(let i=0; i<clienteLS.length; i++){
                if(clienteLS[i] == null){
                    vazio = true
                    i = clienteLS.length
                }
                else{
                    if(cliente.id == clienteLS[i].id || cliente.nome == clienteLS[i].nome){
                        rep = true
                        console.log('repetido ')
                        
                    }
                    clienteObj[i] = clienteLS[i]
                }
                
            }
        }

        if(rep == false && vazio == false ){
            cliente.id = clienteObj.length + 1
            clienteObj.push(cliente)
            localStorage.setItem('clientes', JSON.stringify(clienteObj))
            
            $('#cadClienteModal').modal('hide')

            let div = $('<div></div>')
            div.attr({'id':'childAlerta','class':'alert alert-success col', 'role': 'alert'})
            div.text('Cliente cadastrado com sucesso')

            $('#alerta').append(div)

            setTimeout(function(){ 
                $('#childAlerta').remove()
            }, 1500);
        }
        else{
            $('#cadClienteModal').modal('hide')

            let div = $('<div></div>')
            div.attr({'id':'childAlerta','class':'alert alert-danger col', 'role': 'alert'})
            div.text('Cliente já tem cadastro')

            $('#alerta').append(div)

            setTimeout(function(){ 
                $('#childAlerta').remove()
            }, 1500);

        }
        
        $(".form-control").val("")
    })

    //NO MODAL DE RELATORIO DE CLIENTES, PESQUISA UM CLIENTE
    $('#btnPsqCliente').click(function(){
        $('tbody').remove()

        let clienteLS = JSON.parse(localStorage.getItem('clientes'))
    
        let pos = 0
        let encontrado = false

        if(clienteLS == null)
            console.log('Local Storage vazio')
        
        for(let i=0; i<clienteLS.length; i++){
            if($('#psqCliente').val()==clienteLS[i].id || $('#psqCliente').val()==clienteLS[i].nome){
                pos = i
                encontrado = true
                console.log('posição:'+i)
            }       
            else   
                console.log(encontrado)
        }

        if(encontrado){
            let tbody = $('<tbody></tbody>')
            let tr = $('<tr></tr>')
            let tdId = $('<td></td>').text(clienteLS[pos].id)
            let tdNome = $('<td></td>').text(clienteLS[pos].nome)
            let tdCpf = $('<td></td>').text(clienteLS[pos].cpf)
            let tdCel = $('<td></td>').text(clienteLS[pos].celular)
            let tdEmail = $('<td></td>').text(clienteLS[pos].email)
            let tdRedes = $('<td></td>').text(clienteLS[pos].redes)
            let tdCep = $('<td></td>').text(clienteLS[pos].cep)
            let tdRua = $('<td></td>').text(clienteLS[pos].rua)
            let tdNumero = $('<td></td>').text(clienteLS[pos].numero)
            let tdCompl = $('<td></td>').text(clienteLS[pos].complemento)
            tr.append(tdId,tdNome,tdCpf,tdCel,tdEmail,tdRedes,tdCep,tdRua,tdNumero,tdCompl)
            // $('tbody').append(tr)
            tbody.append(tr)
            $('table').append(tbody)
        }
        else{

        }
        
    })

    //LIMPAR PESQUISA NO MODAL DE RELATORIO DE CLIENTES
    $('#limpaPesquisa').click(function(){
        $('tbody').remove()
        
    })

    // MOSTRAR TODOS OS CLIENTES CADASTRADOS MODAL DE RELATORIO DE CLIENTES
    $('#getClientes').click(function(){
        $('tbody').remove()
        
        let clienteLS = JSON.parse(localStorage.getItem('clientes'))
        
        if(clienteLS!=null){
            let tbody = $('<tbody></tbody>')
            
            for(let i=0; i<clienteLS.length; i++){
                let tr = $('<tr></tr>')
                let tdId = $('<td></td>').text(clienteLS[i].id)
                let tdNome = $('<td></td>').text(clienteLS[i].nome)
                let tdCpf = $('<td></td>').text(clienteLS[i].cpf)
                let tdCel = $('<td></td>').text(clienteLS[i].celular)
                let tdEmail = $('<td></td>').text(clienteLS[i].email)
                let tdRedes = $('<td></td>').text(clienteLS[i].redes)
                let tdCep = $('<td></td>').text(clienteLS[i].cep)
                let tdRua = $('<td></td>').text(clienteLS[i].rua)
                let tdNumero = $('<td></td>').text(clienteLS[i].numero)
                let tdCompl = $('<td></td>').text(clienteLS[i].complemento)
                tr.append(tdId,tdNome,tdCpf,tdCel,tdEmail,tdRedes,tdCep,tdRua,tdNumero,tdCompl)
                
                tbody.append(tr)
                $('table').append(tbody)
            }
        }

        
    })


})



