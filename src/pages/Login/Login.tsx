import { useState } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Input, InputRoot } from '@/components/Input'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    /* Page */
    <div className="bg-subtle flex min-h-screen items-center justify-center">
      {/* Card */}
      <Card variant="default" elevation="flat" className="w-96 p-10">
        {/* Content */}
        <div className="flex w-full flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="leading-8 text-2xl font-semibold text-default">
              Welcome back
            </h2>
            <p className="text-sm text-subtler">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex w-full flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium leading-4 text-subtle">
                Email
              </label>
              <InputRoot>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputRoot>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium leading-4 text-subtle">
                Password
              </label>
              <InputRoot>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputRoot>
            </div>
          </div>

          {/* Sign In Button */}
          <Button variant="brand" type="submit" className="w-full">
            Sign in
          </Button>

          {/* Footer */}
          <div className="flex items-center justify-center gap-1 text-sm">
            <span className="font-normal text-subtler">
              Don&apos;t have an account?
            </span>
            <span className="font-medium text-brand">Sign up</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
