import React from 'react'
import { faker } from '@faker-js/faker'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  OptionListItem,
  OptionListItemCheckMark,
  OptionListItemContentContainer,
} from '@/components/Command'
import {
  EmptyStateContent,
  EmptyStateContentContainer,
  EmptyStateImage,
  EmptyStateRoot,
} from '@/components/EmptyState'

const CITIES_LENGTH = 50

faker.seed(CITIES_LENGTH)
const cities = Array.from({ length: CITIES_LENGTH }, () => ({
  id: faker.string.uuid(),
  value: faker.location.city(),
  address: faker.location.streetAddress(),
})).sort((a, b) => a.value.localeCompare(b.value))

type OptionItemProps = Pick<
  React.ComponentProps<typeof OptionListItem>,
  'onSelect' | 'key' | 'value'
> & {
  itemLabel: string
  itemDescription?: string
  icon?: React.ReactNode
  checked?: boolean
}

const OptionItem = React.forwardRef<HTMLDivElement, OptionItemProps>(
  (
    { itemLabel, itemDescription, icon, checked = false, ...commandProps },
    ref
  ) => (
    <OptionListItem {...commandProps} ref={ref}>
      <OptionListItemContentContainer checked={checked}>
        <div className="flex flex-1 items-start gap-2">
          {icon && (
            <div className="flex w-4 flex-col py-0.5 text-icon-default [&_span]:text-base">
              {icon}
            </div>
          )}
          <div className="flex flex-col items-start gap-1">
            <p className="text-subtle text-content">{itemLabel}</p>
            {itemDescription && (
              <p className="text-subtler text-content-light">
                {itemDescription}
              </p>
            )}
          </div>
        </div>
        <OptionListItemCheckMark />
      </OptionListItemContentContainer>
    </OptionListItem>
  )
)
OptionItem.displayName = 'OptionItem'

function OptionList() {
  const [selectedCity, setSelectedCity] =
    React.useState<(typeof cities)[number]>()

  return (
    <Command>
      <input className="h-0 w-0 opacity-0" maxLength={0} readOnly />
      <CommandList>
        <CommandGroup>
          {cities.map((city) => (
            <OptionItem
              key={city.id}
              itemDescription={city.address}
              itemLabel={city.value}
              onSelect={() => {
                if (city.id === selectedCity?.id) {
                  setSelectedCity(undefined)
                } else {
                  setSelectedCity(city)
                }
              }}
              checked={city.id === selectedCity?.id}
            />
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

function OptionListWithSearch() {
  const [selectedCity, setSelectedCity] =
    React.useState<(typeof cities)[number]>()

  return (
    <Command className="[&_[cmdk-empty]]:h-80 [&_[cmdk-list]]:h-80">
      <CommandInput />
      <CommandList>
        <CommandEmpty>
          <EmptyStateRoot>
            <EmptyStateContentContainer>
              <EmptyStateImage
                src="/empty-state-no-search-result.svg"
                alt="no-search-result"
              />
              <EmptyStateContent
                content="No items match your search"
                description="We couldn't find any matches for your search. Try different keywords."
              ></EmptyStateContent>
            </EmptyStateContentContainer>
          </EmptyStateRoot>
        </CommandEmpty>
        <CommandGroup>
          {cities.map((city) => (
            <OptionItem
              key={city.id}
              itemLabel={city.value}
              itemDescription={city.address}
              onSelect={() => {
                if (city.id === selectedCity?.id) {
                  setSelectedCity(undefined)
                } else {
                  setSelectedCity(city)
                }
              }}
              checked={city.id === selectedCity?.id}
            />
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
export { OptionItem, OptionList, OptionListWithSearch }
