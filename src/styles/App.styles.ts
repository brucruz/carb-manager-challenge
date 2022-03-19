import styled from 'styled-components';

export const CmContainer = styled.div`
  max-width: 960px;
  margin: auto;
`;

export const CmLogoWrapper = styled.div`
  margin-bottom: 30px;

  .cm-logo {
    max-width: 150px;
    height: auto;
  }
`;

export const PremiumRecipe = styled.div`
  margin-top: 24px;
  border: 2px dashed red;
  padding: 16px;
  list-style: none;
`;

export const CmRecipeGrid = styled.ul`
  margin: 0 auto;
  margin-top: 32px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px 16px;
  width: fit-content;
`;

export const CmError = styled.div`
  color: red;
  margin-top: 24px;
  font-size: 18px;
  line-height: 22px;
`;
