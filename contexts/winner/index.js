import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
// import Box from '@mui/material/Box';

import WinnerCard from '@/components/cards';
import Button from '@/components/buttons';
import winnerStyle from '@/contexts/winner/index.style';

const { WinnerContainer, WinnerList } = winnerStyle;

function Lottery() {
  const router = useRouter();
  const { lotteryWinners = [] } = useSelector((state) => state.lottery);

  return (
    <WinnerContainer>
      <Button onClick={() => router.push('/')} sx={{ width: '100px' }}>繼續抽獎</Button>
      <WinnerList>
        {
          lotteryWinners.length
            ? (
              lotteryWinners.map((ele) => (
                <WinnerCard name={ele.name} />
              ))
            )
            : null
        }
      </WinnerList>
    </WinnerContainer>
  );
}

export default Lottery;
