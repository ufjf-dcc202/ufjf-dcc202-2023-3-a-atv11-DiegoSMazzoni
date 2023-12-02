const lista = ["Um", "Dois", "Três"];

export function getLista(){
    return lista;
}

export function limpaLista(){
    lista.splice(0);
}

export function adicionarNaLista(novoItem){
    lista.push(novoItem);
}

export function removeDaLista(){
    lista.splice(2);
}

//export {getlista};