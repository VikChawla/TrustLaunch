import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from '../routes'

const res = () => {
    return (
        <Menu style = {{marginTop: '15px'}}>
            <Link route = "/">
                <a className = "item">TrustLaunch</a>
            </Link>

            <Menu.Menu position = "right">
            <Link route = "/">
                <a className = "item">Campaigns</a>
            </Link>
                

            <Link route = "/campaigns/new">
                <a className = "item">+</a>
            </Link>
            </Menu.Menu>

        </Menu>
    )
}

export default res;