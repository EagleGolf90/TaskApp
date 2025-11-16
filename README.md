# Task Management App

A modern, responsive Task Management application built with React that helps you organize and track your daily tasks efficiently.
See `https://eaglegolf90.github.io/TaskApp/src/`

## Features

### ✨ Core Functionality
- **Add Tasks**: Create new tasks with an intuitive input form
- **Edit Tasks**: Click the edit button to modify existing tasks
- **Mark Complete**: Toggle task completion status with a checkbox
- **Delete Tasks**: Remove tasks you no longer need
- **Priority Levels**: Set task priorities (High, Medium, Low) with color-coded indicators

### 🎛️ Task Management
- **Smart Filtering**: View all tasks, only pending tasks, or completed tasks
- **Task Statistics**: Real-time display of total, pending, and completed tasks
- **Progress Tracking**: Visual progress bar showing completion percentage
- **Priority Sorting**: Tasks automatically sorted by priority and creation date

### 💾 Data Persistence
- **Local Storage**: Tasks are automatically saved to browser's local storage
- **Session Persistence**: Tasks remain available even after closing the browser

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Real-time Updates**: Instant feedback for all user actions

## Technology Stack

- **React 18.2.0**: Modern React with hooks for state management
- **CSS3**: Custom styling with flexbox, grid, and animations
- **Font Awesome**: Beautiful icons for enhanced UI
- **Google Fonts (Inter)**: Professional typography

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project files
2. Navigate to the project directory:
   ```bash
   cd TaskApp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── TaskForm.js          # Add new tasks component
│   ├── TaskForm.css         # TaskForm styling
│   ├── TaskList.js          # Display tasks list component
│   ├── TaskList.css         # TaskList styling
│   ├── TaskItem.js          # Individual task item component
│   ├── TaskItem.css         # TaskItem styling
│   ├── TaskFilter.js        # Task filtering component
│   └── TaskFilter.css       # TaskFilter styling
├── App.js                   # Main application component
├── App.css                  # Main application styling
├── index.js                 # Application entry point
└── index.css                # Global styles and CSS reset
```

## Component Architecture

### App.js (Main Container)
- Manages global state for tasks and filters
- Handles task CRUD operations
- Provides data to child components
- Manages localStorage integration

### TaskForm
- Input form for adding new tasks
- Form validation and submission handling
- Character count and user feedback

### TaskFilter
- Filter buttons for task views (All, Pending, Completed)
- Progress bar showing completion percentage
- Task count statistics

### TaskList
- Container for all task items
- Handles task sorting by priority and date
- Scrollable list with custom styling

### TaskItem
- Individual task display and interaction
- Edit mode with inline text editing
- Priority selection dropdown
- Delete and toggle completion actions

## Key Features Explained

### Task Priority System
Tasks can be assigned three priority levels:
- **High Priority** (🔺): Red indicator, sorted first
- **Medium Priority** (⚫): Orange indicator, default priority
- **Low Priority** (🔽): Gray indicator, sorted last

### Smart Filtering
- **All Tasks**: Shows every task regardless of status
- **Pending**: Shows only incomplete tasks
- **Completed**: Shows only finished tasks

### Local Storage Integration
- Tasks are automatically saved to browser storage
- Data persists between browser sessions
- No server required - works offline

### Responsive Design
- **Desktop**: Full-featured interface with hover effects
- **Tablet**: Optimized layout for touch interactions
- **Mobile**: Compact design with accessible touch targets

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Styling
- Modify CSS variables in `index.css` for global theme changes
- Component-specific styles are in individual `.css` files
- Uses CSS custom properties for consistent theming

### Adding Features
The modular component structure makes it easy to add new features:
- Due dates
- Task categories
- Search functionality
- Task notes
- Export/import functionality

## Performance Considerations

- Efficient React hooks usage for optimal re-renders
- CSS animations use transform properties for smooth performance
- Local storage operations are optimized for large task lists
- Component memoization ready for future optimizations

## Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or suggestions, please create an issue in the project repository.

---

*Built with ❤️ using React*
