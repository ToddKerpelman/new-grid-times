import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <InlineGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </InlineGroup>
        <Logo />
        <InlineGroup>
          <SubscribeWrapper>
            <Button>Subscribe</Button>
            <a href="https://www.google.com/">Already a subscriber?</a>
          </SubscribeWrapper>
        </InlineGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const InlineGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 29px;
  }
`;

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  a {
    color: var(--color-gray-900);
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    text-decoration-line: underline;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    margin-top: 8px;
  }
`;

export default Header;
