Feature: Validar maioridade para consumo de bebida alcoólica

  Scenario: Pessoa maior de 17 anos pode consumir bebida alcoólica
    Given que a pessoa tem 17 anos
    When a pessoa tenta consumir bebida alcoólica
    Then a pessoa deve poder consumir bebida alcoólica

  Scenario: Pessoa menor de 17 anos não pode consumir bebida alcoólica
    Given que a pessoa tem 16 anos
    When a pessoa tenta consumir bebida alcoólica
    Then a pessoa não deve poder consumir bebida alcoólica
