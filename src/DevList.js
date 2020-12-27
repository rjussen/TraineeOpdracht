import React from 'react';
import Dev from './Dev';

function DevList(props) {
    let devs = props.filteredDevs.map((dev, i) => {
        return <Dev 
                key = {i}
                company={dev.company} 
                languages={dev.languages}
                id={dev.id}
                position={dev.position}
                location={dev.location}
                postedAt={dev.postedAt}
                contract={dev.contract}
                tools={dev.tools}
                logo={dev.logo}
                new={dev.new}
                featured={dev.featured}
                />
    })
        return (
            <div>
                {devs}
            </div>
    )
}

export default DevList;