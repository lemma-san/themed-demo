import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export default () => (
  <Wrapper>
    <div className="container">
      <Header>
        <Navigation>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contacts</NavItem>
          <NavItem>Price</NavItem>
        </Navigation>
      </Header>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  `

const Header = styled.div`
  display: flex;
  `

const Navigation = styled.div`
  display: flex;   
`
const NavItem = styled.div`
  padding: 10px 5px;
  color: #4b2929;
  font-family: Helvetica, sans-serif;
  font-weight: bold;


`


// Dark Red  : #ba0000
// Red       : #e52828
// Gray      : #f0e3e3
// Green     : #32cc5a
// Dark Green: #25a346
// Just Dark : #4b2929

  // <Main >
// <Posts>
// <Post>
//   <Title></Title>
//   <Body></Body>
//   <Button></Button>
// </Post>
// <Post>
//   <Title></Title>
//   <Body></Body>
//   <Button></Button>
// </Post>
// </Posts>
// </Main>
// <Footer>
// <Info>
// <ThemeProvider>
// </ThemeProvider>
// </Info>
// </Footer>