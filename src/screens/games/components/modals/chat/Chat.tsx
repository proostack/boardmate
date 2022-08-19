import { Box, Text, HStack, Circle, Button, FlatList, Square, Progress } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import ReceiveFrom from './ReceiveFrom'
import SendTo from './SendTo'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomModalWrapper from '../CustomModalWrapper'
import CustomTextArea from './CustomTextArea'
import { Audio, AVPlaybackStatus } from 'expo-av';
import { TouchableWithoutFeedback } from 'react-native'
import { Recording, RecordingStatus } from 'expo-av/build/Audio'
import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
interface Props {
  name: string,
  handleClose: () => void;
  showChat: boolean
}



const Chat = ({ name, handleClose, showChat }: Props): JSX.Element => {

  const [recording, setRecording] = useState<Recording>()
  const [recordings, setRecordings] = useState([])
  const [recText, setRecText] = useState()
  const startRec = async () => {
    try {
      // console.log("Requesting permission");
      const access = await Audio.requestPermissionsAsync()
      if (access.granted) {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        })
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
        console.log("recording voice")
      }
      else {
        setMessage("grant access to mic")
      }
    } catch (err) {
      console.log("failed to start", err)
    }
  }

  const stopRec = async () => {
    setRecording(undefined)
    await recording?.stopAndUnloadAsync();

    const updateRecordings:any = [...recordings];
    if (recording) {
      const { sound, status } = await recording.createNewLoadedSoundAsync();
      // const status= await (await recording?.createNewLoadedSoundAsync())?.status;
    updateRecordings.push(   {
        sound,
        duration: getDurationFormatted((await recording.getStatusAsync()).durationMillis),
        file: recording?.getURI(),
      
      });
    }

    setRecordings(updateRecordings)
  }
  const getDurationFormatted = (millis: number) => {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes)
    const seconds = Math.round((minutes - minutesDisplay) * 60)
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`
  }





  const messages: { sent: string[]; replies: string[] } = {
    sent: [],
    replies: ["hello"]
  }
  const [handleMessage, setHandleMessage] = useState(messages);
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    if (message) {
      setHandleMessage({
        ...handleMessage,
        sent: [...handleMessage.sent, message]
      })
      setMessage("")
    }
  }

  const [play,setPlay]=useState(false)
const [playTime,setPlayTime]=useState<number|undefined>(0)
  const recLines = () =>{ 
    const onPlaybackStatusUpdate = (playbackStatus:AVPlaybackStatus) => {
      if (!playbackStatus.isLoaded) {
        // Update your UI for the unloaded state
        if (playbackStatus.error) {
          console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
          // Send Expo team the error on Slack or the forums so we can help you debug!
        }
      } else {
        // Update your UI for the loaded state
    
        if (playbackStatus.isPlaying) {
          // Update your UI for the playing state
          // const percentage=(playbackStatus.durationMillis&&playbackStatus.playableDurationMillis)&&(playbackStatus.positionMillis*100 )/playbackStatus.playableDurationMillis
        setPlay(true)
        // setPlayTime(percentage)
        // console.log(playbackStatus)
        } else {
          // Update your UI for the paused state
        setPlay(false)
        // setPlayTime(0)

        }
    
        if (playbackStatus.isBuffering) {
          // Update your UI for the buffering state
        }
    
        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          // The player has just finished playing and will stop. Maybe you want to play something else?
        }
    
    
      }
    };
    
    return(
    <Box>
      {[...recordings]?.map((recordingLine:any, index) =>{
        recordingLine.sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
        return (
        <Box key={index} bgColor="#794DE3" p={2} my={5}>
          <HStack  justifyContent="space-around">     
          <Box>   
             {!play&& <AntDesign  onPress={()=>{
            recordingLine.sound.replayAsync();
            // console.log(recordingLine.sound.setStatusAsync({ progressUpdateIntervalMillis })
            }} name="caretright" size={24} color="white" />
            }
          {play&&<AntDesign onPress={()=>{recordingLine.sound.pauseAsync()}} name="pause" size={24} color="white" />}
          <Text color="white">{index + 1}-{recordingLine.duration}</Text>

          </Box> 
<Progress mt="8px" _filledTrack={{bg:"darkTheme.50"}} value={playTime} w="80%"/>
          </HStack>

        </Box>
      )})
      }
 *   </Box>
  )}

  return (
    <CustomModalWrapper showModal={showChat}>
      <Box position="absolute" bottom={0} w="100%" left={0}>
        <Button variant={"unstyled"} alignSelf={"flex-end"} onPress={handleClose}>
          <Circle mb={22} mr={"13px"} size={30} mt="15px" bgColor="darkTheme.50" >
            <MaterialCommunityIcons name="close" size={14} color="white" />
          </Circle>
        </Button>
        <Box bgColor={"darkTheme.50"} h={300} borderRadius="20px">
          <Text textAlign={"center"} mt="12px" fontFamily={"ReadexProRegular"} color="white">{name}</Text>
          <SafeAreaView style={styles.chatArea}>
            {handleMessage.sent.length === 0? (
              <Square flex={1}>
                <Text color={"gray.100"} fontSize="2xl">Start a conversation </Text>
              </Square>
            ) : (
              <Box px={"29px"}>
                <FlatList data={handleMessage.sent} renderItem={({ item, index }) => (
                  <>
                    {index < handleMessage.replies.length && (
                      <ReceiveFrom text={handleMessage.replies[index]} />
                    )}
                    <SendTo text={item} />
                {index<recordings.length&&recLines()}

                  </>
                )} />
              </Box>
            )
            }
          </SafeAreaView>
          <HStack mb={"15px"}>
            <CustomTextArea
              message={message}
              setMessage={setMessage}
              handleSend={handleSubmit}

            />

            {recording ? <TouchableWithoutFeedback onPress={stopRec}>
              <Circle size={30} mt="15px" mr="13px" bgColor="accent_bg.50">
                <Square size={2} bgColor="red.500" />
              </Circle>
            </TouchableWithoutFeedback>
              :
              <TouchableWithoutFeedback onPress={startRec}>
                <Circle size={30} mt="15px" mr="13px" bgColor="accent_bg.50">
                  <MaterialCommunityIcons name="microphone-outline" size={17} color="white" />
                </Circle>
              </TouchableWithoutFeedback>
            }

          </HStack>
        </Box>
      </Box>
    </CustomModalWrapper>
  )
}

export default React.memo(Chat)

const styles = StyleSheet.create({
  chatArea: {
    flex: 1,
    marginTop: 12,
    borderTopWidth: 1,
    borderColor: "#282A38"
  }
})

