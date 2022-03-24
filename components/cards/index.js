import PropTypes from 'prop-types';
import NextImage from 'next/image';

import winImage from '@/images/win.png';
import winnerCardStyle from '@/components/cards/index.style';

const { WinnerCardContainer } = winnerCardStyle;

function WinnerCard({
  name,
}) {
  return (
    <WinnerCardContainer>
      <NextImage src={winImage} width={64} height={64} />
      {name || '匿名'}
    </WinnerCardContainer>
  );
}

WinnerCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default WinnerCard;
