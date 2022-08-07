import { Box, Text } from 'native-base'
import React, {useEffect, useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

interface timerProps {
  timer: number;
  blackTurn?: boolean;
  whiteTurn?: boolean

}
const Timer = ({ timer, blackTurn, whiteTurn }: timerProps): JSX.Element => {
  const [decreaseTime, setDecreaseTime] = useState(timer)
  const [seconds, setSeconds] = useState(60)
  const timerRef = useRef<NodeJS.Timer>()
  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      if (seconds < 1) {
        setDecreaseTime(decreaseTime - 1)
        setSeconds(60)
      }
      else {
        setSeconds(seconds - 1)
      }
    }
      , 1000)
  }

  useEffect(() => {
    if (blackTurn || whiteTurn) {
      decreaseTime<1?setSeconds(0):startTimer()
    }
  }, [blackTurn, whiteTurn, seconds])

  return (
    <Box alignItems={"center"}>
      <AntDesign name="clockcircle" size={24} color="white" />
      <Text color={"white"} mt="8px" fontFamily={"ReadexProBold"}>
        {decreaseTime > 9 ? "" : 0}{decreaseTime}:{seconds > 9 ? "" : 0}{seconds}
      </Text>
    </Box>
  )
}

export default React.memo(Timer)