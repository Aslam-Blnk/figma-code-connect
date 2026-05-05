import React from 'react'
import { faker } from '@faker-js/faker'

import { Button } from '@/components/Button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '@/components/Command'
import {
  EmptyStateContent,
  EmptyStateContentContainer,
  EmptyStateImage,
  EmptyStateRoot,
} from '@/components/EmptyState'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'

import { OptionItem } from '../../components/OptionList/OptionListCombobox'

const CITIES_LENGTH = 60

faker.seed(CITIES_LENGTH)
const cities = Array.from({ length: CITIES_LENGTH }, () => ({
  id: faker.string.uuid(),
  value: faker.location.city(),
  address: faker.location.streetAddress(),
})).sort((a, b) => a.value.localeCompare(b.value))

export function PopoverOptionList({
  disabled = false,
}: {
  disabled?: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const [selectedCity, setSelectedCity] =
    React.useState<(typeof cities)[number]>()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="neutral"
          role="combobox"
          aria-expanded={open}
          className="w-80 justify-between"
        >
          {selectedCity?.value ?? 'Select city'}
          <span className="mui-icon material-symbols-rounded">
            keyboard_arrow_down
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command className="[&_[cmdk-empty]]:h-80 [&_[cmdk-list]]:h-80">
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
                    setOpen(false)
                  }}
                  checked={city.id === selectedCity?.id}
                />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverOptionListWithSearch() {
  const [open, setOpen] = React.useState(false)
  const [selectedCity, setSelectedCity] =
    React.useState<(typeof cities)[number]>()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="neutral"
          role="combobox"
          aria-expanded={open}
          className="w-80 justify-between"
        >
          {selectedCity?.value ?? 'Select city'}
          <span className="mui-icon material-symbols-rounded">
            keyboard_arrow_down
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command>
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
                    setOpen(false)
                  }}
                  checked={city.id === selectedCity?.id}
                />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
