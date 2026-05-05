import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
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

const formSchema = z.object({
  email: z
    .email({
      error: 'Please enter a valid email address',
    })
    .min(1, {
      error: 'Please enter an email address',
    }),
  name: z.string().optional(),
})

export function InputForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          void form.handleSubmit(onSubmit)(event)
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                Email
                <FormSupportingLabel isMandatory />
              </FormLabel>
              <InputRoot
                isValid={!fieldState.invalid && fieldState.isDirty}
                aria-invalid={fieldState.invalid}
              >
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
              </InputRoot>
              <FormDescription>
                This is the email address we will use to contact you
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                Name
                <FormSupportingLabel />
              </FormLabel>
              <InputRoot
                isValid={!fieldState.invalid && fieldState.isDirty}
                aria-invalid={fieldState.invalid}
              >
                <FormControl>
                  <Input placeholder="Enter name" {...field} />
                </FormControl>
              </InputRoot>
              <FormDescription>
                This is the name we will use to address you
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="neutral">
          Submit
        </Button>
      </form>
    </Form>
  )
}
