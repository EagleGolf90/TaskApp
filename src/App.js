import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString(),
      priority: 'medium'
    };
    setTasks([newTask, ...tasks]);
  };

  // Toggle task completion
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Edit a task
  const editTask = (taskId, newText) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    ));
  };

  // Update task priority
  const updateTaskPriority = (taskId, priority) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, priority } : task
    ));
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'completed':
        return task.completed;
      case 'pending':
        return !task.completed;
      default:
        return true;
    }
  });

  // Get task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>
            <i className="fas fa-tasks"></i>
            Task Management App
          </h1>
          <div className="task-stats">
            <div className="stat">
              <span className="stat-number">{totalTasks}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat">
              <span className="stat-number">{pendingTasks}</span>
              <span className="stat-label">Pending</span>
            </div>
            <div className="stat">
              <span className="stat-number">{completedTasks}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
        </header>

        <main className="app-main">
          <TaskForm onAddTask={addTask} />
          <TaskFilter 
            currentFilter={filter} 
            onFilterChange={setFilter}
            taskCounts={{ total: totalTasks, pending: pendingTasks, completed: completedTasks }}
          />
          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            onEditTask={editTask}
            onUpdatePriority={updateTaskPriority}
          />
          
          {filteredTasks.length === 0 && (
            <div className="empty-state">
              <i className="fas fa-clipboard-list"></i>
              <h3>No tasks found</h3>
              <p>
                {filter === 'all' 
                  ? "Start by adding your first task above!" 
                  : `No ${filter} tasks at the moment.`
                }
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;