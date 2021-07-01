import React from 'react'

function Item(props) {
    return (
        <div className='box flex jc flow-c'>
            <div className='box_title'>
                <h3>{props.title}</h3>
            </div>
            <div className='box_body'>
                <p>{props.description}</p>
            </div>
            <div className='box_footer'>
                <p>{props.bottom}</p>
                <p>{props.propiedad2}</p>
            </div>
        </div>
    )
}

export default Item;
