import React from 'react';
import Form from './components/Form';
import Results from './components/Results';
import { useSelector } from 'react-redux';
import Selected from './components/Selected';

function App() {
    const postal = useSelector((state) => state.postal);
    const name = useSelector((state) => state.name);

    return (
        <section className="home">
            <h1>Recherche de communes</h1>
            <div className="content">
                {/* Postal form */}
                <div className="content__form">
                    <Form
                        title="Par code postal"
                        typeForm="postal"
                        typeInput="number"
                        placeholder="Saisir un code postal"
                    />
                    <Results resultType={postal} typeResults="code postal" />
                </div>
                {/* Postal name */}
                <div className="content__form">
                    <Form
                        title="Par nom"
                        typeForm="name"
                        typeInput="text"
                        placeholder="Saisir une commune "
                    />
                    <Results resultType={name} typeResults="nom" />
                </div>
            </div>
            {/* Selected cities */}
            <Selected />
        </section>
    );
}

export default App;
