export const state = {
    pages: {
        settings: {
            mounted: true,
            loaded: true,
            number: parseInt(
                    localStorage.getItem("page-settings-number")
                ) || 0,
        },
    },

    productList: JSON.parse(
            localStorage.getItem("product-list")
        ) || [],

    inTotalMode: JSON.parse(
            localStorage.getItem("inTotalMode")
        ) || false,

    currency: JSON.parse(
            localStorage.getItem("valuta")
        ) || "руб.",
    
    availableMoney: JSON.parse(
            localStorage.getItem("available-money")
        ) || 0,

    selectedProduct: null,
}

export function Reducer(state, action) {
    var newState = { ...state }

    switch (action.type) {
        case "set-page-settings-mount":
            newState.pages.settings.mounted = action.state

            break

        case "set-page-settings-visiblity":
            newState.pages.settings.loaded = action.state

            break

        case "set-page-settings-number":
            newState.pages.settings.page = action.state

            localStorage.setItem(
                "page-settings-number", 
                JSON.stringify(
                    action.state
                )
            )

            break

        case "update-list":
            newState.productList = action.state

            localStorage.setItem(
                "product-list", 
                JSON.stringify(
                    action.state
                )
            )
            
            break
        
        case "set-total-mode":
            newState.inTotalMode = action.state

            localStorage.setItem(
                "inTotalMode", 
                JSON.stringify(
                    action.state
                )
            )

            break
        
        case "set-currency":
            newState.currency = action.state

            localStorage.setItem(
                "valuta", 
                JSON.stringify(
                    action.state
                )
            )

            break

        case "set-available-money":
            newState.availableMoney = action.state

            localStorage.setItem(
                "available-money", 
                JSON.stringify(
                    action.state
                )
            )

            break

        case "select-product":
            newState.selectedProduct = action.state

            break

        default:
            throw Error('Unknown action.')
    }

    return newState
}
