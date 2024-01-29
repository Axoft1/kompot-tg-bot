import { useEffect } from 'react';
import '../App.scss';
import Header from '../components/header';
import { useTelegram } from '../hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './product-list';
import Form from './form';

function App() {

    const { tg } = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes>

        </div>
    );
}

export default App;
