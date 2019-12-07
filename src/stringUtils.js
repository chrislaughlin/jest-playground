import * as boomer from "./boomer";

const buildName = (first, last) => {
    const fullName = `${first} ${last}`;

    return boomer.addBoomer(fullName);
};

export { buildName };
