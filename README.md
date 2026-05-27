# QA Portfolio

Testes automatizados demonstrando E2E, API, BDD e CI/CD.
**Alvo real:** API pública do GitHub (`api.github.com`)

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