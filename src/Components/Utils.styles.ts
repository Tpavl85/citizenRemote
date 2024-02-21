import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  height: calc(100vh - 56px);
  grid-template-columns: minmax(auto, 360px) 1fr;
  padding: 0 36px;
  gap: 0 120px;
`;

export const LeftAside = styled.div`
  & h5:first-child {
    margin-top: 75px;
  }
`;
export const RightAside = styled.div`
  & h5:first-child {
    margin-top: 75px;
  }
`;
export const HeaderText = styled.h5`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
`;
export const HeaderHelperText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
`;
