// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const basicRequest = async (url: string): Promise<any> => {
  const res = await fetch(url)

  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}
