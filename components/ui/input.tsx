import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-full border border-[#ffffff14] bg-transparent py-2 px-3 text-sm placeholder:text-white focus:outline-none focus:ring-2 focus:ring-[#ffffff14] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#ffffff14] dark:text-white dark:focus:ring-[#ffffff14] dark:focus:ring-offset-[#ffffff14]',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
