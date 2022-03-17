import styled from "styled-components";

export const PremiumRecipeCardContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 343px;
  `;

export const PremiumRecipeCardHeader = styled.div`
  position: relative;
  height: 200px;
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

export const PremiumRecipeCardFavButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const PremiumRecibeCardBottom = styled.div`
  padding: 8px 16px 16px 16px;
`;

export const PremiumRecipeCardTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */


  color: #0C0C0A;

  white-space: break-spaces;
  text-align: start;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
           line-clamp: 2; 
   -webkit-box-orient: vertical;
`;
