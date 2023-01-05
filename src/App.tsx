import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import Content from './Components/Content';
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