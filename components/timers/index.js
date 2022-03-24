import PropTypes from 'prop-types';
import timerCardStyle from '@/components/timers/index.style';

const {
  TimerCardContainer,
  DigitalContainer,
  DigitalItem,
  Title,
  Dot,
} = timerCardStyle;

function TimerCard({
  time,
  title,
  isShowDot,
  sx,
}) {
  const timeCheck = time >= 0 ? time : 0;
  const leftDigit = timeCheck >= 10 ? timeCheck.toString()[0] : '0';
  const rightDigit = timeCheck >= 10 ? timeCheck.toString()[1] : timeCheck.toString();

  return (
    <TimerCardContainer sx={sx}>
      <Title isShowDot={isShowDot}>{title}</Title>
      <DigitalContainer>
        <DigitalItem>
          {leftDigit}
        </DigitalItem>
        <DigitalItem>
          {rightDigit}
        </DigitalItem>
        {
          isShowDot
            ? (
              <Dot>
                <span />
                <span />
              </Dot>
            )
            : null
        }
      </DigitalContainer>
    </TimerCardContainer>
  );
}

TimerCard.propTypes = {
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isShowDot: PropTypes.bool,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

TimerCard.defaultProps = {
  isShowDot: false,
  sx: {},
};

export default TimerCard;
