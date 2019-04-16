import React from "React";
import "./style.css"

class BackgroundImage extends Component {

    render() {
        return (
            <Image id="background" source={require('../../images/vertical-waves.png')}>
                    
                    {this.props.children}
                    
            </Image>
        )
    }
}
export default BackgroundImage