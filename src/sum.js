const addTimeOut = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + y);
        });
    });
};

const add = (x, y) => x + y;

const asyncAdd = async (x, y) => {
    const result = await addTimeOut(x, y);

    return result;
};

export { add, asyncAdd };
