import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MobileappPagesProps {}

const StyledMobileappPages = styled.div`
  color: pink;
`;

export function MobileappPages(props: MobileappPagesProps) {
  return (
    <StyledMobileappPages>
      <h1>Welcome to MobileappPages!</h1>
    </StyledMobileappPages>
  );
}

export default MobileappPages;
