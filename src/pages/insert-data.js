import * as React from "react";
import { donations, plights, donated } from "../util/data";
import { useFirestore } from "react-redux-firebase";

export const InsertData = () => {
    const firestore = useFirestore();
    const insert = (DATA, collection) => {
        DATA.forEach((donation) => {
            const { id, ...otherKeys } = donation;
            firestore.set({ collection, doc: donation.id }, otherKeys);
        });
        alert("insert done");
    };
    return (
        <>
            <button onClick={() => insert(donations, "donation")}>
                Insert Donation
            </button>
            <button onClick={() => insert(plights, "plight")}>
                Insert Plight
            </button>
            <button onClick={() => insert(donated, "donated")}>
                Insert Donated
            </button>
        </>
    );
};
