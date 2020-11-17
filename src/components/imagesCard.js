import React from 'react';

class ImageCard extends React.Component {
// creator constructor, must use super(props) because this extends react.component
    constructor(props) {
        super(props);
        // initializing state
        this.state = {spans: 0 };
            // creating React Ref
            this.imageRef = React.createRef();
    }

    componentDidMount() {
        // event listener waits for image to finish loading, then runs setSpans function
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
        // grid row span is determined based on height of image
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10 + 1);

        this.setState({ spans });

    }
    render() {
        const {description, urls } = this.props.image
       return ( <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
           <img 
           ref={this.imageRef}
           alt={description}
           src={urls.regular}/>
       </div>
       );
    }
}

export default ImageCard;