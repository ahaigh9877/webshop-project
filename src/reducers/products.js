const initialState = [
    {
        id: 1,
        name: 'Pizza Margarita',
        description: 'Minimalism is key!',
        ingredients: ['tomato', 'mozarella', 'basil']
    },
    {
        id: 2,
        name: 'Pizza Napoletana',
        description: 'Like Margarita, but without the basil.',
        ingredients: ['tomato', 'mozarella']
    },
    {
        id: 3,
        name: 'Pizza Bianca',
        description: 'Did somebody say oil?',
        ingredients: ['olive oil', 'salt', 'rosemary']
    }
];

const reducer = (state = [], action = {}) => {
    console.log('Products reducer : ', action.payload);
    switch (action.type) {
        case 'SET_PRODUCTS':
            return action.payload.products;
        default:
            return state;
    }
};
export default reducer;
