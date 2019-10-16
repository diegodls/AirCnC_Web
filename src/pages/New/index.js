import React, { useState, useMemo } from 'react'

import "./styles.css"
import api from '../../services/api'

import camera from "../../assets/camera.svg";

export default function New({ history }) {

    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo( //useMemo é igual ao useEffect
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null
            //createObjectURL cria uma url para uma variavel temporária que ainda não foi criada
        },
        [thumbnail]
    )

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(); //como o valor passado para o BD é um Multpart Form, tem que criar um aqui e a dicionar os dados (abaixo)
        const user_id = localStorage.getItem('user');

        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);
        data.append('thumbnail', thumbnail);

        await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard');
    }


    return (
        <form onSubmit={handleSubmit}>
            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} /* ao selecionar o arquivo, é retornado um vetor(array) e como não é usado o "multiple" para selecionar mais de um arquivo, seleciona o primeiro(e unico), no caso, o [0] */ />
                <img src={camera} alt="Selecione a imagem" />
            </label>
            <label htmlFor="company"> EMPRESA * </label>
            <input
                id="company"
                placeholder="Sua Empresa Incrível"
                value={company}
                onChange={event => setCompany(event.target.value)} />

            <label htmlFor="techs"> TECNOLOGIAS * <span>(separadas por virgulas)</span></label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)} />

            <label htmlFor="price"> VALOR DA DIARIA * <span>(em branco para gratuito)</span></label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)} />
            <button type="submit" className="btn">CADASTRAR</button>

        </form>
    )
}