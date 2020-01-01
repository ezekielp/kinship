import React from 'react';

class CreateEditForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            user: "",
            dateOfBirth: "",
            children: [],
            siblings: [],
            pets: [],
            parents: [], 
            hobbies: [],
            currentCity: "",
            currentCityYears: "",
            pastCity: "",
            pastCityYears: "",
            undergradSchool: "",
            undergradSchoolYears: "",
            gradSchool: "",
            gradSchoolYears: "",
            employmentHistory: "",
            currentEmploymentStatus: "",
            notes: "",
            input: 0
        }
        this.inputField = this.inputField.bind(this);
        this.addField = this.addField.bind(this);
        this.field= this.field.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        } 
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        let friend = this.state
        delete friend["input"]
        this.props.action(friend)
    }



    inputField (value) {
        if (this.state[value]) {
            if (Array.isArray(this.state[value])) {
                let list = this.state[value].map((listitem, i) => {
                    return (
                        <div>
                            <label>{value}</label>
                            <input type="text" 
                                onChange={this.handleInput(value)}
                                placeholder={`${value}`} 
                                value={listitem} 
                                key={i}
                            />
                        </div>
                    )
                })
                return (
                    <div>
                        {list}
                    </div>
                )
            } else if (value === "notes") {
                return (
                    <div>
                        <label>Notes</label>
                        <textarea 
                            placeholder={`${value}`} 
                            onChange={this.handleInput(value)}
                            value={this.state[value]} 
                        />
                    </div>
                )
            }else {
                return (
                    <div>
                        <label>{value}</label>
                        <input type="text" 
                            placeholder={`${value}`} 
                            onChange={this.handleInput(value)}
                            value={this.state[value]}
                        />
                    </div>
                )
            }
        } else {
            return null;
        }
    }

    addField () {
        debugger
        this.setState({input: this.state.input + 1})
    }

    field () {
        if (this.state.input){
            let list = []

            for (let i = 0; i < this.state.input; i++){
                list.push(
                    <div key={i}>
                        <label>category</label>
                        <input type="text"
                            onChange={this.handleInput("category")} 
                            value="" 
                            key={i}/>
                    </div>
                )
            }
            return (
                list
            )
        }
    }


    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" 
                        placeholder="name" 
                        value={this.state.name} 
                        onChange={this.handleInput("name")}
                    />
                    {this.inputField("dateOfBirth")}
                    {this.inputField("children")}
                    {this.inputField("siblings")}
                    {this.inputField("pets")}
                    {this.inputField("parents")}
                    {this.inputField("hobbies")}
                    {this.inputField("currentCity")}
                    {this.inputField("currentCityYears")}
                    {this.inputField("pastCity")}
                    {this.inputField("pastCityYears")}
                    {this.inputField("undergradSchool")}
                    {this.inputField("undergradSchoolYears")}
                    {this.inputField("employmentHistory")}
                    {this.inputField("currentEmploymentStatus")}
                    {this.inputField("notes")}
                    <div>{this.field()}</div> 
                    <button onClick={this.addField}>+ Add Field</button>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </form> 
            </div>
        )
    }


}

export default CreateEditForm;