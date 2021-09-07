import React from 'react'
import {Menu} from 'semantic-ui-react'


const res = () => {
    return (
        <Menu style = {{marginTop: '15px'}}>
            <Menu.Item>TrustLaunch</Menu.Item>

            <Menu.Menu position = "right">

                <Menu.Item>Campaigns</Menu.Item>

                <Menu.Item>+</Menu.Item>
            </Menu.Menu>

        </Menu>
    )
}

export default res;