import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incrementAction, decrementAction} from '../redux/action';

const Home = () => {
  //useDispatch use it//
  const dispatch = useDispatch();

  //useSelector use it//
  const {count} = useSelector(state => state.count);
  console.log('hello counterapp', count);

  const increaseHandler = () => {
    dispatch(incrementAction());
  };

  const decreaseHandler = () => {
    dispatch(decrementAction());
  };

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.textstyle}>imp example</Text>

      <Button title="Increment" onPress={increaseHandler} color="green" />
      <Button title="Decrement" onPress={decreaseHandler} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    padding: 10,
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textstyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Home;
