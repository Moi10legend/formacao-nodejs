class Personagem{
    constructor(nome, velocidade, manobrabilidade, poder){
        this.nome = nome
        this.velocidade = velocidade
        this.manobrabilidade = manobrabilidade
        this.poder = poder
    }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); // Arredonda o mínimo para cima
  max = Math.floor(max); // Arredonda o máximo para baixo
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main(personagem1, personagem2){

    blocosDaPista = ["Reta", "Curva", "Confronto"]

    console.log("Sejam bem-vindos a mais uma corrida universal Mario Kart!🏎️")
    console.log(`A disputa de hoje será: ${personagem1.nome} Vs ${personagem2.nome}`)
    let pontuacaoP1 = 0
    let pontuacaoP2 = 0

    for(let i = 1; i <= 5; i++){
        console.log(`\nRodada ${i}`)
        let bloco = blocosDaPista[getRandomIntInclusive(0, 2)]
        console.log(`bloco: ${bloco}`)
        
        let resultadoDado1 = 0
        let resultadoDado2 = 0
        // let pontuacaoDueloP1 = 0
        // let pontuacaoDueloP2 = 0
        switch (bloco){
            case "Reta":
                resultadoDado1 = getRandomIntInclusive(1, 6)
                console.log(`O ${personagem1.nome} tirou ${resultadoDado1} + ${personagem1.velocidade} = ${resultadoDado1 + personagem1.velocidade}`)
                resultadoDado2 = getRandomIntInclusive(1, 6)
                console.log(`O ${personagem2.nome} tirou ${resultadoDado2} + ${personagem2.velocidade} = ${resultadoDado2 + personagem2.velocidade}`)

                if ((resultadoDado1 + personagem1.velocidade) > (resultadoDado2 + personagem2.velocidade)){
                    pontuacaoP1 += 1;
                    console.log(`${personagem1.nome} venceu e somou um ponto!`)
                }else if((resultadoDado1 + personagem1.velocidade) < (resultadoDado2 + personagem2.velocidade)){
                    pontuacaoP2 += 1;
                    console.log(`${personagem2.nome} venceu e somou um ponto!`)
                }
                break;
            
            case "Curva":
                resultadoDado1 = getRandomIntInclusive(1, 6)
                console.log(`O ${personagem1.nome} tirou ${resultadoDado1} + ${personagem1.manobrabilidade} = ${resultadoDado1 + personagem1.manobrabilidade}`)
                resultadoDado2 = getRandomIntInclusive(1, 6)
                console.log(`O ${personagem2.nome} tirou ${resultadoDado2} + ${personagem2.manobrabilidade} = ${resultadoDado2 + personagem2.manobrabilidade}`)

                if ((resultadoDado1 + personagem1.manobrabilidade) > (resultadoDado2 + personagem2.manobrabilidade)){
                    pontuacaoP1 += 1;
                    console.log(`${personagem1.nome} venceu e somou um ponto!`)
                }else if((resultadoDado1 + personagem1.manobrabilidade) < (resultadoDado2 + personagem2.manobrabilidade)){
                    pontuacaoP2 += 1;
                    console.log(`${personagem2.nome} venceu e somou um ponto!`)
                }
                break;

            case "Confronto":
                resultadoDado1 = getRandomIntInclusive(1, 6)
                console.log(`O ${personagem1.nome} tirou ${resultadoDado1} + ${personagem1.poder} = ${resultadoDado1 + personagem1.poder}`)
                resultadoDado2 = getRandomIntInclusive(1, 6)
                console.log(`O ${personagem2.nome} tirou ${resultadoDado2} + ${personagem2.poder} = ${resultadoDado2 + personagem2.poder}`)

                if ((resultadoDado1 + personagem1.poder) > (resultadoDado2 + personagem2.poder)){
                    if(pontuacaoP2 > 0){
                        pontuacaoP2 -= 1;
                        console.log(`${personagem1.nome} venceu e ${personagem2.nome} perdeu um ponto`)
                    }
                    
                }else if((resultadoDado1 + personagem1.poder) < (resultadoDado2 + personagem2.poder)){
                    if(pontuacaoP1 > 0){
                        pontuacaoP1 -= 1;
                        console.log(`${personagem2.nome} venceu e ${personagem1.nome} perdeu um ponto`)
                    }
                }
                break;
        }
    }

    console.log(`\n${personagem1.nome} pontuou ${pontuacaoP1} pontos`)
    console.log(`${personagem2.nome} pontuou ${pontuacaoP2} pontos`)
    if (pontuacaoP1 > pontuacaoP2){
        console.log(`\n${personagem1.nome} ganhou a corrida!`)     
    }else if(pontuacaoP1 < pontuacaoP2){
        console.log(`\n${personagem2.nome} ganhou a corrida!`)
    }
}

const peach = new Personagem("Peach", 3, 4, 2)
const mario = new Personagem("Super Mário", 4, 3, 3)
const yoshi = new Personagem("Yoshi", 2, 4, 3)
const bowser = new Personagem("Bowser", 5, 2, 5)
const luigi = new Personagem("Luigi", 3, 4, 4)
const donkeyKong = new Personagem("Donkey Kong", 2, 2, 5)

main(mario, luigi)