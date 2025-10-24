import styles from './App.module.scss';
import {Button} from "./atoms/Button/Button";
import {Box} from "./atoms/Box/Box.tsx";

function App() {
  return (
    <div className={styles.app}>
        <Box direction="column" gap={10}>
            <Button color="semi-red" onClick={() => console.log('clicked')} >
                Click me
            </Button>
            <Button color="single-blue" href="/page">
                Go to page
            </Button>
            <Box color="semi-red">Semi Red</Box>
        </Box>
    </div>
  );
}

export default App;
