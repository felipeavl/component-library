import { Component } from 'react';
import styled from 'styled-components';

type BreadcrumbProps = {
  children: JSX.Element[];
};

const BreadcrumbList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Breadcrumbs = ({ children }: BreadcrumbProps): JSX.Element => (
  <nav aria-label="Breadcrumb">
    <BreadcrumbList>{children}</BreadcrumbList>
  </nav>
);

type CrumbProps = {
  children: string;
  href: string;
  isCurrentPage: boolean;
};

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);
    &:before {
      content: '';
      display: inline-block;
      transform: rotate(15deg);
      border-right: 1px solid;
      margin-right: var(--spacing);
      height: 0.8em;
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

const Crumb = ({
  children,
  href,
  isCurrentPage = false,
}: CrumbProps): JSX.Element => (
  <CrumbWrapper>
    <CrumbLink href={href} aria-current={isCurrentPage ? 'page' : undefined}>
      {children}
    </CrumbLink>
  </CrumbWrapper>
);

class Breadcrumb extends Component {
  render(): JSX.Element {
    return (
      <Breadcrumbs>
        <Crumb href="/" isCurrentPage={false}>
          Home
        </Crumb>
        <Crumb href="/living" isCurrentPage={false}>
          Living Room
        </Crumb>
        <Crumb href="/living/couch" isCurrentPage={false}>
          Couches
        </Crumb>
        <Crumb href="/living/couch/sectional" isCurrentPage>
          Sectionals
        </Crumb>
      </Breadcrumbs>
    );
  }
}

export default Breadcrumb;
