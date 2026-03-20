import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const repo = req.query.repo as string
  if (!repo) return res.status(400).json({ error: 'Missing repo' })

  const response = await fetch(`https://api.github.com/repos/AxelPribadi/${repo}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  const data = await response.json()
  res.status(response.status).json(data)
}
