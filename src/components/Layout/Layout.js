import React, {Component} from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true,
        showMenu: false
    };

    menuToggleHandler = () => {
        this.setState({showMenu: !this.state.showMenu, showSideDrawer: !this.state.showSideDrawer});
    };

    sideDrawerToggleHandler = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer, showMenu: !this.state.showMenu});
    };

    render() {
        return (
            <Aux>
                <Toolbar
                    showMenu={this.state.showMenu}
                    closed={this.menuToggleHandler}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerToggleHandler}
                />
                <main className={classes.Content}>
                    {
                        this.props.children
                    }
                </main>
            </Aux>
        );
    }
};

export default Layout;
