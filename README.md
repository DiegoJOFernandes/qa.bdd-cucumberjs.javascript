# Case QA BDD CucumberJS Javascript

Este projeto utiliza Cucumber.js para validar a maioridade de uma pessoa, conforme os requisitos fornecidos.

## Como rodar o projeto

**Ao clonar o repositório instale as dependências:**
> npm i

**Para executar os testes:**
> npm test

#### Estrutura do projeto:

qa.bdd-cucumberjs.javascript/
│
├── .github/
│   └── workflows/
│       └── ci.yml               # Configuração do GitHub Actions para rodar os testes
│
├── features/
│   ├── steps/
│   │   └── pessoa.js            # Arquivo com os passos definidos para os testes
│   ├── pessoa.feature           # Arquivo Gherkin com os cenários de teste
│   └── cucumber.js              # Arquivo de configuração do Cucumber.js
│
├── pessoa.js                    # Implementação da classe Pessoa
├── package.json                 # Dependências do projeto
└── README.md                    # Documentação do projeto



#### Perguntas

Com base no vídeo BDD não é automação de teste de uma das grandes referências da nossa área de qualidade 'Elias Nogueira', explique com suas palavras o que é o BDD e como aplica-ló da maneira correta no ciclo de desenvolvimento de software?
https://www.youtube.com/watch?v=O_FiotmX0R4

Resposta 

Colaboração e Alinhamento: BDD fomenta a comunicação eficaz entre todas as partes envolvidas no projeto. Em vez de trabalhar isoladamente, os times discutem e definem os comportamentos esperados do sistema, criando um entendimento compartilhado sobre o que o software deve fazer.
Linguagem Comum: Os exemplos e cenários de comportamento são escritos em uma linguagem clara e compreensível, como a estrutura Gherkin, que segue o formato “Dado-Quando-Então”. Isso garante que tanto as pessoas técnicas quanto as não técnicas possam entender as especificações.
Foco no Comportamento: O objetivo é descrever as funcionalidades do sistema com base nos comportamentos esperados, em vez de detalhar a implementação técnica. Isso ajuda a alinhar o desenvolvimento com os resultados desejados pelo negócio.

Dado (Given): Define o estado inicial ou contexto necessário.
Quando (When): Descreve a ação que o usuário realiza ou um evento que ocorre.
Então (Then): Explica o resultado ou comportamento esperado.

Como Aplicar o BDD Corretamente
Criar Histórias de Usuário e Critérios de Aceitação: Comece escrevendo histórias que descrevam o que o usuário quer alcançar. Cada história deve ter critérios claros que definam quando a funcionalidade está completa.
Desenvolver Cenários de Comportamento: Baseie-se nos critérios de aceitação para escrever cenários usando o formato Given-When-Then. Por exemplo: “Dado que o usuário está na página de login, quando ele insere suas credenciais corretas, então ele deve ser redirecionado para a sua conta.”
Automatizar Testes Baseados em Cenários: Esses cenários podem ser usados para escrever testes automatizados que validam o comportamento do sistema. Ferramentas como Cucumber, SpecFlow ou Behave são comuns nesse processo.
Integração Contínua: Use práticas de integração e entrega contínuas para executar os testes BDD regularmente, garantindo que o software continue atendendo às expectativas à medida que é desenvolvido e atualizado.

#### Explicação

O BDD (Behavior-Driven Development) deve ser usado como uma prática para garantir que todos os membros da equipe, incluindo desenvolvedores, testers e stakeholders, estejam alinhados sobre o comportamento esperado do sistema. Ele deve ser introduzido desde a fase de requisitos, com as histórias de usuário definidas em formato Gherkin, o que facilita a compreensão e validação do comportamento esperado do software.