import { Typography } from "@mui/material";
import { styled } from "styled-components";
import YouTubeEmbed from "./YouTubeEmbed";

const StyledHero = styled.section`
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem 2rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
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
            Your Powerful Headline Here
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "text.secondary",
            }}
          >
            A compelling subheading that explains your value proposition in a few words.
          </Typography>
        </HeroContent>
        <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" />
      </HeroGrid>
    </StyledHero>
  );
};

export default Hero;
