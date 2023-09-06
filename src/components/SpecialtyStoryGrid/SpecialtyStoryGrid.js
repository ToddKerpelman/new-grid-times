import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStoryWrapper>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </SportsStoryWrapper>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const SportsSection = styled.section`
  @media ${QUERIES.tabletAndUp} {
    max-width: 100%;
    overflow-x: auto;
  }
`;

const SportsStoryWrapper = styled.div`
  overflow-x: auto;
}`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(${SPORTS_STORIES.length}, 200px);
  }
`;

export default SpecialtyStoryGrid;
