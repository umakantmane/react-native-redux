import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Display extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        return(
            
            <View>
   
            {
                this.props.userlist.map(row=>(
                    <View> 
                        <Text>{ row.username }</Text>
                        <Text>{ row.email }</Text>
                    </View>
                 ))
            }
               
            </View>
        )
    }
}

const mapStateToProps = (state) => {

    return { userlist: state.UserReducer.users2 };
}



export default connect(mapStateToProps) (Display);