import styled from 'styled-components';
import { Nutrients } from './MacroNutritientIndicator.comp';

export const PremiumRecipeCardMacro = styled.div<{
  macro: Nutrients;
}>`
  display: flex;
  align-items: center;

  div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ macro }) => {
      switch (macro) {
        case 'protein':
          return '#3177BB';
        case 'carbs':
          return '#F94642;';
        case 'fats':
          return '#FDA120';
        default:
          return '#3177BB';
      }
    }};
  }

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #6f737a;
    margin-left: 4px;
  }

  & + & {
    margin-left: 8px;
  }
`;
