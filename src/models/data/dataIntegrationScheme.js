
export default {

    namespace: 'dataIntegrationScheme',

    state: {
        currentStep: 0
    },

    subscriptions: {

    },

    effects: {

    },

    reducers: {
        nextStep(state) {
            return {
                ...state,
                currentStep: state.currentStep + 1
            }
        },
        lastStep(state) {
            return {
                ...state,
                currentStep: state.currentStep - 1
            }
        }
    },

};
