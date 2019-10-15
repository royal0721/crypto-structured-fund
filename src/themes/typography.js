import styled from 'styled-components'

export const Headline = styled.div`
  font-size: 1.25rem;
  font-weight: 500;

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: ${props => (props.center ? 'center' : 'left')};

  @media screen and (min-width: 600px) {
    font-size: 1.25rem;
  }
`

export const SubTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  align-self: flex-end;

  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
`

export const Text = styled.span`
  font-size: 0.75rem;
  font-weight: 400;

  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
`

export const Bold = styled.span`
  font-weight: 500;
`

export const StrongText = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.neonGreen};

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`
