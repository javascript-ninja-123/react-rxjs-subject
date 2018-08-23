


export const customMultiWare = customParameter => store => next => action => {
    next(customParameter(action,store))
}
