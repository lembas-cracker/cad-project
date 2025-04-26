import { styled } from "styled-components";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main<LayoutProps>`
  flex: 1;
  padding: 3rem 0;
  width: 100%;
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;Hello
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

 @media (max-width: 768px) {
  padding: ${({ home }) => (home ? "0 0 4rem 0" : "4rem 0")};
}

  @media (min-width: 1200px) {
    padding-left: 128px;
    padding-right: 128px;
  }
`;

const Layout = ({ children, home }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent home={home}>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
