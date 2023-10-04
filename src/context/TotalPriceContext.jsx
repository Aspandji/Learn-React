import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext()

const TotalPriceDispatchContext = createContext()

const TotalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            return {
                total: action.payload.total,
            }
        }
        default: {
            throw Error("Unknown action: " + action.type)
        }
    }
}

export function TotalPriceProvider({ children }) {
    const [totalPrice, dispacth] = useReducer(TotalPriceReducer, { total: 0 })
    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <TotalPriceDispatchContext.Provider value={dispacth}>
                {children}
            </TotalPriceDispatchContext.Provider>
        </TotalPriceContext.Provider>
    )
}

export function useTotalPrice() {
    return useContext(TotalPriceContext)
}

export function useTotalPriceDispacth() {
    return useContext(TotalPriceDispatchContext)
}