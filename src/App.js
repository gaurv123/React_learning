// import logo from '../public/name.txt';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
function App() {
  return (
    <Navbar tittle="MyFirstReactApp" link1="Home"/>
  );
}

Navbar.propTypes={
  link1:PropTypes.string.isRequired,
  tittle:PropTypes.string
}
export default App;
