import AsideMedium from '../components/AsideMedium';
import FooterMedium from '../components/FooterMedium';
import MainMedium from '../components/MainMedium';
import HeaderMedium from '../components/HeaderMedium';
import ReviewsMedium from '../components/ReviewsMedium';

const MediumVersion = () => {
  return (
    <div className='wrapper'>
      <HeaderMedium />
      <MainMedium />
      <AsideMedium />
      <ReviewsMedium />
      <FooterMedium />
    </div>
  );
};

export default MediumVersion;
