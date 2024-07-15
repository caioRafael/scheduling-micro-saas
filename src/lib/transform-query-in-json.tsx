export function transformQueryInJson(query: string) {
  const result: Record<string, string> = {}

  const pairs = query.split('&')

  for (const pair of pairs) {
    const [key, value] = pair.split('=')

    result[key] = value
  }

  return result
}
