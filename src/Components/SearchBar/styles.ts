import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: var(--fontXLarge);
  line-height: var(--fontXLarge);
  height: 80px;
  padding-bottom: 12px;
  color: var(--secundary);
  background-color: transparent;
  border-bottom: 2px solid var(--secundary);
  color: #fff;
`;

export const Label = styled.label`
  font-size: var(--fontMedium);
  color: var(--third);
`;
