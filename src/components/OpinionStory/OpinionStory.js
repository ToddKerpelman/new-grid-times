import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <PaddingWrapper>
      <a href={`/story/${id}`}>
        <Wrapper>
          <Avatar alt="" src={avatar} />
          <AuthorInfo>
            <AuthorName>{author}</AuthorName>
            <ArticleTitle>{title}</ArticleTitle>
          </AuthorInfo>
        </Wrapper>
      </a>
    </PaddingWrapper>
  );
};

const PaddingWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: var(--color-gray-100);
  &:first-child {
    padding-top: 0px;
  }

  &:last-child {
    padding-bottom: 0px;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  gap: 12px;
  grid-template-areas: "authorInfo avatar";
  align-items: center;

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "avatar"
      "authorInfo";
    justify-content: left;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: avatar;
  justify-self: end;

  @media ${QUERIES.tabletOnly} {
    justify-self: left;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: authorInfo;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
