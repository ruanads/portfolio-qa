# QA Portfolio 🚀
![QA Pipeline](https://github.com/ruanads/portfolio-qa/actions/workflows/qa-pipeline.yml/badge.svg)

Este projeto simula um pipeline real, combinando testes funcionais de interface (E2E), testes de API e validação de contrato automatizados, executados continuamente dentro de um ambiente de CI/CD.

**Alvos dos testes:** API pública do GitHub (`api.github.com`) e fluxos correlatos.

---

## 🛠️ Stack Tecnológica

* **Playwright + TypeScript:** Motor robusto para automação de ponta a ponta (E2E) e requisições HTTP.
* **Zod:** Biblioteca para testes de contrato e validação rigorosa de Schemas.
* **Gherkin / Cucumber:** Abordagem BDD (Behavior-Driven Development) para especificação viva e alinhamento com o negócio.
* **GitHub Actions:** Orquestração de CI (Integração Contínua) para execução disparada a cada commit.

---

## 🔬 O que este projeto demonstra

* **Automação E2E com Playwright:** Interação limpa com elementos de interface e gerenciamento de estados.
* **Testes de API REST:** Validação direta de endpoints, tratamento de erros e análise de performance de resposta.
* **Testes de Contrato com Zod:** Garantia de integridade de dados e validação de estruturas em tempo de execução.
* **BDD com Cucumber/Gherkin:** Cenários documentados em linguagem natural focados no comportamento do sistema.
* **Integração Contínua (CI):** Pipeline automatizado garantindo que nenhum código quebrado vá para a branch principal.
* **Page Objects Pattern:** Boas práticas de arquitetura, separando a lógica do teste da estrutura dos elementos.

---

## 🏗️ Estrutura e Arquitetura do Projeto

A organização das pastas separa as responsabilidades de automação, relatórios e especificações em BDD de forma modular:

```text
PORTFOLIO-QA
├── .github/workflows  # Pipelines de CI/CD (qa-pipeline.yml)
├── api                # Requisições HTTP e validações de endpoints
├── bdd                # Estrutura de suporte ao comportamento (BDD)
│   ├── features       # Arquivos descritivos (.feature) para cenários Cucumber
│   ├── reports        # Relatórios em HTML gerados pós-execução do BDD
│   └── steps          # Implementação técnica dos passos em TypeScript (.steps.ts)
├── docs               # Arquivos de documentação de apoio do projeto
└── e2e\tests              # Camada de testes de API utilizando Playwright Test puro
    └── github-api.spec.ts # Validações diretas de status, payloads e contratos (Zod)


---

## 🧪 Escopo e Cenários de Testes

### 🔌 Camada de API (GitHub API)
* **Consultar usuário existente:** Validação de status `200 OK`, payload correto e tempo de resposta aceitável.
* **Consultar usuário inexistente:** Cenário negativo validando o tratamento de erro e status `404 Not Found`.
* **Mapeamento de Repositórios:** Listagem e validação dos dados de repositórios públicos vinculados a um usuário.

### 🔐 Testes de Contrato (Zod)
O projeto valida o contrato da API utilizando schemas estruturados com a biblioteca Zod, garantindo que:
* A estrutura da resposta (JSON) não mude inesperadamente.
* Os tipos de dados permaneçam consistentes (ex: `id` como número, `login` como string).
* Campos obrigatórios (como `public_repos` e `html_url`) continuem presentes, mitigando o risco de quebra de integração entre a API e as aplicações clientes.

---

## 📌 Exemplos Práticos de Casos de Teste

* **CT01:** Validar que a API retorna status `200` ao buscar um usuário válido.
* **CT02:** Validar que a API retorna status `404` e mensagem de erro padrão para usuários inexistentes.
* **CT03:** Validar se o Schema da resposta do perfil do usuário contém rigorosamente os campos obrigatórios e tipos corretos via Zod.

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Executar todos os testes automatizados
npx playwright test

---

## 📊 Relatórios de Execução

O framework está configurado para gerar relatórios detalhados automaticamente após o término de cada execução, consolidando os resultados de interface, API e contrato em um único lugar.

```bash
# Para visualizar o último relatório gerado localmente
npx playwright show-report
