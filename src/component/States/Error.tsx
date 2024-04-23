import React from 'react';

const Error = () => {

    const handleReload = () => {
        window.location.reload();
    }

    return (
        <div className="error">
            <h1 className='error-desc'>
                Введен неверный город
            </h1>
            <button className="reload" onClick={handleReload}>
                Перезапуск страницы
            </button>
        </div>
    )
}

export default Error;