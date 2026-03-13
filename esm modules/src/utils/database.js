//Nós podemos colocar a extensão .mjs no nome deste arquivo para indicar que só vamos exportar funções daqui.
//Também podemos colocar .cjs para a utilização do common js
export const connectToDatabase =  async (dataName) => {  //Direct export
    //lógica de conexão

    console.log(`Conectado ao banco ${dataName}`);
}

async function disconnectToDatabase(dataName){
    console.log(`Desconectando do DB ${dataName}`);
}

//export default connectToDatabase; Quando exportamos só uma função

export {
    connectToDatabase,
    disconnectToDatabase,
}//Quando queremos exportar mais de uma função. Também é possível exportar constantes e variáveis.