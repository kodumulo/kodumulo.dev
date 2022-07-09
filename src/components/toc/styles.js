import styled, { css } from 'styled-components'
import { BookContent } from 'styled-icons/boxicons-regular/BookContent'
import { Close as Cross } from 'styled-icons/material/Close'
import mediaQuery from './mediaQuery'

const openTocDiv = css`
  padding: 0.7em 1.2em;
  border-radius: 0.5em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
`

export const TocDiv = styled.div`
  height: max-content;
  max-height: 80vh;
  z-index: 5;
  line-height: 2em;
  max-width: 25em;
  overscroll-behavior: none;
  nav {
    max-height: 78vh;
    overflow-y: scroll;
  }
  ${mediaQuery.maxLaptop} {
    position: fixed;
    bottom: 1em;
    left: 0.5em;
    width: 23em;
    ${props => !props.open && `height: 0;`};
    ${props => props.open && openTocDiv};
    visibility: ${props => (props.open ? `visible` : `hidden`)};
    opacity: ${props => (props.open ? 1 : 0)};
    transition: 0.3s;
    overflow: -moz-hidden-unscrollable;
  }
  ${mediaQuery.minLaptop} {
    margin-top: 3em;
    font-size: 0.8em;
    line-height: 2.5em;
    position: sticky;
    top: 2em;
    width: 18em;
  }
`

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: flex;
  align-items: center;
`

export const TocLink = styled.a`
  color: ${({ theme, active }) =>
    active ? `rgb(39, 154, 241)` : theme.textColor};

  font-weight: ${props => props.active && `bold`};
  display: block;
  text-decoration: none;
  cursor: pointer;
  margin-left: ${props => props.depth + `em`};
  border-top: ${props => props.depth === 0 && `1px solid #aaa`};
`

export const TocIcon = styled(BookContent)`
  width: 1em;
  margin-right: 0.2em;
`

const openerCss = css`
  position: fixed;
  bottom: calc(1vh + 4em);
  ${mediaQuery.minPhablet} {
    bottom: calc(1vh + 1em);
  }
  left: 0;
  padding: 0.5em 0.6em 0.5em 0.3em;
  border-radius: 0 50% 50% 0;
  transform: translate(${props => (props.open ? `-100%` : 0)});
`

const closerCss = css`
  margin-left: 7em;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
`

export const TocToggle = styled(Cross).attrs(props => ({
  as: props.opener && BookContent,
  size: props.size || `2.5em`,
}))`
  z-index: 2;
  transition: 0.3s;
  justify-self: end;
  :hover {
    transform: scale(1.1);
  }
  ${mediaQuery.minLaptop} {
    display: none;
  }
  ${props => (props.opener ? openerCss : closerCss)};
`
