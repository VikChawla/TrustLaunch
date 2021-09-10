import React, { Component } from 'react';
import {Card, Grid, Button} from 'semantic-ui-react'
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContributeForm'
import {Link} from '../../routes'
//import Layouts from '../../components/Layout'

class CampaignShow extends Component {
    static async getInitialProps(props) { //helps you get info from a method on a contract
       const campaign = Campaign(props.query.address); //able to get this because of the routes.js
       const summary = await campaign.methods.getSummary().call()

       console.log(summary)
        return {
        address: props.query.address,    
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
        
        };  
    }

    renderCards() {
        const {
            balance, 
            manager,
            minimumContribution,
            approversCount,
            requestsCount
        } = this.props


        const items = [
            {
                header: manager,
                meta: 'Capaign owner Address',
                style: {overflowWrap: 'break-word'} //so it stay in the box

            },
            {
                header: minimumContribution,
                meta: 'Min Contribution in Wei',
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
            },
            {
                header: approversCount,
                meta: 'Number of Approvers/Investors'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)'
            }
        ]

        return <Card.Group items = {items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width = {10}>
                            {this.renderCards()}
                           
                        </Grid.Column>
                        <Grid.Column width = {5}>
                        <ContributeForm address = {this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Link route = {`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary> View Requests</Button>
                                </a>
                                
                        </Link>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                
                
            </Layout>
        )
    }
}



export default CampaignShow;