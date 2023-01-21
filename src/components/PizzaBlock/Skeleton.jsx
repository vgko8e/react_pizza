import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="270" rx="5" ry="5" width="280" height="28" />
    <rect x="0" y="316" rx="10" ry="10" width="280" height="86" />
    <rect x="0" y="419" rx="5" ry="5" width="91" height="27" />
    <rect x="171" y="412" rx="30" ry="30" width="107" height="45" />
  </ContentLoader>
);

export default Skeleton;
