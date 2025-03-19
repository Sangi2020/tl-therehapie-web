import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetReuse = ({
  title = "theREHApie Consultants – Bridging Rehabilitation Innovation with the Middle East",
  description = "We help businesses expand in the rehab industry by offering strategic consulting, regulatory support, and distributor connections in the Middle East.",
  url = "https://tl-therehapie-web-peach.vercel.app/",
  image = "https://opengraph.b-cdn.net/production/images/3ce1332d-dc0a-4867-ad76-4f7625e71d1f.jpg?token=EWdiWv6KMf8fS-YmpXCiOfV7Zb_1iS84hgPjeHAMx3Q&height=802&width=1200&expires=33278379712",
  keywords = "",
}) => {
  return (
    <Helmet>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tl-therehapie-web-peach.vercel.app" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default HelmetReuse;
