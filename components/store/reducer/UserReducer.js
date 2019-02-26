const INITIAL_STATE = {
    users2:{}
};

const UserReducer = function(state = INITIAL_STATE, action){

        if( action.type == 'ADD_USER'){

            alert(1);
            return Object.assign({}, state, {
                users2:action.payload
            });
        }
        else if (action.type == 'REMOVE_USER'){
            return {users2:[]};
        }
        return state;
} 

export default UserReducer;