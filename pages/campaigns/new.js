import React, { Component } from 'react';
import Layouts from '../../components/Layout'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Router} from '../../routes'; //link react component, allows for navigation. Router allows to navigate user


class CampaignNew extends Component {
    state = {
        minContrib: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errorMessage: ''})
        try {
            const accounts = await web3.eth.getAccounts();

        await factory.methods.createCampaign(this.state.minContrib).send({
            from: accounts[0]
        });

        Router.pushRoute('/')
        
        } catch (e) {
            this.setState({errorMessage: e.message})
        }
        this.setState({loading: false})
        
    }


    render() {
      
        return (
        <Layouts>
            <h3> Create a campaign</h3>
            <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
                <Form.Field>
                    <label> Minimum Contribution in Wei</label>
                    <Input
                    label = "wei"
                    labelPosition= "right"
                    value = {this.state.minContrib}
                    onChange = {event => this.setState({minContrib: event.target.value})}
                    />
                </Form.Field>
                <Message error header= "Error :(" content = {this.state.errorMessage}/>
                <Button loading = {this.state.loading} primary>Create</Button>
            </Form>
        </Layouts>
        )
    }
}

export default CampaignNew;