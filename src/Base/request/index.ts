// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const basicRequest = async (url: string): Promise<any> => {
  const res = await fetch(url)
  return res.json()
}
