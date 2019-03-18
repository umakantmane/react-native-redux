import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Display from './Display';
import { postDataToRedux,postDataToRedux2 } from './store/actions/UserAction';

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
        // this.props.dispatch({
        //     type:'ADD_USER', payload:[payload]
        // });

        this.props.postData([payload]);
    }
    setName = (text) => {

        this.setState({
            username:text
        });
    }

    render(){

        return(
            
            <View style={styles.container}>
              <Display />
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
                
             

            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        product:state
    }
  };
const mapDispatchToProps = (dispatch)=>{
    return {
      postData:function(data){
        dispatch(postDataToRedux(data));
        },
        postData2:function(data){
            dispatch(postDataToRedux2(data))
        }
    }
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default connect(mapStateToProps,mapDispatchToProps) (Users);