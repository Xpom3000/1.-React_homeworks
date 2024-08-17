import { SkeletonStyled } from "./Skeleton.styled";


export const Skeleton = (props) => {
  // eslint-disable-next-line no-unused-vars
    const { width, height, radius } = props;
    const style = {
        width,
        height,
        borderRadius:radius, 
    }
  return <SkeletonStyled style={style}></SkeletonStyled>;
};
