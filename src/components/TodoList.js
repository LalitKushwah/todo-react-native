import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = todos => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={itemData => <TodoItem title={itemData.item.title} id={itemData.item.id}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default TodoList;
