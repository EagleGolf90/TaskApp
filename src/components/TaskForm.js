import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const trimmedText = taskText.trim();
    if (!trimmedText) return;

    setIsSubmitting(true);
    
    try {
      await onAddTask(trimmedText);
      setTaskText('');
    } catch (error) {
      console.error('Error adding task:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="input-group">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="task-input"
            maxLength={200}
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="add-button"
            disabled={!taskText.trim() || isSubmitting}
          >
            {isSubmitting ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <i className="fas fa-plus"></i>
            )}
          </button>
        </div>
        <div className="input-meta">
          <span className="char-count">
            {taskText.length}/200
          </span>
          <span className="hint">
            Press Enter to add task
          </span>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;