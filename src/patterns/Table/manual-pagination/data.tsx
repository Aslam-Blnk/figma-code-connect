import { z } from 'zod'

const usersSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
})

const serverResponseSchema = z.object({
  users: z.array(usersSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
})

export type UserEntry = z.infer<typeof usersSchema>

type FetchDataProps = {
  pageIndex: number
  pageSize?: number
  search?: string
}

const selectKeys = 'id,firstName,lastName,age,email'

async function fetchData({
  pageIndex,
  pageSize = 10,
  search = undefined,
}: FetchDataProps) {
  const limit = pageSize.toString()
  const skip = (pageIndex * pageSize).toString()
  const url = new URL('https://dummyjson.com/users/search')
  url.searchParams.append('limit', limit)
  url.searchParams.append('skip', skip)
  if (search) {
    url.searchParams.append('q', search)
  }
  url.searchParams.append('select', selectKeys)
  const response = await fetch(url.toString())
  const data = serverResponseSchema.parse(await response.json())
  const canFetchMore = data.total > data.skip + data.limit
  const canFetchLess = data.skip > 0
  const totalPage = data.limit > 0 ? Math.ceil(data.total / data.limit) : 1
  return {
    users: data.users,
    canFetchMore,
    canFetchLess,
    totalPage,
    total: data.total,
  }
}

export { serverResponseSchema, fetchData }
