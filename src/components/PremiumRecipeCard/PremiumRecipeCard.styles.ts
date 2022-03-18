import styled from 'styled-components';

export const PremiumRecipeCardHeaderHoverOverlay = styled.div``;

export const PremiumRecipeCardFavButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  color: transparent;
  stroke: #fff;
`;

export const PremiumRecipeCardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 343px;

  cursor: pointer;

  &:hover {
    ${PremiumRecipeCardHeaderHoverOverlay} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
    }
    ${PremiumRecipeCardFavButton} {
      color: #1bc98e;
      stroke: #1bc98e;
    }
  }
`;

export const PremiumRecipeCardHeader = styled.div<{ imageUrl: string }>`
  position: relative;
  height: 200px;

  background: url(${props => props.imageUrl}) no-repeat center center;
  background-size: cover;
`;

export const PremiumRecipeCardHeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
`;

export const PremiumRecipeCardPremiumTag = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;

  padding: 4px 8px;

  svg {
    margin-right: 4px;
  }

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height, or 100% */

    letter-spacing: -0.2px;

    color: #fff;
  }
`;

export const PremiumRecibeCardBottom = styled.div`
  padding: 8px 16px 16px 16px;
`;

export const PremiumRecipeCardTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #0c0c0a;

  white-space: break-spaces;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PremiumRecipeCardRatings = styled.div`
  display: flex;
  margin-top: 17px;

  span {
    margin-left: 8px;
    margin-top: 1px;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #1ca677;
  }
`;

export const PremiumRecipeCardDetails = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
`;

export const PremiumRecipeCardTimeToMake = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    line-height: 14px;
    color: #393c40;
    margin-left: 8.33px;
  }
`;

export const PremiumRecipeCardCalories = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  flex: 1 1 auto;

  span {
    font-size: 12px;
    line-height: 14px;
    color: #393c40;
    margin-left: 8px;
    text-transform: capitalize;
  }
`;

export const PremiumRecipeCardMacros = styled.div`
  display: flex;
  align-items: center;
`;
