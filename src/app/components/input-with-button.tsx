import { DirectionRow } from 'Components/styled-common'
import React, { useState } from 'react'
import { KeyboardReturn as ButtonIcon } from 'styled-icons/material/KeyboardReturn'
import styled from 'Styles'
import { pipe } from 'fp-ts/lib/pipeable'
import { AppError } from 'Store/app/types'
import { Either, fold, left, right } from 'fp-ts/lib/Either'
import { InputValidator } from 'Modules/types'

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

const Button = styled(ButtonIcon)`
cursor: pointer;
width: 5%;
margin: 1% 12px 1% 12px;
color: ${props => props.theme.textMainColor};
`

type Props = {
  placeholder?: string;
  validator?: InputValidator;
  onSubmit: (value: string) => void;
  onError: (error: AppError) => void
}

export const InputWithButton: React.FC<Props> = ({ placeholder = "", validator, onError, onSubmit }) => {

  const [value, setValue] = useState("")

  const handleSubmit = () => 
  pipe(
    validator ? validator(value) : right(value),
    fold(
      (message) => {
        onError({ name: "Invalid input", message })
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
      <Button onClick={handleSubmit} />
    </InputContainer>
  )

}