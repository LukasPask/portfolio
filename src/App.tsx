import Portfolio from './components/Portfolio';
import { Box } from '@mantine/core';

const App = () => {
  return (
    <Box
      h={'100vh'}
      w={'100vw'}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Portfolio />
    </Box>
  );
};

export default App;
