
export const updateObjectInArray = (items, itemId, objPropName, newObjProps ) => {
    return items.map((u) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}

//objPropName - это какое-то любое св-во, которое мы берем у этого универсального объекта
//newObjProps - это новые св-ва нового объекта,кот-й получится в резуоттате
//u[objPropName]- это просто вариация обращения к св-ву обекта,бывает через точку,а бывает так