import React from 'react'
import { faker } from '@faker-js/faker'
import { useCommandState } from 'cmdk'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  MultiOptionListContentContainer,
  MultiOptionListFooter,
  MultiOptionListFooterActions,
  MultiOptionListFooterText,
  MultiOptionListHeader,
  MultiOptionListHeading,
  MultiOptionListItem,
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

type MultiOptionItemProps = Pick<
  React.ComponentProps<typeof MultiOptionListItem>,
  'onSelect' | 'key' | 'value'
> & {
  itemLabel: string
  itemDescription?: string
  icon?: React.ReactNode
  checked?: boolean
}

const MultiOptionItem = React.forwardRef<HTMLDivElement, MultiOptionItemProps>(
  (
    { itemLabel, itemDescription, icon, checked = false, ...commandProps },
    ref
  ) => (
    <MultiOptionListItem {...commandProps} ref={ref}>
      <MultiOptionListContentContainer checked={checked}>
        <Checkbox checked={checked} />
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
      </MultiOptionListContentContainer>
    </MultiOptionListItem>
  )
)
MultiOptionItem.displayName = 'MultiOptionItem'

type CommandCheckboxProps = {
  checked: boolean | 'indeterminate'
  selectedCitiesLength: number
  setSelectedCities: React.Dispatch<
    React.SetStateAction<(typeof cities)[number][]>
  >
  itemList: (typeof cities)[number][]
}

export const CommandCheckbox: React.FC<CommandCheckboxProps> = React.memo(
  ({
    checked,
    selectedCitiesLength,
    setSelectedCities,
    itemList,
  }: CommandCheckboxProps) => {
    const commandState = useCommandState((state) => state.filtered) as {
      count: number
      items: Map<string, number>
      groups: Set<string>
    }

    const toggleAll = React.useCallback(() => {
      if (
        selectedCitiesLength === itemList.length ||
        selectedCitiesLength > 0
      ) {
        setSelectedCities([])
      } else if (commandState.count === itemList.length) {
        setSelectedCities(itemList)
      } else {
        const filteredItems: (typeof cities)[number][] = []
        Array.from(commandState.items).forEach((entry, index) => {
          if (entry[1] > 0) {
            filteredItems.push(itemList[index])
          }
        })
        setSelectedCities(filteredItems)
      }
    }, [selectedCitiesLength, setSelectedCities, itemList, commandState])

    return <Checkbox checked={checked} onCheckedChange={toggleAll} />
  }
)
CommandCheckbox.displayName = 'CommandCheckbox'

function MultiOptionListWithSearch() {
  const [selectedCities, setSelectedCities] = React.useState<
    (typeof cities)[number][]
  >([])
  const selectedCitiesLength = selectedCities.length

  const handleClear = React.useCallback(() => {
    setSelectedCities([])
  }, [])

  return (
    <Command className="[&_[cmdk-input-wrapper]]:border-none">
      <CommandInput placeholder="Search cities..." />
      <MultiOptionListHeader>
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
        <MultiOptionListHeading>
          <span className="mui-icon material-symbols-rounded">ev_station</span>
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
                    const isSelected = prev.some((city) => city.id === entry.id)
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
          {selectedCitiesLength} selected
        </MultiOptionListFooterText>
        <MultiOptionListFooterActions>
          <Button variant="neutral" onClick={handleClear}>
            Reset
          </Button>
          <Button
            variant="brand"
            onClick={() => alert(`Selected ${selectedCitiesLength} cities`)}
          >
            Apply
          </Button>
        </MultiOptionListFooterActions>
      </MultiOptionListFooter>
    </Command>
  )
}

export { MultiOptionItem, MultiOptionListWithSearch }
