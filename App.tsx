import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the type for a Task
type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Load tasks from AsyncStorage
  useEffect(() => {
    //ให้นักศึกษาเขียน code ในส่วนนี้เอง
    loadTasks();
  }, []);

  // Load tasks from AsyncStorage
  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  // Save tasks to AsyncStorage
  const saveTasks = async (updatedTasks: Task[]) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Failed to save tasks:", error);
    }
  };

  // Add new task
  const addTask = () => {
    if (newTask.trim()) {
      const updatedTasks: Task[] = [
        ...tasks,
        {
          id: Date.now().toString(),
          text: newTask,
          completed: false, // Initialize task as not completed
        },
      ];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
      setNewTask(""); // Clear input
    } else {
      Alert.alert("Error", "Task description cannot be empty.");
    }
  };

  // Toggle task completion
  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Delete task
  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Open modal to edit task
  const openModal = (task: Task) => {
    setSelectedTask(task); // Set the selected task correctly
    setNewTask(task.text); // Set the new task's text
    setModalVisible(true); // Show the modal
  };

  // Update task
  const updateTask = () => {
    if (newTask.trim() && selectedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id ? { ...task, text: newTask } : task
      );
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
      setModalVisible(false);
      setNewTask("");
      setSelectedTask(null);
    } else {
      Alert.alert("Error", "Task description cannot be empty.");
    }
  };

  const _renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTask(item.id)}>
        <Text
          style={item.completed ? styles.completedTask : { fontWeight: "bold" }}
        >
          {item.text}
        </Text>
      </TouchableOpacity>

      <SafeAreaView style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => openModal(item)}
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteTask(item.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
  //Ux
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Advanced Task Manager</Text>
        <TextInput
          style={styles.input}
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Enter new task"
        />
        <TouchableOpacity style={styles.addButton} onPress={() => addTask()}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <FlatList
          data={tasks}
          renderItem={_renderItem}
          keyExtractor={(Item) => Item.id}
        ></FlatList>
        <Modal
          transparent={false}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              value={newTask}
              onChangeText={setNewTask}
              placeholder="test"
            />
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => updateTask()}
            >
              <Text style={styles.buttonText}>Update Task</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </>
  );
  //ให้นักศึกษาเขียน code ในส่วนนี้เอง เพื่อให้ได้ผลลัพธ์การทำงานตามที่โจทย์กำหนดให้
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderColor: "#333",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "stretch", // This makes the button take the full width
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  editButton: {
    marginRight: 10,
  },
  editButtonText: {
    color: "blue",
  },
  deleteButton: {},
  deleteButtonText: {
    color: "red",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  updateButton: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "stretch", // This makes the button take the full width
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "stretch", // This makes the button take the full width
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
