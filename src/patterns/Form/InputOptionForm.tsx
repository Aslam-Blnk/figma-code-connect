import React from 'react'
import { faker } from '@faker-js/faker'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSupportingLabel,
} from '@/components/Form'
import { Input, InputRoot } from '@/components/Input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'

import { OptionItem } from '../../components/OptionList/OptionListCombobox'

const formSchema = z.object({
  email: z
    .email({
      error: 'Please enter a valid email address',
    })
    .min(1, {
      error: 'Please enter an email address',
    }),
})

const emailListLength = 50
faker.seed(emailListLength)
const emails = [
  ...Array.from({ length: emailListLength }).map(() => faker.internet.email()),
]

export function InputOptionForm() {
  const [open, setOpen] = React.useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    alert(JSON.stringify(data, null, 2))
  }
  const emailFieldState = form.getFieldState('email')

  return (
    <Form {...form}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          void form.handleSubmit(onSubmit)(event)
        }}
        className="min-w-80 space-y-3"
      >
        <Popover open={open} onOpenChange={setOpen}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email
                  <FormSupportingLabel isMandatory />
                </FormLabel>
                <InputRoot
                  isValid={!emailFieldState.invalid && emailFieldState.isDirty}
                  aria-invalid={emailFieldState.invalid}
                  asChild
                >
                  <PopoverTrigger>
                    <FormControl>
                      <Input
                        placeholder="Select email"
                        className="[&_input]:cursor-default [&_input]:text-left"
                        type="text"
                        readOnly
                        tabIndex={-1}
                        leadingIcon={
                          <span className="mui-icon material-symbols-rounded">
                            mail
                          </span>
                        }
                        {...field}
                      />
                    </FormControl>
                  </PopoverTrigger>
                </InputRoot>
                <FormDescription>
                  This is the email address we will use to contact you
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <PopoverContent className="w-80" sideOffset={12}>
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
                  {emails.map((email, index) => {
                    const currentValue = form.getValues('email')
                    return (
                      <OptionItem
                        key={index}
                        itemLabel={email}
                        onSelect={() => {
                          if (currentValue === email) {
                            form.setValue('email', '', {
                              shouldValidate: true,
                              shouldDirty: true,
                              shouldTouch: true,
                            })
                          } else {
                            form.setValue('email', email, {
                              shouldValidate: true,
                              shouldDirty: true,
                              shouldTouch: true,
                            })
                          }
                          setOpen(false)
                        }}
                        checked={currentValue === email}
                      />
                    )
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Button type="submit" variant="neutral">
          Submit
        </Button>
      </form>
    </Form>
  )
}
