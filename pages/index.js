import React, {Component} from 'react';
//import factory from '../ethereum/factory'
import {Card, Button} from 'semantic-ui-react'
//import 'semantic-ui-css/semantic.min.css';
const factory = require('../ethereum/factory')
import Layout from '../components/Layout'



class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns};
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address, 
                description: <a>View Campaign</a>,
                fluid: true
            }
        })
        return <Card.Group items={items} />;
    }

    render() {
        return ( 
        <Layout>
                <div>
                <link async rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.0//dist/semantic.min.css"/>
                {this.renderCampaigns()}
                <Button
                    content = "Create Campaign"
                    icon = "add"
                    primary= {true}
                />
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;