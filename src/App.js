import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <div>
        <Header/>
        <Routes/>
        <GlobalStyle />
    </div>
  );
}

export default App;
