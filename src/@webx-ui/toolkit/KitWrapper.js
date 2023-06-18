export class KitWrapper {
    #card;
    #settings;
    #toolDict;

    constructor(cardPartition, settingsPartition) {
        this.#card = cardPartition;
        this.#settings = settingsPartition;
        this.#toolDict = {};

        Object.defineProperties(this, {
            card: {
                get: () => this.#card
            },

            settings: {
                get: () => this.#settings
            }
        });
    }

    setPartition(name, partition) {
        this.#toolDict[name] = partition;
        Object.defineProperty(
            this, name, {
            get: () => this.#toolDict[name],
            configurable: true
        }
        );
    }

    get() {
        return {
            card: this.#card,
            settings: this.#settings,
            ...this.#toolDict
        };
    }
}
