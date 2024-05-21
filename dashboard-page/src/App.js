
import './components/Logo.css'
import Logo from './components/Logo';
import Heading from './components/headingComponent/Heading';
import ProfileName from './components/ProfileName';
function App() {
  return (
    <div >
      <Logo />
      <Heading size="lg"  text="see what your team has been upto "/>
      <ProfileName text={"Ashish"}/>
      <Heading size="md"  text="Project "/>


    </div>
  );
}

export default App;
