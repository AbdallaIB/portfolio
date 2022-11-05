import Nav from '@components/nav';
import Routes from '@routes/index';
import './App.css';

const App = () => {
  const handleScrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex flex-col items-center justify-start w-full h-full bg-gray-50">
      <Nav scrollSectionIntoView={handleScrollIntoView} />
      <Routes />
    </div>
  );
};

export default App;
