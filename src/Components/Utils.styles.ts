import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  height: calc(100vh - 56px);
  grid-template-columns: minmax(auto, 360px) minmax(auto, calc(444px + 102px + 102px));
  padding: 0 36px;
  gap: 0 120px;
`;

export const LeftAside = styled.div`
  & h5:first-child {
    margin-top: 75px;
  }
`;
export const RightAside = styled.div`
  padding: 72px 102px;
  display: flex;
  flex-direction: column;
`;
export const Card = styled.div`
  min-height: 600px;
  width: 100%;
  border-radius: 20px;
  border: 3px solid lightgray;
  background-image: url('/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
