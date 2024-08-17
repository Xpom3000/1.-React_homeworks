import styled from "styled-components";

//  const color = css`
// color: color(srgb 0.81 0.81 0.81 / 0.52);
// `;
// const blick = css`
// color: #fff;
// `

export const SkeletonStyled = styled.div`
  width: 100%;
  height: 50px;
  background: color(srgb 0.81 0.81 0.81 / 0.52);
  position: relative;
  /* border: 1px solid red; */
  /* border-radius: 50%; */
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(90deg,  color(srgb 0.81 0.81 0.81 / 0.52) 10%, white 50%, color(srgb 0.81 0.81 0.81 / 0.52) 100% );
    animation: skeleton 1s ease-in-out infinite;
  }

  @keyframes skeleton {
    0% {
        left: -100%;
    }
    100% {
        left: 100%
    }
  }
`;
