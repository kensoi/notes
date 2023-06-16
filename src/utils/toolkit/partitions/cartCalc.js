import {
    nanoid
} from "nanoid"

export class Partition {
    #state
    #dispatch
    #toolkit
    
    constructor(state, dispatch, toolkit) {
        this.#state = state
        this.#dispatch = dispatch
        this.#toolkit = toolkit

        this.pages = {
            settings: {

            }
        }

        Object.defineProperties(this, {
            list: {
                get: () => this.#state.productList,

                set: (value) => {
                    if (typeof value == "object" && Array.isArray(value)) {
                        this.#dispatch({
                            type: "update-list",
                            state: value
                        })
                    }
                }
            },

            isTotalMode: {
                get: () => this.#state.inTotalMode,

                set: (value) => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-total-mode",
                            state: value
                        })
                    }
                }
            },

            totalCost: {
                get: () => {
                    const priceArray = this.list.map(
                        item => item.quantity * item.price
                    )
            
                    const reducedArray = priceArray.reduce(
                        (a, b) => a + b, 0
                    )
            
                    return parseFloat(reducedArray).toFixed(2)
                }
            },

            currency: {
                get: () => this.#state.currency,

                set: (value) => {
                    if (typeof value == "string") {
                        this.#dispatch({
                            type: "set-currency",
                            state: value
                        })
                    }
                }
            },

            availableMoney: {
                get: () => {
                    if (isNaN(this.#state.availableMoney)) {
                        return ""
                    }

                    return this.#state.availableMoney
                },

                set: (value) => {
                    this.#dispatch({
                        type: "set-available-money",
                        state: parseInt(value)
                    })
                }
            },

            targetProduct: {
                get: () => this.#state.selectedProduct,
                set: (value) => {
                    this.#dispatch({
                        type: "select-product",
                        state: value
                    })
                }
            },

            change: {
                get: () => {
                    const changeRaw = this.availableMoney - this.totalCost
                    const change = parseFloat(changeRaw).toFixed(2)

                    if (isNaN(change)) {
                        return 0
                    }

                    return change
                },
            }
        })
    }

    addProduct (product) {
        let productList = [{
            name: product.name,
            id: nanoid(),
            quantity: product.quantity,
            price: product.price
        }, ...this.list]

        this.list = productList
    }

    removeProduct (productID) {
        const productIndex = this.list.findIndex(
            productItem => productItem.id === productID
        )

        this.list = this.list.toSpliced(productIndex, 1)
    }

    changeProduct (productID, name=null, quantity=null, price=null) {
        const productIndex = this.list.findIndex(
            productItem => productItem.id === productID
        )

        const newProductItem = {
            ...this.list[productIndex],
            name: name,
            quantity: quantity,
            price: price,
        }

        this.list = this.list.toSpliced(productIndex, 1, newProductItem)
    }
}