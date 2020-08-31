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
                        .then((downloadURL) => {
                            firestore
                                .collection(path)
                                .doc(res.id)
                                .set({
                                    ...object,
                                    imgUrl: downloadURL,
                                })
                                .then(() =>
                                    dispatch(
                                        successAction({
                                            ...object,
                                            imgUrl: downloadURL,
                                        })
                                    )
                                );
                        });
                }
            );
        })
        .catch((err) => {
            dispatch(failureAction(err));
        });
};
