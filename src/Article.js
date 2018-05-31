import React, {Component} from  'react';

// export default function Article(props){

//     
//     console.log(props);
    

//     
// }


export default class Article extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render(){
        const {article, foo} = this.props;
        
        return(    
                <div>
                    <h3>{article.title}</h3>
                    <button onClick={this.toggleOpen}>{this.state.isOpen ? 'Close' : 'Open'}</button>
                    {this.getBody()}
                </div>
        )
    }

    getBody(){
        if(!this.state.isOpen)
            return null;
        const {article, foo} = this.props;
        return <section>{article.text}</section>;
    }

    toggleOpen = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}