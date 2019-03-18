const INITIAL_STATE = {
    users2:[]
};

const UserReducer = function(state = INITIAL_STATE, action){

        if( action.type == 'ADD_USER'){

            return Object.assign({}, state, {
                users2:state.users2.concat(action.payload)
            });
        }
        else if (action.type == 'REMOVE_USER'){
            return {users2:[]};
        }
        return state;
} 

export default UserReducer;