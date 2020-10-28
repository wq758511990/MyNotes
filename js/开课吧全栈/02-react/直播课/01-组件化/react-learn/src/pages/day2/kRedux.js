export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let currentState
    let currentListeners = []
    function getState() {
        return currentState
    }
    function dispatch(act) {
        currentState = reducer(currentState, act)
        currentListeners.forEach(listener => {
            listener()
        })
    }

    // 订阅， 可以多次订阅
    function subscribe(listener) {
        // 每次订阅把回调放入回调数组
        currentListeners.push(listener)
    }
    // 获取初始值， 保证不和项目中的重复
    dispatch({ type: "@INIT/REDUX" })

    return {
        getState,
        dispatch,
        subscribe
    }
}

export function applyMiddleware(...middlewares) {
    return createStore
}