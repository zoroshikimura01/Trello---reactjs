import TaskBoard from './components/TaskBoard';
import TaskMaker from './components/TaskMaker'
import TaskCard from './components/TaskCard';
const App = () => {
  return (
    <div className="App">
      <TaskBoard />
      <TaskMaker />
      <TaskCard />
    </div>
  );
}

export default App;
