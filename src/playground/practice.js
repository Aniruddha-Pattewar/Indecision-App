class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options:[]
        }
        this.handlePick = this.handlePick.bind(this);
        this.hasRemoveAll = this.hasRemoveAll.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
    }
    handlePick(){
        let randomNum = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    hasRemoveAll(){
        this.setState(()=>{
            return {
                options:[]
            }
        })
    }
    handleAddOptions(option){
        if(!option){
            return 'Enter the valid Add option'
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'Option already Exists'
        }
        this.setState((prevState)=>{
            return {
                options:prevState.options.concat(option)
            }
        })
    }
    render(){
        const title = "Indecision",
              subtitle = "Put your life in the hands of computer..!"
        return(
            <div>
                <Header title={title} subtitle = {subtitle}/>
                <Action handlePick = {this.handlePick} 
                    hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}
                hasRemoveAll= {this.hasRemoveAll}/>
                <AddOptions handleAddOptions={this.handleAddOptions} />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.handlePick}
                disabled = {!this.props.hasOptions}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return(
            <div>
            <button onClick={this.props.hasRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option)=> <Option option={option} key={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.option}</p>
            </div>
        );
    }
}

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmitForm =this.handleSubmitForm.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleSubmitForm(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        let error =  this.props.handleAddOptions(option);
        e.target.elements.option.value = '';
        this.setState(()=>{
            return {error}
        })
    }
    render(){
        return(
            <div>
                {this.state.error}
                <form onSubmit={this.handleSubmitForm}>
                    <input type="text" name="option" placeholder="Enter your option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));