import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from './ui/layouts/Layout';
import { FileDropPage } from './ui/Pages/FileDrop/FileDropPage';
import { CSharpPage } from './ui/Pages/CSharpPage/CSharpPage';
import { BashPage } from './ui/Pages/BashPage/BashPage';
import { HomePage } from './ui/Pages/HomePage/HomePage';
import { PythonPage } from './ui/Pages/Python/PythonPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/filedrop" element={<FileDropPage />} />
        <Route path="/csharp" element = {<CSharpPage />} />
        <Route path="/bash" element = {<BashPage />} />
        <Route path="/python" element = {<PythonPage />} />
      </Route>
    </Routes>
  );
}

export default App;
