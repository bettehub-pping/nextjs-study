import * as actions from '../actions';

const initState = {
  from: 'undefined',
};

export default function ssrTest(state = initState, action) {
    switch (action.type) {
      case actions.SSR_TEST:
        console.log(state.color, action.color);
        return {
          from: action.color,
        };
      default:
        return state;
    }
}
