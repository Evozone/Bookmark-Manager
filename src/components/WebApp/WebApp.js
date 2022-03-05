import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOutAction } from '../../actions';
import { auth } from '../../firebase/firebas-config';
import { signOut } from 'firebase/auth';
import { Redirect } from 'react-router-dom';

import history from '../../history';
import Home from './Home';

class WebApp extends Component {

    signOutGoogle = () => {
        signOut(auth).then(() => {
            alert("Successfully logged out, buh byee! See you later :)");
            history.push("/");
        }).catch((error) => {
            alert("error");
        });
    }

    renderContent = () => {
        console.log("from webapp ", this.props.isSignedIn);
        if(this.props.isSignedIn){
            return(
                <div>
                    <img src={`${this.props.userPhoto}`} alt="user profile" style={{width: "70px", height:"70px"}}></img>
                    <button onClick={this.signOutGoogle}>Sign Out</button>
                    <p>{this.props.userId}</p>
                    <Home/>
                </div>
            );
        }else{
            return(
                <Redirect to="/"/>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
      isSignedIn: state.auth.isSignedIn,
      userPhoto: state.auth.userPhoto,
      userId: state.auth.userId
    };
};
  
export default connect(
    mapStateToProps, { signOutAction }
)(WebApp);