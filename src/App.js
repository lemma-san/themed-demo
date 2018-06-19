import React from "react";
import styled, { ThemeProvider } from "styled-components";

export default () => (
  // <ThemeProvider theme={}>
  <Wrapper>
    <Header>
      <Navigation>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contacts</Button>
        <Button>Price</Button>
      </Navigation>
    </Header>
    <Main>
      <Posts>
        <div className="container">
          <div className="row center-lg">
            <div className="col-lg-6">
              <Post>
                <Title>Нереализованные идеи</Title>
                <Body>
                  Вот вроде хочется написать что-то и было о чем рассказать,
                  происходили некоторые события, но вот если не начинать это
                  делать в первый же день, то чем дальше, то тем сложнее начать
                  писать. И дальше воздух сотрясает лишь сожаление о не
                  сделанном. Можно было поведать о неудавшейся работе в компании
                  мошенников, что всецело орудует по всему городу и никто их не
                  останавливает; о провальных начинаниях в изучении чего либо; о
                  том, почему я еще не работаю и чего мне на самом деле не
                  хватает в знаниях и так далее до бесконечности. Но если сразу
                  не начать это...
                </Body>
                <Button>Read More</Button>
              </Post>
            </div>
          </div>

          <div className="container">
            <div className="row center-lg">
              <div className="col-lg-6">
                <Post>
                  <Title>Мечта и ее реализация</Title>
                  <Body>
                    Что такое мечта? Некоторые источники говорят, что это
                    сокровенное желание чего-либо очень конкретного, исполнение
                    которого принесет человеку огромное счастье. Или зачастую
                    уже приносит заранее при мысли о том, что скоро у тебя "это"
                    будет (мечта исполнится)...
                  </Body>
                  <Button>Read More</Button>
                </Post>
              </div>
            </div>
          </div>
        </div>
      </Posts>
    </Main>
    <Footer>
      <div className="container">
        <div className="row center-lg">
          <div className="col-lg-6">
            <ButtonsWrapper>
              <Button>Inverse Theme</Button>
              <Button>Green</Button>
              <Button>Red</Button>
            </ButtonsWrapper>
          </div>
        </div>
      </div>
    </Footer>
  </Wrapper>
  // </ThemeProvider>
);

const theme = {
  green: {}
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  border-bottom: 2px solid #4b2929;
  background: #32cc5a;
`;

const Navigation = styled.div`
  display: flex;
  padding: 20px;
`;

const Button = styled.div`
  padding: 10px 15px;
  margin-right: 25px;
  color: #4b2929;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid #4b2929;
  border-radius: 15px;
  background: transparent;
  max-width: 120px;
  text-align: center;

  :hover {
    background: #4b2929;
    color: #32cc5a;
  }
`;

const Main = styled.div``;

const Posts = styled.div`
  margin: 50px 0;
`;

const Post = styled.div`
  margin-top: 50px;
  text-align: left;
  font-family: Helvetica;
`;

const Title = styled.h1``;

const Body = styled.p``;

const Footer = styled.div`
  border-top: 2px solid #4b2929;
  background: #32cc5a;
`;

const ButtonsWrapper = styled.div`
  padding: 20px;
  display: flex;
`;

// -- Colors
// Dark Red  : #ba0000
// Red       : #e52828
// Gray      : #f0e3e3
// Green     : #32cc5a
// Dark Green: #25a346
// Just Dark : #4b2929
