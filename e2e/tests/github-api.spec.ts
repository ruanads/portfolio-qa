import { test, expect } from '@playwright/test'
import { z } from 'zod'

// 1. Define o "contrato" — o que a API DEVE sempre retornar
const UserSchema = z.object({
  login:        z.string(),
  id:           z.number(),
  public_repos: z.number(),
  followers:    z.number(),
  type:         z.literal('User'),
})

test.describe('GitHub API — /users', () => {

  // caminho feliz
  test('usuário válido retorna 200 e dados corretos', async ({ request }) => {
    const res  = await request.get('https://api.github.com/users/ruanads')
    const body = await res.json()

    expect(res.status()).toBe(200)
    expect(body.login).toBe('ruanads')

    // valida o contrato com Zod
    const parsed = UserSchema.safeParse(body)
    expect(parsed.success, JSON.stringify(parsed.error?.issues)).toBe(true)
  })

  // caminho negativo
  test('usuário inexistente retorna 404', async ({ request }) => {
    const res = await request.get('https://api.github.com/users/xyzxyz999nunca-existe')

    expect(res.status()).toBe(404)
  })

  // busca de repositório real
  test('repositório portfolio-qa existe e é público', async ({ request }) => {
    const res  = await request.get('https://api.github.com/repos/ruanads/portfolio-qa')
    const body = await res.json()

    expect(res.status()).toBe(200)
    expect(body.private).toBe(false)
    expect(body.owner.login).toBe('ruanads')
  })

})