import { Group, MantineProvider, Stack, Text } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import Browser from './Components/Browser';
import Content from './Components/Content';
import Inspector from './Components/Inspector';
import Shell from './Components/Shell'

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme:'dark'}}>
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route path="all" element={<Content />} />
          <Route path="lastImport" element={<Content />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}