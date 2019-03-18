"use strict";
export function postDataToRedux(payload){

    return function(dispatch){

        //http
        dispatch({
            type:'ADD_USER',
            payload
        });


    };
};


export function postDataToRedux2(payload){

    return function(dispatch){

        //http
        dispatch({
            type:'ADD_USER',
            payload
        });


    };
};