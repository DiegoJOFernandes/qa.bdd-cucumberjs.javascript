# **Case QA BDD CucumberJS Javascript**

Este projeto utiliza o **Cucumber.js** para validar a maioridade de uma pessoa, implementando o conceito de **Behavior-Driven Development (BDD)** para garantir que as funcionalidades atendam às expectativas do negócio.

---

## **Como rodar o projeto**
```bash
git clone https://github.com/seu-usuario/qa.bdd-cucumberjs.javascript.git
cd qa.bdd-cucumberjs.javascript
```

### **Instalação**
Ao clonar o repositório, instale as dependências necessárias:
```bash
npm i
```

### **Executar os testes**
Execute os testes automatizados usando:
```bash
npm test
```

---

## **Estrutura do projeto**

```plaintext
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
```

---

## **Perguntas e Respostas**

### **Com base no vídeo "BDD não é automação de teste" do Elias Nogueira, o que é BDD e como aplicá-lo corretamente no ciclo de desenvolvimento de software?**

#### **O que é BDD?**
BDD (Behavior-Driven Development) é uma prática de desenvolvimento que coloca o foco no **comportamento esperado do sistema**, promovendo a colaboração entre todos os membros da equipe, incluindo desenvolvedores, testers e stakeholders.

- **Colaboração e Alinhamento**: O BDD fomenta a comunicação entre as partes interessadas. Times discutem e definem os comportamentos esperados para criar um entendimento compartilhado sobre o que o software deve fazer.
- **Linguagem Comum**: O uso de linguagens claras, como o Gherkin, no formato “Dado-Quando-Então” (Given-When-Then), permite que tanto pessoas técnicas quanto não técnicas compreendam as especificações.
- **Foco no Comportamento**: BDD descreve funcionalidades com base no **comportamento esperado**, alinhando o desenvolvimento às necessidades do negócio.

#### **Estrutura do Gherkin**
O formato “Dado-Quando-Então” organiza os cenários de comportamento:
- **Dado (Given)**: Define o estado inicial ou contexto necessário.
- **Quando (When)**: Descreve a ação que o usuário realiza ou um evento que ocorre.
- **Então (Then)**: Explica o resultado ou comportamento esperado.

#### **Como Aplicar o BDD Corretamente**
1. **Criar Histórias de Usuário**:
   - Descreva o que o usuário deseja alcançar e defina critérios de aceitação claros.
   - Exemplo: "Como um cliente, eu quero acessar minha conta para gerenciar meus dados."
2. **Desenvolver Cenários de Comportamento**:
   - Baseado nos critérios de aceitação, escreva cenários no formato Gherkin:
     ```gherkin
     Dado que o usuário está na página de login,
     Quando ele insere credenciais válidas,
     Então ele deve ser redirecionado para sua conta.
     ```
3. **Automatizar Testes Baseados nos Cenários**:
   - Utilize ferramentas como Cucumber para automatizar os testes, garantindo que o comportamento do sistema atenda aos critérios definidos.
4. **Integração Contínua (CI)**:
   - Configure pipelines (como GitHub Actions) para executar os testes regularmente, assegurando que as mudanças no código não violem os requisitos comportamentais.

#### **Explicação**
O BDD deve ser usado desde o início do ciclo de desenvolvimento, alinhando a equipe às expectativas de negócio e promovendo uma comunicação eficaz. Cenários escritos em Gherkin garantem clareza e facilitam a validação do comportamento esperado do sistema.

---

## **Práticas Adotadas no Projeto**

1. **Cenários baseados em critérios de aceitação**:
   - Os cenários foram escritos no formato Gherkin, promovendo uma linguagem clara e compartilhada.
2. **Automação de testes com Cucumber.js**:
   - Cada cenário foi implementado como teste automatizado para validar o comportamento esperado.
3. **Pipeline de CI com GitHub Actions**:
   - Garantia de execução contínua dos testes a cada mudança no código.

---

**Autor:** Diego  
**Tecnologias Utilizadas:** JavaScript, Cucumber.js, GitHub Actions  
**Referências:** 
["BDD não é automação de teste" - Elias Nogueira](https://www.youtube.com/watch?v=O_FiotmX0R4)
["BDD Uso e Filosofia" - BeHave](https://behave.readthedocs.io/en/stable/philosophy.html)
