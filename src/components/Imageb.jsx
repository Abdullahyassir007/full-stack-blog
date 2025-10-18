import { Image } from '@imagekit/react';

const Imageb = ({  src, className, alt }) => {
  const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT;
  return (

      <Image urlEndpoint={urlEndpoint}
      src={src} alt={alt} className={className}
      loading = "lazy"
      lqip={{ active: true, quality: 20 }}
      // width={w} height = {h} 
      />

  );
};

export default Imageb;
