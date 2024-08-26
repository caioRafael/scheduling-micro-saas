'use client'

import { ReactNode, useState } from 'react'
import { Popover, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { PopoverContent } from '@radix-ui/react-popover'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface IComboboxOption {
  value: string | number
  key: string | number
  text: string
  viewOption?: () => ReactNode
}

interface ComboboxProps {
  viewSelected?: (value: string | number) => ReactNode
  selected: string | number
  setSelected: (value: string | number) => void
  options: IComboboxOption[]
  placeholder?: string
}

export function Combobox({
  setSelected,
  selected,
  options,
  viewSelected,
  placeholder,
}: ComboboxProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant={'outline'}>
          {!selected && placeholder ? placeholder : ''}
          {viewSelected ? viewSelected(selected) : selected}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Command className="w-full z-50">
          <CommandInput />
          <CommandList className="w-full">
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value.toString()}
                  onSelect={() => setSelected(option.value)}
                >
                  {option.viewOption ? option.viewOption() : option.text}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      option.value === selected ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
