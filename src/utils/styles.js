import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from "@emotion/core"

export const colors = {
  background: '#fff',
  color: '#111',
  colorOnPrimary: '#fff',
  footerBackground: '#1f292f',
  footerColor: '#fff',
  primaryColor: '#1f2a30',
  secondaryFooterBackground: '#192126',
}

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
      }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
    `}
  />
)

export const Img = styled(Image)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.45rem;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px){
    margin-top: 40px;
    margin-bottom: 20px;
  }
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: "left . right";

  @media (max-width: ${breakpoints.l}px){
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const PageTitle = styled.h1`
  font-size: 1.875rem;
  font-family: "Old Standard TT",serif;
  font-weight: 400;
  margin: 0 0 0.5em;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 50px;

  :after {
    border-top: solid #1c1d1d;
    border-width: 1px 0 0 0;
    width: 50px;
  }
`

export const Button = styled.button`
  color: ${({ color }) => color ? color : 'white'};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'black'};
  font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 12px 20px;
  font-size: 0.8125em;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: normal;

  :hover {
    opacity: 0.8;
  }
`
