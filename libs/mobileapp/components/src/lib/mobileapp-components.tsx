import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MobileappComponentsProps {}

const StyledMobileappComponents = styled.div`
  color: pink;
`;

export function MobileappComponents(props: MobileappComponentsProps) {
  return (
    <StyledMobileappComponents>
      <h1>Welcome to MobileappComponents!</h1>
    </StyledMobileappComponents>
  );
}

export default MobileappComponents;
