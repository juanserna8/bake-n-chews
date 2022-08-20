const mapToObject = (items = [], callback) => {
    const mappedObject = {};
    for (const item of items) {
        const key = callback(item);
        mappedObject[key] = item
    }
    return mappedObject;
}

export default mapToObject;