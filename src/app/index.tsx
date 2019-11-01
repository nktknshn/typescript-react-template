import React from 'react'
import Debug from 'debug'
import { someEpic } from 'Store/app/epics';
import { useDispatch, useSelector } from "Store";
import { isSome, isNone, some, none } from 'fp-ts/lib/Option';
import { TextMain, Centered } from 'Components/styled-common';
import { InputWithButton } from 'Components/input-with-button';
import { setError, setName } from 'Store/app/actions';
import { validateName } from 'Modules/validate-input';
import { FloatingError } from 'Components/floating-error';
import styled from 'Styles';

const Container = styled(Centered)`
width: 400px;
margin-top: 128px;
`

const App: React.FunctionComponent = props => {
  const dispatch = useDispatch();
  const { name, error } = useSelector(state => state.app)

  return (
    <div>
      {isSome(name) &&
        <Container>
          <TextMain>Welcome, {name.value}</TextMain>
        </Container>
      }
      {isNone(name) &&
        <Container>
          <InputWithButton
            placeholder="What's your name?"
            validator={validateName}
            onError={error => dispatch(setError(some(error)))}
            onSubmit={value => dispatch(setName(some(value)))}
          />
        </Container>}
      {isSome(error) && <FloatingError error={error.value} onClose={() => dispatch(setError(none))} />}
    </div>
  )
}

export default App