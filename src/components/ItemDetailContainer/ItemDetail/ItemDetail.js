import React from 'react';

function ItemDetail({item}) {
    return <>
            {item.id, item.picture, item.details}
         </>
}

export default ItemDetail;