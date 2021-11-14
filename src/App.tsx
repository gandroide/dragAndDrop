import Example from './example';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from '@mui/system';
import CustomStyles from './dndStyles';

export const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={CustomStyles}>
        <div className="App">
          <Example />
        </div>
      </ThemeProvider>
    </DndProvider>
  );
};
