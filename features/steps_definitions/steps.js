const { Given, When, Then } = require('@cucumber/cucumber');
const Pessoa = require('../../pessoa');
const pessoa = new Pessoa();

Given('que a pessoa tem {int} anos', function (idade) {
  this.idade = idade;
});

When('a pessoa tenta consumir bebida alcoólica', function () {
  this.resultado = pessoa.ehMaiorDeIdade(this.idade);
});

Then('a pessoa deve poder consumir bebida alcoólica', function () {
  if (!this.resultado) {
    throw new Error('A pessoa não foi autorizada a consumir bebida alcoólica');
  }
});

Then('a pessoa não deve poder consumir bebida alcoólica', function () {
  if (this.resultado) {
    throw new Error('A pessoa foi autorizada a consumir bebida alcoólica');
  }
});
