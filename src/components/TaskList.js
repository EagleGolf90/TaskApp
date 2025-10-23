import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask, onUpdatePriority }) {
  if (tasks.length === 0) {
    return null;
  }

  // Sort tasks by priority and creation date
  const sortedTasks = [...tasks].sort((a, b) => {
    // Priority order: high > medium > low
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    
    if (priorityDiff !== 0) {
      return priorityDiff;
    }
    
    // If same priority, sort by creation date (newest first)
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="task-list-container">
      <div className="task-list">
        {sortedTasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            onToggle={() => onToggleTask(task.id)}
            onDelete={() => onDeleteTask(task.id)}
            onEdit={(newText) => onEditTask(task.id, newText)}
            onUpdatePriority={(priority) => onUpdatePriority(task.id, priority)}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;