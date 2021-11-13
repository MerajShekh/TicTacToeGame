import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import {
  Box,
  Center,
  Heading,
  Flex,
  View,
  Container,
  Button,
  Pressable,
  Text,
  Card,
  Stack,
  VStack,
  HStack,
  Icon,
  NativeBaseProvider,
} from 'native-base';

import Snackbar from 'react-native-snackbar';

import Icons from './components/Icons';

const arrayList = new Array(9).fill('empty');
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = async itemNumber => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#1FAA59',
      });
    }

    if (arrayList[itemNumber] === 'empty') {
      arrayList[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Already Filled',
        backgroundColor: '#E6425E',
      });
    }
    await checkWinner();
    await chechIsGameOver();
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    arrayList.fill('empty');
  };

  const checkWinner = () => {
    if (
      arrayList[0] !== 'empty' &&
      arrayList[0] === arrayList[1] &&
      arrayList[1] === arrayList[2]
    ) {
      setWinMessage(`${arrayList[0]} Won`);
    } else if (
      arrayList[3] !== 'empty' &&
      arrayList[3] === arrayList[4] &&
      arrayList[4] === arrayList[5]
    ) {
      setWinMessage(`${arrayList[3]} Won`);
    } else if (
      arrayList[6] !== 'empty' &&
      arrayList[6] === arrayList[7] &&
      arrayList[7] === arrayList[8]
    ) {
      setWinMessage(`${arrayList[6]} Won`);
    } else if (
      arrayList[0] !== 'empty' &&
      arrayList[0] === arrayList[3] &&
      arrayList[3] === arrayList[6]
    ) {
      setWinMessage(`${arrayList[0]} Won`);
    } else if (
      arrayList[1] !== 'empty' &&
      arrayList[1] === arrayList[4] &&
      arrayList[4] === arrayList[7]
    ) {
      setWinMessage(`${arrayList[1]} Won`);
    } else if (
      arrayList[2] !== 'empty' &&
      arrayList[2] === arrayList[5] &&
      arrayList[5] === arrayList[8]
    ) {
      setWinMessage(`${arrayList[2]} Won`);
    } else if (
      arrayList[0] !== 'empty' &&
      arrayList[0] === arrayList[4] &&
      arrayList[4] === arrayList[8]
    ) {
      setWinMessage(`${arrayList[0]} Won`);
    } else if (
      arrayList[2] !== 'empty' &&
      arrayList[2] === arrayList[4] &&
      arrayList[4] === arrayList[6]
    ) {
      setWinMessage(`${arrayList[2]} Won`);
    }
  };

  const chechIsGameOver = () => {
    let isOver = true;
    Snackbar.show({
      text: winMessage,
      backgroundColor: '#1FAA59',
    });
    if (!winMessage) {
      arrayList.map(item => {
        if (item === 'empty') {
          isOver = false;
        }
      });
      if (isOver) {
        setWinMessage('Opp...Game Over');
      }
    }
  };

  return (
    <NativeBaseProvider>
      <Box safeAreaTop style={styles.container}>
        <Flex mt="4%" direction="row" style={styles.titleContainer}>
          <Heading style={styles.title}>TIC TAC TOE GAME</Heading>
        </Flex>

        <Box mt="10%">
          <Flex direction="row" wrap="wrap">
            {arrayList.map((item, index) => (
              <Pressable
                key={index}
                style={styles.card}
                onPress={() => changeItem(index)}>
                <Icons name={item} />
              </Pressable>
            ))}
          </Flex>
        </Box>

        {winMessage ? (
          <Box mt="10%">
            <Flex style={styles.messageBar}>
              <Center>
                <Text
                  bold
                  fontSize="xl"
                  style={{color: '#fff', textTransform: 'uppercase'}}>
                  {winMessage}
                </Text>
              </Center>
            </Flex>
          </Box>
        ) : (
          <Box mt="10%">
            <Flex style={styles.messageBar}>
              <Center>
                <Text
                  bold
                  fontSize="xl"
                  style={{color: '#FFF', textTransform: 'uppercase'}}>
                  {isCross ? 'Cross' : 'Cirlce'} Turn
                </Text>
              </Center>
            </Flex>
          </Box>
        )}
        <HStack
          style={{height: '10%', marginTop: '10%'}}
          alignItems="center"
          safeAreaBottom>
          <Center flex={1}>
            <Button
              onPress={reloadGame}
              size="lg"
              style={{backgroundColor: '#E03B8B'}}>
              Reload Game
            </Button>
          </Center>
        </HStack>
      </Box>
      <HStack
        style={{height: '6%'}}
        bg="indigo.600"
        alignItems="center"
        safeAreaBottom
        shadow={6}>
        <Center flex={1}>
          <Text color="white" bold fontSize="20">
            Built By Meraj Shekh
          </Text>
        </Center>
      </HStack>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03203C',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#207398',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#207398',
    height: 80,
    borderWidth: 1,
    borderColor: '#CAD5E2',
  },
  messageBar: {
    backgroundColor: '#6A1B4D',
    paddingVertical: 15,
    marginVertical: 15,
  },
});
