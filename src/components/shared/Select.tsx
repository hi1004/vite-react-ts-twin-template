import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import { colors } from '@/styles/colorPalette'
import { SelectHTMLAttributes, forwardRef } from 'react'
import tw from 'twin.macro'

export interface Option {
  label: string
  value: string | number | undefined
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: Option[]
}

const BaseSelect = tw.select`
  h-54pxr
  rounded-[16px]
  bg-${colors.gray}
  required:invalid:text-neutral-400
  cursor-pointer
  border-none
  px-16pxr
`

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, placeholder, value, ...props },
  ref,
) {
  return (
    <Flex direction="column">
      {label && (
        <Text
          typography="t7"
          color="black"
          display="inline-block"
          css={tw`mb-6pxr`}
        >
          {label}
        </Text>
      )}

      <BaseSelect ref={ref} required value={value} {...props}>
        <option disabled hidden value="">
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </BaseSelect>
    </Flex>
  )
})

export default Select
