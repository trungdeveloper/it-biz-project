import React from "react";
export const NewPlight = ({plight}) => {
    return(
        <div>
            <div>
                <img style={{width: 100, height: 100}} src={plight.img}/>
            </div>
            <div>
                <div>`${plight.name} - ${plight.need}`</div>
                <div>{plight.description}</div>
                <button>Tài Trợ Ngay</button>
            </div>s
        </div>
    );
}