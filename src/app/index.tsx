import React from 'react'
import Debug from 'debug'
import { someEpic } from 'Store/app/epics';
import { useDispatch, useSelector } from "Store";
import { isSome, isNone, some } from 'fp-ts/lib/Option';
import { TextMain } from 'Components/styled-common';
import { InputWithButton } from 'Components/input-with-button';
import { setError, setName } from 'Store/app/actions';

const App: React.FunctionComponent = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  return (
    <div>
      {isSome(state.app.name) && <p><TextMain>Welcome, {state.app.name.value}</TextMain></p>}
      {isNone(state.app.name) && 
        <InputWithButton 
        onError={error => dispatch(setError(some(error)))} 
        placeholder="What's your name?"
        onSubmit={value => dispatch(setName(some(value)))}
        />}
    </div>
  )
}

export default App