import { Typography } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const YouTubeEmbed = React.lazy(() => import("./YouTubeEmbed"));

const StyledHero = styled.section`
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1620px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0;
  text-wrap: balance;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroGrid>
        <HeroContent>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Super Cool Powerful Headline Here
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "text.secondary",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </Typography>
        </HeroContent>
        <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" />
      </HeroGrid>
    </StyledHero>
  );
};

export default Hero;
