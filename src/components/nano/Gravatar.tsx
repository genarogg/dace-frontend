import React from "react";
import md5 from "crypto-js/md5";

interface GravatarProps {
  email: string;
}

const Gravatar: React.FC<GravatarProps> = ({ email }) => {
  const hash = md5(email.trim().toLowerCase());
  const url = `https://www.gravatar.com/avatar/${hash}`;

  return <img src={url} alt="User avatar" />;
};

export default Gravatar;
