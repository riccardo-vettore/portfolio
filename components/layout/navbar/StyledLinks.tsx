import styled from 'styled-components';
import {Theme} from '../../../styles/theme';
import React from 'react';

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({theme}: {theme: Theme}) => theme.mixins.fBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--yellow);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({theme}: {theme: Theme}) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`

export default StyledLinks;