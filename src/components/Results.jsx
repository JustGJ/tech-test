import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectCity } from '../redux/actions/selected.actions';

const Results = ({ resultType, typeResults }) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const handleSelectCity = (id, nom, code, population) => {
        const city = {
            id,
            nom,
            code,
            population,
            checked,
        };

        setChecked((c) => !c);
        dispatch(selectCity(city));

        // dispatch(changeCheckedSelected(id));
    };

    return (
        <section className="results">
            <h2>Résultats</h2>

            {!resultType.length ? (
                <p>Aucun {typeResults} saisi </p>
            ) : (
                resultType.map((p, index) => {
                    return (
                        <div key={index} className="results__item">
                            <div name="infos">
                                {p.nom}, {p.code}, {p.population} hab
                            </div>
                            <input
                                type="checkbox"
                                name="infos"
                                value={checked}
                                onChange={() =>
                                    handleSelectCity(index, p.nom, p.code, p.population)
                                }
                            />
                        </div>
                    );
                })
            )}
        </section>
    );
};

export default Results;
