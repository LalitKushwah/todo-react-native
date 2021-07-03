import React, { useState, useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import StatusBar from '~/components/StatusBar'
import TodoList from '../components/TodoList';
import Modal from '~/components/Modal';
import {TodoContext} from '~/context/TodoContext';


const HomeScreen = () => {
  const { todos } = useContext(TodoContext);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <StatusBar bgColor="#5e3d9f"></StatusBar>
      <TodoList todos={todos}/>
      <FAB
        medium
        icon="plus"
        onPress={showModal}
        style={styles.fab}
      />
      <Modal visible={visible} onDismiss={hideModal}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#5e3d9f'
  },
});

export default HomeScreen;
