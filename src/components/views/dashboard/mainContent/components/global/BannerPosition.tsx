interface BannerPositionProps {
  title: string;
}

const BannerPosition: React.FC<BannerPositionProps> = ({ title }) => {
  return (
    <div className="banner-position">
      <div className="banner">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default BannerPosition;
