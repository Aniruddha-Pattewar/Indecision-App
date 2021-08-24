class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visibility:false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility:!prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide Details':'Show Details'}</button>
                {this.state.visibility && <p>Hey,these are some important details..!</p>}
            </div>
        );
    }
}


ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let details = ''

// const toggleDetails = () =>{
//     details ? details='':details='Hey, these are some important details..!';
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>{details ? 'Hide Details':'Show Details'}</button>
//             <p>{details}</p>
//         </div>
//     )
    
//     ReactDOM.render(template,appRoot);
// }
// render();