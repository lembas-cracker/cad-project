import { useState } from "react";
import styled from "styled-components";

const YouTubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  background-image: url("src/assets/maxresdefault.webp");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const PlayButton = styled.div`
  width: 68px;
  height: 48px;
  background-color: #212121;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    border-style: solid;
    border-width: 10px 0 10px 17px;
    border-color: transparent transparent transparent #fff;
    margin-left: 4px;
  }
`;

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const loadIframe = () => {
    setLoaded(true);
  };

  return (
    <YouTubeContainer>
      {loaded ? (
        <iframe
          width="1692"
          height="669"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      ) : (
        <Placeholder onClick={loadIframe}>
          <PlayButton />
          <span className="sr-only">Play {title}</span>
        </Placeholder>
      )}
    </YouTubeContainer>
  );
};

export default YouTubeEmbed;
