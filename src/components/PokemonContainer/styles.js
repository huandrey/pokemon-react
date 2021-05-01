import styled from 'styled-components';


export const Container = styled.div`
  width: 620px;
  min-height: 20rem;
  margin: 0 auto;

  margin-top: 2rem;
  padding: 1rem;
`

export const Main = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: (5, 1fr);
  gap: .5rem;


  margin-bottom: 2rem;
`

export const PagesControl = styled.div`
  display: flex;
  justify-content: space-between;
`