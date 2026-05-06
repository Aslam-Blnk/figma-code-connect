import { useState } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Input, InputRoot } from '@/components/Input'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    /* Page */
    <div className="flex min-h-screen items-center justify-center bg-brand">
      {/* Card */}
      <Card variant="default" elevation="flat" className="w-96 p-10">
        {/* Content */}
        <div className="flex w-full flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-heading text-xl font-medium leading-5 tracking-denser text-default">
              Welcome back
            </h2>
            <p className="text-sm font-normal leading-4 text-subtler">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex w-full flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium leading-2 text-subtle">
                Email
              </label>
              <InputRoot>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leadingTab={
                    <div className="flex items-center gap-1 px-3 py-2">
                      <span className="text-sm font-medium text-subtler">
                        US
                      </span>
                      <span className="mui-icon material-symbols-rounded text-base text-subtler">
                        keyboard_arrow_down
                      </span>
                    </div>
                  }
                  leadingIcon={
                    <span className="mui-icon material-symbols-rounded">
                      mail
                    </span>
                  }
                />
              </InputRoot>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium leading-2 text-subtle">
                Password
              </label>
              <InputRoot>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  trailingTab={
                    <div className="flex items-center gap-1 px-3 py-2">
                      <span className="text-sm font-medium text-subtler">
                        USD
                      </span>
                      <span className="mui-icon material-symbols-rounded text-base text-subtler">
                        keyboard_arrow_down
                      </span>
                    </div>
                  }
                />
              </InputRoot>
              {/* Helper text row */}
              <div className="flex w-full items-start gap-1">
                <div className="flex w-3 shrink-0 items-center py-0.5">
                  <span className="mui-icon material-symbols-rounded text-xs text-subtle">
                    info
                  </span>
                </div>
                <p className="flex-1 text-xs font-normal leading-2 text-subtle">
                  this is the helper text
                </p>
              </div>
            </div>
          </div>

          {/* Sign In Button */}
          {/* UPDATED: Added leading icon (add) and trailing icon (arrow_forward) */}
          <Button
            variant="brand"
            type="submit"
            className="w-full justify-center"
          >
            <span className="mui-icon material-symbols-rounded">add</span>
            Sign in
            <span className="mui-icon material-symbols-rounded">
              arrow_forward
            </span>
          </Button>

          {/* Footer */}
          <div className="flex items-center justify-center gap-1 text-sm">
            <span className="font-normal text-subtler">
              Don&apos;t have an account?
            </span>
            <span className="font-heading font-medium text-brand">Sign up</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
