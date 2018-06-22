import {FETCH_MOVIES, DELETE, ADD} from '../actions/movies';

const initialAppState = {
    mylist: [],
    recommendations: []
};

var appReducer = (state = initialAppState, action) => {
    switch(action.type) {        
        case ADD:
            var newrecommend = state.recommendations.filter((item)=>{
                if (item.id == action.movie.id) {
                    return false;
                }
                return true;
            });
            var newlist = state.mylist;
            newlist.push(action.movie);
            return {
                mylist: newlist,
                recommendations: newrecommend
            }
        break;
        case DELETE:
            var newlist = state.mylist.filter((item)=>{
                if (item.id == action.movie.id) {
                    return false;
                }
                return true;
            });
            var newrecommendations = state.recommendations;
            newrecommendations.push(action.movie);
            return {
                mylist: newlist,
                recommendations: newrecommendations
            }
        break;
        case FETCH_MOVIES:
            return {
                mylist : action.payload.mylist,
                recommendations: action.payload.recommendations
            };
        break;
        default:
            return state;
        break;
    }
    return state;
}

export default appReducer;