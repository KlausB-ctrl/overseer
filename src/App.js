import BoardList from './components/BoardList';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar__logo">
          <img src={require('./images/logo.png')} alt="logo"></img>
        </div>
        <div className="sidebar__content">
          <h2>ALL BOARDS</h2>
          <BoardList />
        </div>
      </div>
      <div className="content">
        <header>
          <div className="header__content">
            <h1>Task Management App</h1>
            <div className="header__buttons">
              <button className="button--green">+Add New Task</button>
              <div className="three-dot-button"></div>
            </div>
          </div>
        </header>
        <div className="tasks">
          <div className="tasks__column">
            <div className="tasks__title"></div>
            <div className="task__container">
              <h3>Create Figma Sketches</h3>
              <p>1 of 1 subtasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
