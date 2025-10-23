import React from 'react';
import './TaskFilter.css';

function TaskFilter({ currentFilter, onFilterChange, taskCounts }) {
  const filters = [
    { key: 'all', label: 'All Tasks', icon: 'fas fa-list', count: taskCounts.total },
    { key: 'pending', label: 'Pending', icon: 'fas fa-clock', count: taskCounts.pending },
    { key: 'completed', label: 'Completed', icon: 'fas fa-check-circle', count: taskCounts.completed }
  ];

  return (
    <div className="task-filter">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-button ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            <i className={filter.icon}></i>
            <span className="filter-label">{filter.label}</span>
            <span className="filter-count">{filter.count}</span>
          </button>
        ))}
      </div>
      
      {taskCounts.total > 0 && (
        <div className="progress-bar">
          <div className="progress-container">
            <div 
              className="progress-fill"
              style={{ 
                width: `${taskCounts.total > 0 ? (taskCounts.completed / taskCounts.total) * 100 : 0}%` 
              }}
            ></div>
          </div>
          <span className="progress-text">
            {taskCounts.total > 0 ? Math.round((taskCounts.completed / taskCounts.total) * 100) : 0}% Complete
          </span>
        </div>
      )}
    </div>
  );
}

export default TaskFilter;