import * as React from 'react';
import { fallDown as Menu, State } from 'react-burger-menu';


class Example extends React.Component {
    showSettings(event: { preventDefault(): void }) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu
                customBurgerIcon={<img src="/assets/Icon-menu.svg" />}
                customCrossIcon={<img src="/Assets/Icon-Cancel.svg" />}
                onStateChange={this.onStateChange}
                itemListElement="div"
                styles={{}}
            >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }

    onStateChange = (state: State): void => {
        console.log(state.isOpen);
    }
}
export default Menu