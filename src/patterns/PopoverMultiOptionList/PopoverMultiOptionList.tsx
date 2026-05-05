import React from 'react'
import { faker } from '@faker-js/faker'

import {
  BannerContent,
  BannerContentWrapper,
  BannerRoot,
} from '@/components/Banner'
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
import { ResourceIcon } from '@/components/ResourceIcon'

import {
  CommandCheckbox,
  MultiOptionItem,
} from '../../components/MultiOptionList/MultiOptionListCombobox'

const CITIES_LENGTH = 60

faker.seed(CITIES_LENGTH)
const cities = Array.from({ length: CITIES_LENGTH }, () => ({
  id: faker.string.uuid(),
  value: faker.location.city(),
  address: faker.location.streetAddress(),
})).sort((a, b) => a.value.localeCompare(b.value))

export function PopoverMultiOptionListWithSearch({
  disabled = false,
  maxItems = undefined,
  disableSelectAll = false,
}: {
  disabled?: boolean
  maxItems?: number
  disableSelectAll?: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const [selectedCities, setSelectedCities] = React.useState<
    (typeof cities)[number][]
  >([])
  const selectedCitiesLength = selectedCities.length

  const handleClear = React.useCallback(() => {
    setSelectedCities([])
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="neutral"
          role="combobox"
          aria-expanded={open}
          className="w-80 justify-between"
        >
          {selectedCitiesLength > 0
            ? `Selected ${selectedCitiesLength} cities`
            : 'Select cities'}
          <span className="mui-icon material-symbols-rounded">
            keyboard_arrow_down
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command className="[&_[cmdk-input-wrapper]]:border-none">
          <CommandInput placeholder="Search cities..." />
          <MultiOptionListHeader>
            {!disableSelectAll && (
              <CommandCheckbox
                checked={
                  selectedCitiesLength == cities.length
                    ? true
                    : selectedCitiesLength > 0
                      ? 'indeterminate'
                      : false
                }
                selectedCitiesLength={selectedCitiesLength}
                setSelectedCities={setSelectedCities}
                itemList={cities}
              />
            )}
            <MultiOptionListHeading>
              <span className="mui-icon material-symbols-rounded filled">
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
                const isSelected = selectedCities.some(
                  (city) => city.id === entry.id
                )
                return (
                  <MultiOptionItem
                    key={entry.id}
                    itemDescription={entry.address}
                    itemLabel={entry.value}
                    onSelect={() => {
                      setSelectedCities((prev) => {
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
          {maxItems !== undefined && selectedCitiesLength > maxItems && (
            <div className="pl-4 pt-2">
              <BannerRoot variant="inline">
                <BannerContentWrapper>
                  <ResourceIcon resourceIconColor="notice" size="default">
                    <span className="mui-icon material-symbols-rounded">
                      warning_amber
                    </span>
                  </ResourceIcon>
                  <BannerContent
                    className="my-auto text-notice"
                    bannerContent={`Can't select more than ${maxItems} items`}
                  />
                </BannerContentWrapper>
              </BannerRoot>
            </div>
          )}
          <MultiOptionListFooter>
            <MultiOptionListFooterText>
              {selectedCitiesLength} selected
            </MultiOptionListFooterText>
            <MultiOptionListFooterActions>
              <Button variant="neutral" onClick={handleClear}>
                Reset
              </Button>
              <Button
                variant="brand"
                disabled={
                  maxItems !== undefined && selectedCitiesLength > maxItems
                }
                onClick={() => {
                  alert(`Selected ${selectedCitiesLength} cities`)
                  if (
                    maxItems !== undefined &&
                    selectedCitiesLength > maxItems
                  ) {
                    alert(`You can select up to ${maxItems} items only.`)
                    return
                  }
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
