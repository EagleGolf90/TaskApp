import React, { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, index, onToggle, onDelete, onEdit, onUpdatePriority }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [showPriorityMenu, setShowPriorityMenu] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const trimmedText = editText.trim();
    if (trimmedText && trimmedText !== task.text) {
      onEdit(trimmedText);
    }
    setIsEditing(false);
    setEditText(task.text);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditText(task.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEditSubmit(e);
    } else if (e.key === 'Escape') {
      handleEditCancel();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else if (diffInHours < 24 * 7) {
      return `${Math.floor(diffInHours / 24)}d ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return 'fas fa-exclamation-triangle';
      case 'medium': return 'fas fa-circle';
      case 'low': return 'fas fa-chevron-down';
      default: return 'fas fa-circle';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#747d8c';
      default: return '#747d8c';
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-item-main">
        <button
          className={`task-checkbox ${task.completed ? 'checked' : ''}`}
          onClick={onToggle}
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed && <i className="fas fa-check"></i>}
        </button>

        <div className="task-content">
          {isEditing ? (
            <form onSubmit={handleEditSubmit} className="edit-form">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={handleKeyPress}
                onBlur={handleEditSubmit}
                className="edit-input"
                autoFocus
                maxLength={200}
              />
            </form>
          ) : (
            <>
              <span className="task-text">{task.text}</span>
              <div className="task-meta">
                <span className="task-date">{formatDate(task.createdAt)}</span>
                <div className="priority-indicator">
                  <i 
                    className={getPriorityIcon(task.priority)}
                    style={{ color: getPriorityColor(task.priority) }}
                  ></i>
                  <span className="priority-text">{task.priority}</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="task-actions">
          <div className="priority-dropdown">
            <button
              className="priority-button"
              onClick={() => setShowPriorityMenu(!showPriorityMenu)}
              aria-label="Change priority"
            >
              <i className={getPriorityIcon(task.priority)} style={{ color: getPriorityColor(task.priority) }}></i>
            </button>
            {showPriorityMenu && (
              <div className="priority-menu">
                {['high', 'medium', 'low'].map(priority => (
                  <button
                    key={priority}
                    className={`priority-option ${task.priority === priority ? 'active' : ''}`}
                    onClick={() => {
                      onUpdatePriority(priority);
                      setShowPriorityMenu(false);
                    }}
                  >
                    <i className={getPriorityIcon(priority)} style={{ color: getPriorityColor(priority) }}></i>
                    <span>{priority}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="edit-button"
            onClick={() => setIsEditing(true)}
            disabled={task.completed}
            aria-label="Edit task"
          >
            <i className="fas fa-edit"></i>
          </button>

          <button
            className="delete-button"
            onClick={onDelete}
            aria-label="Delete task"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;