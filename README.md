# QA Portfolio
![QA Pipeline](https://github.com/ruanads/portfolio-qa/actions/workflows/qa-pipeline.yml/badge.svg)

## O que este projeto demonstra

- Automação E2E com Playwright
- Testes de API REST
- Testes de Contrato utilizando Zod
- BDD com Cucumber/Gherkin
- Integração contínua com GitHub Actions
- Boas práticas de organização utilizando Page Objects

Testes automatizados demonstrando E2E, API, BDD e CI/CD.
**Alvos:** API pública do GitHub (`api.github.com`)

## Stack
- Playwright + TypeScript (E2E)
- Zod (Testes de contrato para validação de Schema)
- Gherkin / Cucumber (BDD)
- GitHub Actions (CI)

## 🎯 Cobertura de Testes
Além dos testes funcionais da API, o projeto conta com **Testes de Contrato** utilizando a biblioteca **Zod**. Isso garante que a estrutura, os tipos de dados (como strings, numbers, booleans) e os campos obrigatórios dos payloads retornados pela API do GitHub permaneçam íntegros e não quebrem a aplicação cliente.

## Como rodar
```bash
npm install
npx playwright test
```
