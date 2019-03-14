import { ADD_TODO, TOGGLEDONE } from '../../../constants/ActionTypes';

const def = [
  {
    id: 0,
    content: 'Buy milk',
    priority: 1,
    tags: ['home', 'groceries'],
    completed: false,
  },
  {
    id: 1,
    content: 'Buy cat food',
    priority: 2,
    tags: ['home', 'pets'],
    completed: false,
  },
  {
    id: 2,
    content: 'Launch the site',
    priority: 4,
    tags: ['business', 'WebDev'],
    completed: false,
  },
];

const tasks = (state = def, action) => {
  switch (action.type) {
    case TOGGLEDONE:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed } : todo,
      );
    case ADD_TODO:
      return [...state,
        {
          id: state.length + 1,
          content: action.payload,
          completed: false,
        },
      ];
    default:
      return state;


  }
};

export default tasks;
