const perguntas = [
    {
      pergunta: "Qual é a função usada para imprimir algo no console?",
      respostas:[
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2 
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas:[
        "var",
        "variável",
        "v",
      ],
      correta: 0 
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado em JavaScript?",
      respostas:[
        "String",
        "Number",
        "All of the above",
      ],
      correta: 2 
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas:[
        "==",
        "=",
        "===",
      ],
      correta: 2 
    },
    {
      pergunta: "O que o método 'forEach' faz em um array em JavaScript?",
      respostas:[
        "Adiciona um elemento ao final do array",
        "Executa uma função uma vez para cada elemento do array",
        "Remove um elemento do array",
      ],
      correta: 1 
    },
    {
      pergunta: "Qual é a maneira correta de comentar em JavaScript?",
      respostas:[
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0 
    },
    {
      pergunta: "Como você converte uma string em um número em JavaScript?",
      respostas:[
        "parseInt()",
        "toString()",
        "stringToNumber()",
      ],
      correta: 0 
    },
    {
      pergunta: "O que o operador '&&' representa em JavaScript?",
      respostas:[
        "Operador OR",
        "Operador de concatenação",
        "Operador AND",
      ],
      correta: 2 
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?",
      respostas:[
        "getElementByClass()",
        "select()",
        "getElementById()",
      ],
      correta: 2 
    },
    {
      pergunta: "Qual dos seguintes métodos remove o último elemento de um array e retorna esse elemento?",
      respostas:[
        "pop()",
        "shift()",
        "push()",
      ],
      correta: 0 
    },
  ];
  
  // Função para aparecer na tela o conteúdo de template especificamente a div quiz(pai)
  const quiz = document.querySelector('#quiz')
  // O querySelector irá pesquisar no documento a teg que precisa
  const template = document.querySelector('template')
  
  // Função para armazenar os dados e somar os acertos sem repetir 
  const corretas = new Set()
  // função para saber o total de perguntas
  const totalDePerguntas = perguntas.length
  // 
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  // loop para exibir as perguntas
  for(const item of perguntas) {
    // Função para clonar o conteúdo do template mas apenas clonará tudo se vier com o 'true'
  const quizItem = template.content.cloneNode(true)
  // Função para mudar o titulo da pergunta(item), com o quizItem que pesquisará o h3
  quizItem.querySelector('h3').textContent = item.pergunta
  
  // // novo loop para exibir as respostas
  for(let resposta of item.respostas) {
  // // Função para pegar o conteúdo de 'dt' dentro do quizItem
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    // Função que seleciona o input e atribui um valor. Neste caso foi colocado o indice(cada pergunta do quiz é um indice inicinado do zero) como o valor para que o seletor nao modifique e permaneça na pergunta o setAttribute atribui o valor e o indexOf vai selecionar o indice sw cada pergunta. 
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    // Função para selecionar o value atribuido aos itens de respostas a cada pergunta,neste caso oindexOf irá selecionar as respostas
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    // Função para saber qual indice dentro das respostas foi selecionado(event.target.value) e se está correta neste caso foi criado uma função do zero
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta =event.target.value == item.correta 
  
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  // função para deletar o item resposta que foi clonado
  quizItem.querySelector('dl dt').remove()
  // Função para colocar o conteúdo de quizItem(filhp) na tela
  quiz.appendChild(quizItem)
  }
  
  
    