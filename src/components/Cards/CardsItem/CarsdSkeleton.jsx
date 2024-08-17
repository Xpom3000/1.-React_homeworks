import { Skeleton } from "../../Skeleton/Skeleton";
import * as S from "./CardsSkeleton.styled";

export default function CardsSkeleton() {
  return (
    <S.StyledCardItem>
      <S.CardSkeleton>
        <S.CardSkeletonHeder>
          <Skeleton width="82px" height="20px" radius="18px" />
          <Skeleton width="24px" height="4px" />
        </S.CardSkeletonHeder>
        <Skeleton width="113px" height="13px" />
        <S.CardSkeletonFooter>
          <Skeleton width="58px" height="13px" />
        </S.CardSkeletonFooter>
      </S.CardSkeleton>
    </S.StyledCardItem>
  );
}
