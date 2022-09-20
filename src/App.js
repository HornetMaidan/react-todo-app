import React from 'react'
import {Header} from './components/Header';
import {List} from './components/List';
import {AppWrapper} from './components/App.styles';

function App () {
  return (
      <AppWrapper>
        <Header/>
            <List/>
      </AppWrapper>
  )
}

export default App
