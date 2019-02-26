import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import allStore from './store/StoreAll';

class Users extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "username":""
        }
        this.addData = this.addData.bind(this);
        this.setName = this.setName.bind(this);
    }

    addData = () => {
        let payload = {username:this.state.username, email:"manas@gmail.com"};
        //Action {type:dispatch, username}
        this.props.dispatch({
            type:'ADD_USER', payload
        });
    }
    setName = (text) => {

        this.setState({
            username:text
        });
    }

    render(){

        return(
            
            <View style={styles.container}>
                <Text> Hello... </Text>
                <TextInput
                style={{padding:5, borderWidth:2}} 
                placeholder="Enter name"
                onChangeText={this.setName}
                />
                <Button
                title="Push"
                color="purple"
                onPress={this.addData}
                />
                {/* {
                    this.props.userlist.map((row)=>(
                        <Text> { row.name }</Text>
                    ))
                } */}
                
                <Text> { this.props.userlist.username }</Text>
                <Text> { this.props.userlist.email }</Text>

            </View>
        )
    }
}

const mapStateToProps = (state) => {

    return { userlist: state.users2 };
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default connect(mapStateToProps) (Users);