import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
const [task,setTask]=useState('');
const [taskItems,setTaskItems]=useState([]);



const handleAddTask= () => {
  Keyboard.dismiss();
setTaskItems([...taskItems,task]);
setTask(null);
}
const completeTask=(index)=>{
 let itemsCopy = [...taskItems];
 itemsCopy.splice(index,1);
  setTaskItems(itemsCopy);

}





  return (
    <View style={styles.container}>
  {/* Todays Task */}
  <View style={styles.taskWrapper}>
<Text style={styles.taskTitle}>Today,s Task</Text>
<View style={styles.items}>
  {/* This is  where the task list is  */}
  {taskItems.map((item,index)=>{
    return (
      <TouchableOpacity key={index} onPress={() => completeTask(index)}>

     <Task  text={item}/>
      </TouchableOpacity>
    )
})}

  
  </View>
    </View>
    {/* Create a Task session */}
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
>
  <TextInput placeholder={'Write a Task'} style={styles.input} onChangeText={text => setTask(text)}  value={task} />
    <TouchableOpacity onPress={ () => handleAddTask()}>
      <View style={styles.addWrapper}>
      <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  
  },
  taskWrapper:{
    flex:1,
    
    paddingTop:80,
    paddingHorizontal:20,
  },
  taskTitle:{
      fontSize:24,
      fontWeight:'bold',
      marginBottom:30,
  },
items:{
  
},
writeTaskWrapper:{
  position:'absolute',
  bottom: 60,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
},
addText:{

},
addWrapper:{
width:60,
height:60,
backgroundColor:'#fff',
borderRadius:60,
justifyContent:'center',
alignItems:'center',

},
input:{
  width:250,
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor:'#fff',
  borderRadius:60,
  borderColor:'#C0C0C0',
},


});
