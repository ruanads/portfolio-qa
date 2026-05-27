# language: pt
Funcionalidade: Validação da API do GitHub

  Contexto:
    Dado que a API base é "https://api.github.com"

  @contrato @smoke
  Cenário: Buscar usuário válido retorna dados corretos
    Quando eu busco o usuário "ruanads"
    Então o status deve ser 200
    E o campo "login" deve ser "ruanads"
    E o campo "type" deve ser "User"
    E o contrato do usuário deve ser válido

  @negativo
  Cenário: Buscar usuário inexistente retorna 404
    Quando eu busco o usuário "xyzxyz999nunca-existe"
    Então o status deve ser 404

  @contrato
  Cenário: Repositório público existe e pertence ao dono
    Quando eu busco o repositório "ruanads/portfolio-qa"
    Então o status deve ser 200
    E o campo "private" deve ser falso
    E o repositório pertence ao usuário "ruanads"