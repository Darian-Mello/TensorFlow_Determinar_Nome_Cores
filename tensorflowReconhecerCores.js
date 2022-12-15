const cores = [
    {
        "nome": "Preto",
        "valores": [[0,0,0],[105,105,105],[128,128,128],[169,169,169],[192,192,192]]
    },
    {
        "nome": "Azul",
        "valores": [[240,248,255],[230,230,250],[176,224,230],[173,216,230],[135,206,250],[135,206,235],[0,191,255],[176,196,222],[30,144,255],[100,149,237],[70,130,180],[95,158,160],[123,104,238],[106,90,205],[72,61,139],[65,105,225],[0,0,255],[0,0,205],[0,0,139],[0,0,128],[25,25,112],[138,43,226],[75,0,130]]
    },
    {
        "nome": "Castanho",
        "valores": [[255,248,220],[255,235,205],[255,228,196],[255,222,173],[245,222,179],[222,184,135],[210,180,140],[188,143,143],[244,164,96],[218,165,32],[205,133,63],[210,105,30],[139,69,19],[160,82,45],[165,42,42],[128,0,0]]
    },
    {
        "nome": "Ciano",
        "valores": [[224,255,255],[0,255,255],[0,255,255],[127,255,212],[102,205,170],[175,238,238],[64,224,208],[72,209,204],[0,206,209],[32,178,170],[95,158,160],[0,139,139],[0,128,128]]
    },
    {
        "nome": "Ouro",
        "valores": [[250,250,210],[238,232,170],[240,230,140],[218,165,32],[255,215,0],[255,165,0],[255,140,0],[205,133,63],[210,105,30],[139,69,19],[160,82,45],[255,223,0],[212,175,55],[207,181,59],[197,179,88],[230,190,138],[153,101,21]]
        
    },
    {
        "nome": "Verde",
        "valores": [[124,252,0],[127,255,0],[50,205,50],[0,255,0],[34,139,34],[0,128,0],[0,100,0],[173,255,47],[154,205,50],[0,255,127],[0,250,154],[144,238,144],[152,251,152],[143,188,143],[60,179,113],[32,178,170],[46,139,87],[128,128,0],[85,107,47],[107,142,35]]
    },
    {
        "nome": "Cinza",
        "valores": [[220,220,220],[211,211,211],[192,192,192],[169,169,169],[128,128,128],[105,105,105],[119,136,153],[112,128,144],[47,79,79],[0,0,0]]
    },
    {
        "nome": "Marrom",
        "valores": [[128,0,0],[139,0,0],[165,42,42],[178,34,34],[220,20,60]]
    },
    {
        "nome": "Laranja",
        "valores": [[255,127,80],[255,99,71],[255,69,0],[255,215,0],[255,165,0],[255,140,0]]
    },
    {
        "nome": "Rosa",
        "valores": [[255,192,203],[255,182,193],[255,105,180],[255,20,147],[219,112,147],[199,21,133]]
    },
    {
        "nome": "Roxo",
        "valores": [[230,230,250],[216,191,216],[221,160,221],[238,130,238],[218,112,214],[255,0,255],[255,0,255],[186,85,211],[147,112,219],[138,43,226],[148,0,211],[153,50,204],[139,0,139],[128,0,128],[75,0,130]]
    },
    {
        "nome": "Vermelho",
        "valores": [[255,160,122],[250,128,114],[233,150,122],[240,128,128],[205,92,92],[220,20,60],[178,34,34],[255,0,0],[139,0,0],[128,0,0],[255,99,71],[255,69,0],[219,112,147]]
    },
    {
        "nome": "Branco",
        "valores": [[255,255,255],[255,250,250],[240,255,240],[245,255,250],[240,255,255],[240,248,255],[248,248,255],[245,245,245],[255,245,238],[245,245,220],[253,245,230],[255,250,240],[255,255,240],[250,235,215],[250,240,230],[255,240,245],[255,228,225],[255,222,173]]
    },
    {
        "nome": "Amarelo",
        "valores": [[255,255,224],[255,250,205],[250,250,210],[255,239,213],[255,228,181],[255,218,185],[238,232,170],[240,230,140],[189,183,107],[255,255,0],[128,128,0],[173,255,47],[154,205,50],[255,255,204],[255,255,153],[255,255,102],[255,255,51],[255,255,0],[204,204,0],[153,153,0],[102,102,0],[51,51,0]]
    },
    {
        "nome": "Bege",
        "valores": [[245,245,220]]
    },
    {
        "nome": "Cor de Marfim",
        "valores": [[255,255,240]]
    },
    {
        "nome": "Lavanda",
        "valores": [[230,230,250],[255,240,245]]
    },
    {
        "nome": "Magenta:",
        "valores": [[255,0,255],[255,0,255],[139,0,139],[128,0,128]]
    },
    {
        "nome": "Pessego ",
        "valores": [[255,218,185],[255,228,181],[255,239,213],[255,192,203]]
    },
    {
        "nome": "Prata",
        "valores": [[211,211,211],[192,192,192],[169,169,169],[128,128,128]]
    },
    {
        "nome": "Cor de pele",
        "valores": [[210,180,140],[222,184,135]]
    },
    {
        "nome": "Verde azulado",
        "valores": [[0,128,128],[0,139,139],[0,255,255]]
    },
    {
        "nome": "Turquesa",
        "valores": [[175,238,238],[64,224,208],[72,209,204],[0,206,209]]
    }
];
  
const entradas = [], respostas = [];

cores.forEach((cor, indice) => {
    const codigoCor = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    codigoCor[indice] = 1;
    cor.valores.forEach(corRGB => {
        entradas.push(corRGB);
        respostas.push(codigoCor);
    });
});

const dadosTreino = tf.tensor2d(entradas, [entradas.length, 3]);
const dadosResposta = tf.tensor2d(respostas, [respostas.length, 23]);
// cria modelo, camada de entrada e de saída
const modelo = tf.sequential();
modelo.add (
    tf.layers.dense ({
        inputShape: 3,
        units: 10,
        activation: 'sigmoid'
    })
);
modelo.add (
    tf.layers.dense({
        inputShape: 10,
        units: 23,
        activation: "softmax"
    })
);
modelo.compile ({
    loss: "categoricalCrossentropy",
    optimizer: tf.train.adam()
});

async function treinarDados () {
    for (let i = 0; i < 15; i++) {
        await modelo.fit(dadosTreino, dadosResposta, {epochs: 20});
    }
}

async function iniciar () {
    await treinarDados();
    container_aviso_treino.addClass('d-none');
    container_input.removeClass('d-none');
}

function hexToRgb (hex) {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    return ([r, g, b]);
}

async function prever () {
    const colorRGB = hexToRgb(input.value);
// Convertemos a cor para o formato q o tensor flow utiliza
    const newData = tf.tensor2d(
        [colorRGB],
        [1, 3]
    );
    const predicao = modelo.predict(newData);

    mostrarResultado(predicao);
}

async function mostrarResultado(prediction) {
//resultado [0.95, 0.12, 0.45], indicando a probabilidade de ser cada cor
//Assim, pegamos o maior
    const dados = await prediction.data();
    let maxProbability = Math.max(...dados);
    let predictionIndex = dados.indexOf(maxProbability);
//pega nome da cor
    output.innerText = cores[predictionIndex].nome;
}

const button = document.querySelector('button');
const output = document.querySelector('h1');
const input = document.querySelector('input');
const container_aviso_treino = $('.aviso_treino');
const container_input = $('.contaner_input');

button.addEventListener('click', prever);

iniciar();