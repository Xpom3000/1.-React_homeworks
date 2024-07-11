import styled from "styled-components";

export const loaderOneSvg = styled.svg`
    display: none;
  `
    
  export const LoaderOne = styled.div `
    -webkit-filter: url(#goo);
            filter: url(#goo);
    width: 200px;
    height: 200px;
    margin: auto;
    position: relative;
    overflow: hidden;
    border-radius: 70px;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
  `
  
  export const LoaderOneCenter = styled.div`
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    position: absolute;
    background: #2196F3;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    -webkit-transform-origin: left top;
            transform-origin: left top;
    -webkit-transform: scale(0.9) translate(-50%, -50%);
            transform: scale(0.9) translate(-50%, -50%);
    -webkit-animation: blob-grow linear 3.4s infinite;
            animation: blob-grow linear 3.4s infinite;
    border-radius: 50%;
    -webkit-box-shadow: 0 -10px 40px -5px #2196F3;
            box-shadow: 0 -10px 40px -5px #2196F3;
  `
  
  export const LoaderOneItem = styled.div`
    position: absolute;
    background: #2196F3;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    -webkit-animation: blobs ease-out 3.4s infinite;
            animation: blobs ease-out 3.4s infinite;
    -webkit-transform: scale(0.9) translate(-50%, -50%);
            transform: scale(0.9) translate(-50%, -50%);
    -webkit-transform-origin: center top;
            transform-origin: center top;
    opacity: 0;

    &:nth-child(1) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
  }

  &:nth-child(2) {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
  }
  
  &:nth-child(3) {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }
  
  &:nth-child(4) {
    -webkit-animation-delay: 0.8s;
            animation-delay: 0.8s;
  }
  
  &:nth-child(5) {
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  
  @-webkit-keyframes blobs {
    0% {
      opacity: 0;
      -webkit-transform: scale(0) translate(calc(-330px - 50%), -50%);
              transform: scale(0) translate(calc(-330px - 50%), -50%);
    }
    1% {
      opacity: 1;
    }
    35%, 65% {
      opacity: 1;
      -webkit-transform: scale(0.9) translate(-50%, -50%);
              transform: scale(0.9) translate(-50%, -50%);
    }
    99% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0) translate(calc(330px - 50%), -50%);
              transform: scale(0) translate(calc(330px - 50%), -50%);
    }
  }
  
  @keyframes blobs {
    0% {
      opacity: 0;
      -webkit-transform: scale(0) translate(calc(-330px - 50%), -50%);
              transform: scale(0) translate(calc(-330px - 50%), -50%);
    }
    1% {
      opacity: 1;
    }
    35%, 65% {
      opacity: 1;
      -webkit-transform: scale(0.9) translate(-50%, -50%);
              transform: scale(0.9) translate(-50%, -50%);
    }
    99% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0) translate(calc(330px - 50%), -50%);
              transform: scale(0) translate(calc(330px - 50%), -50%);
    }
  }
  
  @-webkit-keyframes blob-grow {
    0%, 39% {
      -webkit-transform: scale(0) translate(-50%, -50%);
              transform: scale(0) translate(-50%, -50%);
    }
    40%, 42% {
      -webkit-transform: scale(1, 0.9) translate(-50%, -50%);
              transform: scale(1, 0.9) translate(-50%, -50%);
    }
    43%, 44% {
      -webkit-transform: scale(1.2, 1.1) translate(-50%, -50%);
              transform: scale(1.2, 1.1) translate(-50%, -50%);
    }
    45%, 46% {
      -webkit-transform: scale(1.3, 1.2) translate(-50%, -50%);
              transform: scale(1.3, 1.2) translate(-50%, -50%);
    }
    47%, 48% {
      -webkit-transform: scale(1.4, 1.3) translate(-50%, -50%);
              transform: scale(1.4, 1.3) translate(-50%, -50%);
    }
    52% {
      -webkit-transform: scale(1.5, 1.4) translate(-50%, -50%);
              transform: scale(1.5, 1.4) translate(-50%, -50%);
    }
    54% {
      -webkit-transform: scale(1.7, 1.6) translate(-50%, -50%);
              transform: scale(1.7, 1.6) translate(-50%, -50%);
    }
    58% {
      -webkit-transform: scale(1.8, 1.7) translate(-50%, -50%);
              transform: scale(1.8, 1.7) translate(-50%, -50%);
    }
    68%, 70% {
      -webkit-transform: scale(1.7, 1.5) translate(-50%, -50%);
              transform: scale(1.7, 1.5) translate(-50%, -50%);
    }
    78% {
      -webkit-transform: scale(1.6, 1.4) translate(-50%, -50%);
              transform: scale(1.6, 1.4) translate(-50%, -50%);
    }
    80%, 81% {
      -webkit-transform: scale(1.5, 1.4) translate(-50%, -50%);
              transform: scale(1.5, 1.4) translate(-50%, -50%);
    }
    82%, 83% {
      -webkit-transform: scale(1.4, 1.3) translate(-50%, -50%);
              transform: scale(1.4, 1.3) translate(-50%, -50%);
    }
    84%, 85% {
      -webkit-transform: scale(1.3, 1.2) translate(-50%, -50%);
              transform: scale(1.3, 1.2) translate(-50%, -50%);
    }
    86%, 87% {
      -webkit-transform: scale(1.2, 1.1) translate(-50%, -50%);
              transform: scale(1.2, 1.1) translate(-50%, -50%);
    }
    90%, 91% {
      -webkit-transform: scale(1, 0.9) translate(-50%, -50%);
              transform: scale(1, 0.9) translate(-50%, -50%);
    }
    92%, 100% {
      -webkit-transform: scale(0) translate(-50%, -50%);
              transform: scale(0) translate(-50%, -50%);
    }
  }
  
  @keyframes blob-grow {
    0%, 39% {
      -webkit-transform: scale(0) translate(-50%, -50%);
              transform: scale(0) translate(-50%, -50%);
    }
    40%, 42% {
      -webkit-transform: scale(1, 0.9) translate(-50%, -50%);
              transform: scale(1, 0.9) translate(-50%, -50%);
    }
    43%, 44% {
      -webkit-transform: scale(1.2, 1.1) translate(-50%, -50%);
              transform: scale(1.2, 1.1) translate(-50%, -50%);
    }
    45%, 46% {
      -webkit-transform: scale(1.3, 1.2) translate(-50%, -50%);
              transform: scale(1.3, 1.2) translate(-50%, -50%);
    }
    47%, 48% {
      -webkit-transform: scale(1.4, 1.3) translate(-50%, -50%);
              transform: scale(1.4, 1.3) translate(-50%, -50%);
    }
    52% {
      -webkit-transform: scale(1.5, 1.4) translate(-50%, -50%);
              transform: scale(1.5, 1.4) translate(-50%, -50%);
    }
    54% {
      -webkit-transform: scale(1.7, 1.6) translate(-50%, -50%);
              transform: scale(1.7, 1.6) translate(-50%, -50%);
    }
    58% {
      -webkit-transform: scale(1.8, 1.7) translate(-50%, -50%);
              transform: scale(1.8, 1.7) translate(-50%, -50%);
    }
    68%, 70% {
      -webkit-transform: scale(1.7, 1.5) translate(-50%, -50%);
              transform: scale(1.7, 1.5) translate(-50%, -50%);
    }
    78% {
      -webkit-transform: scale(1.6, 1.4) translate(-50%, -50%);
              transform: scale(1.6, 1.4) translate(-50%, -50%);
    }
    80%, 81% {
      -webkit-transform: scale(1.5, 1.4) translate(-50%, -50%);
              transform: scale(1.5, 1.4) translate(-50%, -50%);
    }
    82%, 83% {
      -webkit-transform: scale(1.4, 1.3) translate(-50%, -50%);
              transform: scale(1.4, 1.3) translate(-50%, -50%);
    }
    84%, 85% {
      -webkit-transform: scale(1.3, 1.2) translate(-50%, -50%);
              transform: scale(1.3, 1.2) translate(-50%, -50%);
    }
    86%, 87% {
      -webkit-transform: scale(1.2, 1.1) translate(-50%, -50%);
              transform: scale(1.2, 1.1) translate(-50%, -50%);
    }
    90%, 91% {
      -webkit-transform: scale(1, 0.9) translate(-50%, -50%);
              transform: scale(1, 0.9) translate(-50%, -50%);
    }
    92%, 100% {
      -webkit-transform: scale(0) translate(-50%, -50%);
              transform: scale(0) translate(-50%, -50%);
    }
  }
  `
  
  
  
  