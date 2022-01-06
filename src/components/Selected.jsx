import React from 'react';
import { useSelector } from 'react-redux';

const Selected = () => {
    const selected = useSelector((state) => state.selected);

    return (
        <section className="selected">
            <span>Liste des communes selectionnées</span>
            {!selected.length ? (
                <p style={{ marginTop: '15px' }}>Aucune commune sélectionnée</p>
            ) : (
                selected.map((c, i) => (
                    <p key={i} className="selected__item">
                        {c.nom}, {c.code}, {c.population} hab
                    </p>
                ))
            )}
        </section>
    );
};

export default Selected;
