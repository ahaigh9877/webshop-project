const initialState = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Minimalism is key!",
    ingredients: ["tomato", "mozarella", "basil"]
  },
  {
    id: 2,
    name: "Pizza Napoletana",
    description: "Like Margarita, but without the basil.",
    ingredients: ["tomato", "mozarella"]
  },
  {
    id: 3,
    name: "Pizza Bianca",
    description: "Did somebody say oil?",
    ingredients: ["olive oil", "salt", "rosemary"]
  }
];

const reducer = (state = [], action = {}) => {
  console.log("Pizza reducer");
  switch (action.type) {
    case "ADD_PIZZA":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};
export default reducer;
