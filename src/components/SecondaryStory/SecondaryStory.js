import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <PaddingWrapper>
      <a href={`/story/${id}`}>
        <Wrapper>
          <Image alt={image.alt} src={image.src} />
          <Heading>{title}</Heading>
          <AbstractWrapper>
            <Abstract>{abstract}</Abstract>
          </AbstractWrapper>
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
  display: grid;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);
  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "heading"
      "abstract";
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const AbstractWrapper = styled.div`
  grid-area: abstract;
`;

const Abstract = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export default SecondaryStory;
