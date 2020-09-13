export const Upload = (
    props,
    path,
    object,
    image,
    dispatch,
    progressAction,
    successAction,
    failureAction
) => {
    const { firestore, firebase } = props;
    firestore
        .collection(path)
        .add(object)
        .then((res) => {
            const storageRef = firebase.storage().ref();
            const uploadTask = storageRef
                .child(path + "" + image.name)
                .put(image);
            uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    dispatch(progressAction(progress));
                },
                null,
                () => {
                    uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then(function (downloadURL) {
                            firestore
                                .collection(path)
                                .doc(res.id)
                                .set({
                                    ...object,
                                    imgUrl: downloadURL,
                                })
                                .then(() => dispatch(successAction(object)));
                        });
                }
            );
        })
        .catch((err) => {
            dispatch(failureAction(err));
        });
};
// eslint-disable-next-line no-unused-vars
export const UpdateUpload = (
    data,
    image,
    path,
    firebaseActions,
    callback,
    dispatch,
    successAction,
    failureAction
) => {
    const {
        id,
        name,
        description,
        category,
        status,
        date,
        condition,
        uid,
    } = data;
    const { firebase, firestore } = firebaseActions;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`donation${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        },
        (error) => {
            console.log(error);
        },
        () => {
            uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                    callback(downloadURL);
                    firestore
                        .collection(path)
                        .doc(id)
                        .update({
                            imgUrl: downloadURL,
                            name: name,
                            description: description,
                            category: category,
                            status: status,
                            date: date,
                            uid: uid,
                            condition: condition,
                        })
                        .then(() => {
                            dispatch(successAction(data));
                        })
                        .catch((err) => {
                            dispatch(failureAction(err));
                        });
                });
        }
    );
};
export const UpdateUploadEvent = (
    data,
    image,
    path,
    firebaseActions,
    callback,
    dispatch,
    successAction,
    failureAction
) => {
    const { id, title, content, date } = data;
    const { firebase, firestore } = firebaseActions;
    console.log(firestore);
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`event${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        },
        (error) => {
            console.log(error);
        },
        () => {
            uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                    callback(downloadURL);
                    firestore
                        .collection(path)
                        .doc(id)
                        .update({
                            imgUrl: downloadURL,
                            title: title,
                            content: content,
                            date: date,
                        })
                        .then(() => {
                            dispatch(successAction(data));
                        })
                        .catch((err) => {
                            dispatch(failureAction(err));
                        });
                });
        }
    );
};
export const UpdateUploadPlight = (
    data,
    image,
    path,
    firebaseActions,
    callback,
    dispatch,
    successAction,
    failureAction
) => {
    const { id, need, description, status, uid } = data;
    const { firebase, firestore } = firebaseActions;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`plight${image.name}`).put(image);

    console.log("====================================");
    console.log("Start to handle for saving the data");
    console.log("====================================");
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        },
        (error) => {
            console.log(error);
        },
        () => {
            uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                    callback(downloadURL);
                    console.log("====================================");
                    console.log("Data checking");
                    console.log("====================================");
                    console.log("path", path);
                    console.log("id", id);
                    console.log("dataEnd", {
                        imgUrl: downloadURL,
                        need: need,
                        description: description,
                        status: status,
                        uid: uid,
                    });
                    console.log("firestore", firestore);
                    firestore
                        .collection(path)
                        .doc(id)
                        .update({
                            imgUrl: downloadURL,
                            need: need,
                            description: description,
                            status: status,
                            uid: uid,
                        })
                        .then(() => {
                            dispatch(successAction(data));
                        })
                        .catch((err) => {
                            dispatch(failureAction(err));
                        });
                });
        }
    );
};
