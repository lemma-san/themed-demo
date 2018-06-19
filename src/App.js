import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export default () => (
  <Wrapper>
    <Header>
      <Navigation>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contacts</NavItem>
        <NavItem>Price</NavItem>
      </Navigation>
    </Header>
    <Main >
      <Posts>
        <Post>
          <Title></Title>
          <Body></Body>
          <Button></Button>
        </Post>
        <Post>
          <Title></Title>
          <Body></Body>
          <Button></Button>
        </Post>
      </Posts>
    </Main>
    <Footer>
      <Info>
        <ThemeProvider>
        </ThemeProvider>
      </Info>
    </Footer>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`