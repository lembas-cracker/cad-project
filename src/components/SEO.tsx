import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  name: string;
  type: string;
  image: string;
}

const SEO = ({ title, description, name, type, image }: SeoProps) => {
  return (
    <Helmet>
      {/* General metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
