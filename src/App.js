import { Route, Routes } from 'react-router-dom';
import PageLayout from './components/layout/layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/contact';
import Projects from './pages/projects';


function App() {
  return (
    <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element = {<Projects />} />
        </Routes>
    </PageLayout>
  );
}

export default App;


