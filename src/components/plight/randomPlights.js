import * as React from "react";
import { PlightSummary } from "./plightSummary";
import { useSelector } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const RandomPlight = React.memo(({ except }) => {
    const plights = useSelector((state) => state.firestore.ordered.plight);
    const filterPlights = plights?.filter((plight) => plight.id !== except);
    const randomPlight = [];

    if (filterPlights) {
        for (let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(
                Math.random() * Math.floor(filterPlights.length - 1)
            );
            randomPlight.push(filterPlights?.[randomNumber]);
            filterPlights.splice(randomNumber, 1);
        }
    }

    return (
        <>
            {randomPlight.map((plight) => (
                <PlightSummary key={plight.id} plight={plight} />
            ))}
        </>
    );
});

export default compose(firestoreConnect(["plight"]))(RandomPlight);
