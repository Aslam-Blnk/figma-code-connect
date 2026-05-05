import React from 'react'
import { faker } from '@faker-js/faker'

import { Button } from '@/components/Button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  MultiOptionListFooter,
  MultiOptionListFooterActions,
  MultiOptionListFooterText,
  MultiOptionListHeader,
  MultiOptionListHeading,
} from '@/components/Command'
import {
  EmptyStateContent,
  EmptyStateContentContainer,
  EmptyStateImage,
  EmptyStateRoot,
} from '@/components/EmptyState'
import { FilterRoot } from '@/components/Filter'
import { LinkButton } from '@/components/LinkButton'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
import { Tag, TagOptionCancel } from '@/components/Tag'

import {
  CommandCheckbox,
  MultiOptionItem,
} from '../../components/MultiOptionList/MultiOptionListCombobox'
import { OptionItem } from '../../components/OptionList/OptionListCombobox'

const CITIES_LENGTH = 20

faker.seed(CITIES_LENGTH)
const cities = Array.from({ length: CITIES_LENGTH }, () => ({
  id: faker.string.uuid(),
  value: faker.location.city(),
  address: faker.location.streetAddress(),
})).sort((a, b) => a.value.localeCompare(b.value))

export function PopoverFilterMultiOptionList({
  disabled = false,
}: {
  disabled?: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const [commandSelectedCities, setCommandSelectedCities] = React.useState<
    (typeof cities)[number][]
  >([])
  const commandSelectedCitiesLength = commandSelectedCities.length
  const [selectedCities, setSelectedCities] = React.useState<
    (typeof cities)[number][]
  >([])
  const selectedCitiesLength = selectedCities.length

  const handleClear = React.useCallback(() => {
    setCommandSelectedCities([])
    setSelectedCities([])
  }, [])

  return (
    <Popover
      open={open}
      onOpenChange={(value) => {
        setOpen(value)
        if (!value) {
          setSelectedCities(commandSelectedCities)
        }
      }}
    >
      <PopoverTrigger asChild disabled={disabled}>
        <FilterRoot isFilled={selectedCitiesLength > 0}>
          <span className="mui-icon material-symbols-rounded">filter_list</span>
          Cities
          {selectedCitiesLength > 0 && (
            <Tag>
              {selectedCitiesLength}
              <LinkButton
                variant="neutral"
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  handleClear()
                }}
              >
                <span className="mui-icon material-symbols-rounded">close</span>
              </LinkButton>
            </Tag>
          )}
        </FilterRoot>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command className="[&_[cmdk-input-wrapper]]:border-none">
          <CommandInput placeholder="Search cities..." />
          <MultiOptionListHeader>
            <CommandCheckbox
              checked={
                commandSelectedCitiesLength == cities.length
                  ? true
                  : commandSelectedCitiesLength > 0
                    ? 'indeterminate'
                    : false
              }
              selectedCitiesLength={commandSelectedCitiesLength}
              setSelectedCities={setCommandSelectedCities}
              itemList={cities}
            />
            <MultiOptionListHeading>
              <span className="mui-icon material-symbols-rounded">
                ev_station
              </span>
              Chargers
            </MultiOptionListHeading>
          </MultiOptionListHeader>
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
              {cities.map((entry) => {
                const isSelected = commandSelectedCities.some(
                  (city) => city.id === entry.id
                )
                return (
                  <MultiOptionItem
                    key={entry.id}
                    itemDescription={entry.address}
                    itemLabel={entry.value}
                    onSelect={() => {
                      setCommandSelectedCities((prev) => {
                        const isSelected = prev.some(
                          (city) => city.id === entry.id
                        )
                        if (isSelected) {
                          return prev.filter((city) => city.id !== entry.id)
                        } else {
                          return [...prev, entry]
                        }
                      })
                    }}
                    checked={isSelected}
                  />
                )
              })}
            </CommandGroup>
          </CommandList>
          <MultiOptionListFooter>
            <MultiOptionListFooterText>
              {commandSelectedCitiesLength} selected
            </MultiOptionListFooterText>
            <MultiOptionListFooterActions>
              <Button variant="neutral" onClick={handleClear}>
                Reset
              </Button>
              <Button
                variant="brand"
                onClick={() => {
                  alert(`Selected ${commandSelectedCitiesLength} cities`)
                  setSelectedCities(commandSelectedCities)
                  setOpen(false)
                }}
              >
                Apply
              </Button>
            </MultiOptionListFooterActions>
          </MultiOptionListFooter>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function PopoverFilterOptionList({
  disabled = false,
}: {
  disabled?: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const [selectedCity, setSelectedCity] = React.useState<
    (typeof cities)[number] | undefined
  >(undefined)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <FilterRoot isFilled={selectedCity != undefined}>
          <span className="mui-icon material-symbols-rounded">filter_list</span>
          City
          {selectedCity && (
            <Tag>
              <span className="truncate">{selectedCity.value}</span>
              <TagOptionCancel onClick={() => setSelectedCity(undefined)} />
            </Tag>
          )}
        </FilterRoot>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command className="[&_[cmdk-empty]]:h-80 [&_[cmdk-list]]:h-80">
          <CommandInput />
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
