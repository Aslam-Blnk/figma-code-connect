import { faker } from '@faker-js/faker'

export type LoadManagementStatus =
  | 'NOT_CONFIGURED'
  | 'ACTIVE'
  | 'INACTIVE'
  | 'FAULTED'

export type Site = {
  id: string
  name: string
  address: string
  loadManagementStatus: LoadManagementStatus
}

const SITES_LENGTH = 100

faker.seed(SITES_LENGTH)

export const sites: Site[] = [
  ...Array.from({ length: SITES_LENGTH }, () => ({
    id: faker.string.uuid(),
    name: faker.location.city(),
    address: faker.location.streetAddress(),
    loadManagementStatus: faker.string.fromCharacters([
      'NOT_CONFIGURED',
      'ACTIVE',
      'INACTIVE',
      'FAULTED',
    ]) as LoadManagementStatus,
  })),
]
