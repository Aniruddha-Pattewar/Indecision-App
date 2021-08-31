import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option) }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        // alert(this.state.options[randomNum]);
        this.setState(() => {
            return { selectedOption: this.state.options[randomNum] }
        })
    };
    handleAddOptions = (option) => {
        if (!option) {
            return 'Enter the valid add option'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exist'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };
    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json)
        if (options) {
            this.setState(() => ({ options }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = 'Put Your Life in the hands of computer..!';
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOptions={this.handleAddOptions} />
                    </div>

                </div>

                <OptionModal selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}