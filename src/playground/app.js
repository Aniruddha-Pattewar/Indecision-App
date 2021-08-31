class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options:[]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    componentDidMount(){
        const json = localStorage.getItem('options');
        const options = JSON.parse(json)
        if(options){
            this.setState(()=>({options}));
        }
    }

    componentDidUpdate(prevProps , prevState){
        if(prevState.options.length !== this.state.options){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleDeleteOptions(){
        this.setState(()=>({ options : []}));
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({options: prevState.options.filter((option)=> optionToRemove !== option)}));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOptions(option){
        if(!option){
            return 'enter the valid add option'
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Option already exist'
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}))
    }
    render(){
        const title = 'Indecision',
              subtitle = 'Put Your Life in the hands of computer..!';
        return(
            <div>
                <Header  subtitle={subtitle}/>
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOptions handleAddOptions={this.handleAddOptions}/>
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options:[]
// }

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title:'Indecision'
}
const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}>
            What should i do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            { props.options.length ===0 && <p>Please add some options buddy.!</p>}
            {
                props.options.map((option)=> (
                    <Option 
                    option={option} 
                    key={option}
                    handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }            
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <span>{props.option}</span>
            <button onClick={()=>{
                props.handleDeleteOption(props.option)
            }}>Remove</button>
        </div>
    );
}


class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleAddOptions(e){
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        let error = this.props.handleAddOptions(option);
        this.setState(()=>({error}))
        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOptions}>
                    <input type="text" name='option'/>
                    <button>Add Option</button>
               </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

// class Options extends React.Component {
//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option)=> <Option option={option} key={option}/>)
//                 }            
//             </div>
//         );
//     }
// }

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 <p>{this.props.option}</p>
//             </div>
//         );
//     }
// }

// class Action extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}>
//                 What should i do?
//                 </button>
//             </div>
//         );
//     }
// }

// class Header extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }