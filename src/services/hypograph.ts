export const hypographQuery = async (query: string) => {
   const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_API!, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
      cache: 'no-cache',
   })
   const { data } = await response.json()

   return data
}
