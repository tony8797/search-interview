import styled from 'styled-components';

import { theme, deviceSize } from '@/themes/styles';

const { primary } = theme.color;
const { mobile } = deviceSize;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translate(-50%,-50%);
  display: flex;

  @media ${mobile} {
    top: -20px;
    left: 50%;
    flex-direction: column;
  }

  & span {
    display: block;
    width: 30px;
    height: 30px;
    border-bottom: 5px solid ${primary.default};
    border-right: 5px solid ${primary.default};
    transform: rotate(-45deg);
    margin: -10px;
    animation: animate 2s infinite;

    @media ${mobile} {
      transform: rotate(45deg);
    }
  }
  & span:nth-child(2) {
    animation-delay: -0.2s;
  }
  & span:nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes animate {
    0%{
        opacity: 0;
        transform: rotate(-45deg) translate(-20px,-20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(-45deg) translate(20px,20px);
    }
  }

  @media ${mobile} {
    @keyframes animate {
      0%{
          opacity: 0;
          transform: rotate(45deg) translate(-20px,-20px);
      }
      50%{
          opacity: 1;
      }
      100%{
          opacity: 0;
          transform: rotate(45deg) translate(20px,20px);
      }
    }
  }
`;

export default {
  ArrowContainer,
};
