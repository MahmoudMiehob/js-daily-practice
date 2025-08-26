//magic answer generator

const answers = ['yes' , 'no' , 'may by' , 'ask me later'];

function generator(){
    const indexId = Math.floor(Math.random() * answers.length) ;
    return answers[indexId];
}

console.log(generator());