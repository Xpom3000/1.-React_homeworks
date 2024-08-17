import styled from "styled-components";
import { StyledCard } from "../../Column/Column.styled";

export const StyledCardItem = styled.div`
  /* padding: 5px; */
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardSkeleton = styled(StyledCard)`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardSkeletonHeder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 85px;
  margin-bottom: 15px;
`;

export const CardSkeletonFooter = styled.div`
padding-top: 35px;
`;
