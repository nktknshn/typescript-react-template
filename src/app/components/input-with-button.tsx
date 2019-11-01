import { DirectionRow } from 'Components/styled-common'
import React, { useState } from 'react'
import { Search as SearchIcon } from 'styled-icons/fa-solid/Search'
import styled from 'Styles'
import { Option, fold, some } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { AppError } from 'Store/app/types'

const InputContainer = styled(DirectionRow)`
color: ${props => props.theme.textMainColor};
border: 2px solid ${props => props.theme.textMainColor};
padding-left: 8px;
border-radius: 16px;
width: 90%;
`

const Input = styled.input`
line-height: 24px;
padding: 4px 8px 4px 32px;
color: ${props => props.theme.textMainColor};
border-color: transparent;
width: 100%;
background-color: inherit;
font-size: inherit;
`

const SearchButton = styled(SearchIcon)`
cursor: pointer;
width: 5%;
margin: 1% 12px 1% 12px;
color: ${props => props.theme.textMainColor};
`

type Props = {
  placeholder?: string;
  validateValue?: (value: string) => Option<string>;
  onSubmit: (value: string) => void;
  onError: (error: AppError) => void
}

export const InputWithButton: React.FC<Props> = ({ placeholder = "", validateValue, onError, onSubmit }) => {

  const [value, setValue] = useState("")

  const handleSubmit = () => 
  pipe(
    validateValue ? validateValue(value) : some(value),
    fold(
      () => {
        onError({
          name: "Invalid input",
          message: "Check the input"
        })
      },
      (value) => { onSubmit(value) }
    ))

  return (
    <InputContainer>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={(e) =>
          e.keyCode == 13 && handleSubmit()
        } />
      <SearchButton onClick={handleSubmit}>
      </SearchButton>
    </InputContainer>
  )

}