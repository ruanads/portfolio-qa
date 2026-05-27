import { Given, When, Then, Before, After } from '@cucumber/cucumber'
import { expect, request, APIRequestContext } from '@playwright/test'
import { z } from 'zod'

let apiContext: APIRequestContext
let response: any
let body: any
let baseUrl: string

const UserSchema = z.object({
  login:        z.string(),
  id:           z.number(),
  public_repos: z.number(),
  followers:    z.number(),
  type:         z.literal('User'),
})

Before(async () => {
  apiContext = await request.newContext()
})

After(async () => {
  await apiContext.dispose()
})

Given('que a API base é {string}', (url: string) => {
  baseUrl = url
})

When('eu busco o usuário {string}', async (username: string) => {
  response = await apiContext.get(`${baseUrl}/users/${username}`)
  body = await response.json()
})

When('eu busco o repositório {string}', async (repo: string) => {
  response = await apiContext.get(`${baseUrl}/repos/${repo}`)
  body = await response.json()
})

Then('o status deve ser {int}', (status: number) => {
  expect(response.status()).toBe(status)
})

Then('o campo {string} deve ser {string}', (campo: string, valor: string) => {
  expect(body[campo]).toBe(valor)
})

Then('o campo {string} deve ser falso', (campo: string) => {
  expect(body[campo]).toBe(false)
})

Then('o contrato do usuário deve ser válido', () => {
  const parsed = UserSchema.safeParse(body)
  expect(parsed.success, JSON.stringify(parsed.error?.issues)).toBe(true)
})

Then('o repositório pertence ao usuário {string}', (usuario: string) => {
  expect(body.owner.login).toBe(usuario)
})