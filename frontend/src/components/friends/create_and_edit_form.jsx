import React from 'react';
import Dropdown from '../dropdown/dropdown';
import './create_edit_form.css';

class CreateEditForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            _id: "",
            name: "",
            user: "",
            dateOfBirth: "",
            // children: [],
            // siblings: [],
            // pets: [],
            // parents: [], 
            // hobbies: [],
            children: "",
            siblings: "",
            pets: "",
            parents: "",
            hobbies: "",
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
            dateOfBirth_show: undefined,
            children_show: undefined,
            siblings_show: undefined,
            pets_show: undefined,
            parents_show: undefined,
            hobbies_show: undefined,
            currentCity_show: undefined,
            currentCityYears_show: undefined,
            pastCity_show: undefined,
            pastCityYears_show: undefined,
            undergradSchool_show: undefined,
            undergradSchoolYears_show: undefined,
            gradSchool_show: undefined,
            gradSchoolYears_show: undefined,
            employmentHistory_show: undefined,
            currentEmploymentStatus_show: undefined,
            notes_show: undefined,
            // input: 0
        }
        this.inputField = this.inputField.bind(this);
        // this.addField = this.addField.bind(this);
        // this.field= this.field.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showInput = this.showInput.bind(this);
    }

    componentDidMount() {
        const {friend} = this.props;
        if (this.props.formType === "Update") {
            this.setState({
                _id: friend._id,
                name: friend.name,
                user: friend.user,
                dateOfBirth: friend.dateOfBirth,
                children: friend.children.join(","),
                siblings: friend.siblings.join(","),
                pets: friend.pets.join(","),
                parents: friend.parents.join(","),
                hobbies: friend.hobbies.join(","),
                currentCity: friend.currentCity,
                currentCityYears: friend.currentCityYears,
                pastCity: friend.pastCity,
                pastCityYears: friend.pastCityYears,
                undergradSchool: friend.undergradSchool,
                undergradSchoolYears: friend.undergradSchoolYears,
                gradSchool: friend.gradSchool,
                gradSchoolYears: friend.gradSchoolYears,
                employmentHistory: friend.employmentHistory,
                currentEmploymentStatus: friend.currentEmploymentStatus,
                notes: friend.notes,
                // input: 0,
            }, () => this.setState({
                dateOfBirth_show: this.state.dateOfBirth ? true : undefined,
                children_show: this.state.children_show ? true : undefined,
                siblings_show: this.state.siblings_show ? true : undefined,
                pets_show: this.state.pets_show ? true : undefined,
                parents_show: this.state.parents_show ? true : undefined,
                hobbies_show: this.state.hobbies_show ? true : undefined,
                currentCity_show: this.state.currentCity_show ? true : undefined,
                currentCityYears_show: this.state.currentCityYears_show ? true : undefined,
                pastCity_show: this.state.pastCity_show ? true : undefined,
                pastCityYears_show: this.state.pastCityYears_show ? true : undefined,
                undergradSchool_show: this.state.undergradSchool_show ? true : undefined,
                undergradSchoolYears_show: this.state.undergradSchoolYears_show ? true : undefined,
                gradSchool_show: this.state.gradSchool_show ? true : undefined,
                gradSchoolYears_show: this.state.gradSchoolYears_show ? true : undefined,
                employmentHistory_show: this.state.employmentHistory_show ? true : undefined,
                currentEmploymentStatus_show: this.state.currentEmploymentStatus_show ? true : undefined,
                notes_show: this.state.notes_show ? true : undefined
            }) )

            // let newState = this.props.friend
            // newState["input"] = 0
        //     newState["children"] = newState["children"].join(",")
        //     newState["siblings"] = newState["siblings"].join(",")
        //     newState["pets"] = newState["pets"].join(",")
        //     newState["parents"] = newState["parents"].join(",")
        //     newState["hobbies"] = newState["hobbies"].join(",")
        //     this.setState(newState)
        }
    }



    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        } 
    }



    fieldLabel (category) {
        switch (category) {
            case "name":
                return "Name:"
            case "dateOfBirth":
                return "Birthday:"
            case "children":
                return "Children:"
            case "siblings":
                return "Siblings:"
            case "pets":
                return "Pets:"
            case "parents":
                return "Parents:"
            case "hobbies":
                return "Hobbies:"
            case "currentCity":
                return "Current City:"
            case "currentCityYears":
                return "Years at Residence:"
            case "pastCity":
                return "Previous Residence:"
            case "pastCityYears":
                return "Previous Residence Years:"
            case "undergradSchool":
                return "Undergrad:"
            case "undergradSchoolYears":
                return "Undergrad Years:"
            case "gradSchool":
                return "Grad School:"
            case "gradSchoolYears":
                return "Grad School Years:"
            case "employmentHistory":
                return "Employment History:"
            case "currentEmploymentStatus":
                return "Employment Status:"
            case "notes":
                return "Notes:"
            default:
                return category
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let friend = {
            _id: this.state._id,
            name: this.state.name,
            user: this.state.user,
            dateOfBirth: this.state.dateOfBirth,
            children: this.state.children.split(","),
            siblings: this.state.siblings.split(","),
            pets: this.state.pets.split(","),
            parents: this.state.parents.split(","),
            hobbies: this.state.hobbies.split(","),
            currentCity: this.state.currentCity,
            currentCityYears: this.state.currentCityYears,
            pastCity: this.state.pastCity,
            pastCityYears: this.state.pastCityYears,
            undergradSchool: this.state.undergradSchool,
            undergradSchoolYears: this.state.undergradSchoolYears,
            gradSchool: this.state.gradSchool,
            gradSchoolYears: this.state.gradSchoolYears,
            employmentHistory: this.state.employmentHistory,
            currentEmploymentStatus: this.state.currentEmploymentStatus,
            notes: this.state.notes,
        }
        if (this.props.formType === "Update"){
            this.props.action(friend)
        } else {
            delete friend["_id"]
            friend["user"] = this.props.userId
            this.props.action(friend)
        }
    }

    // returnListItems(category) {
    //     let list = this.state[category].map((listitem, i) => {
    //         return (
    //             <div key={i}>
    //                 <label>{category}</label>
    //                 <input type="text"
    //                     onChange={this.handleInput(category)}
    //                     placeholder={`${category}`}
    //                     value={listitem}
    //                     key={i}
    //                 />
    //             </div>
    //         )
    //     })
    //     return (
    //         <div>
    //             {list}
    //         </div>
    //     )
    // }



    inputField (category) {
        let inputFieldCategory = category.split("_")[0]

        if (this.state[category] || this.state[inputFieldCategory]) {
            // if (Array.isArray(this.state[inputFieldCategory])) {
            //     return this.returnListItems(inputFieldCategory)
            if (inputFieldCategory === "notes" || inputFieldCategory === "employmentHistory"  ) {
            // } else if (inputFieldCategory === "notes") {
                return (
                    <div className="input-container">
                        <label>{this.fieldLabel(inputFieldCategory)}</label>
                        <textarea 
                            className="input"
                            onChange={this.handleInput(inputFieldCategory)}
                            value={this.state[inputFieldCategory]} 
                        />
                    </div>
                )
            } else if (
                inputFieldCategory === "children" ||
                inputFieldCategory === "pets" ||
                inputFieldCategory === "siblings" ||
                inputFieldCategory === "parents" ||
                inputFieldCategory === "hobbies"
            ) {
                return (
                    <div className="input-container">
                        <label>{this.fieldLabel(inputFieldCategory)}</label>
                        <input type="text"
                            className="input"
                            placeholder={`separate input by comma`}
                            onChange={this.handleInput(inputFieldCategory)}
                            value={this.state[inputFieldCategory]}
                        />
                    </div>
                )

            } else if (inputFieldCategory === "dateOfBirth") {
                const date = this.state[inputFieldCategory].split("T")[0]
                return (
                    <div className="input-container">
                        <label>{this.fieldLabel(inputFieldCategory)}</label>
                        <input type="text"
                            className="input"
                            onChange={this.handleInput(inputFieldCategory)}
                            value={date}
                        />
                    </div>
                )
            } else {
                return (
                    <div className="input-container">
                        <label>{this.fieldLabel(inputFieldCategory)}</label>
                        <input type="text" 
                            className="input"
                            onChange={this.handleInput(inputFieldCategory)}
                            value={this.state[inputFieldCategory]}
                        />
                    </div>
                )
            }
        } else {
            return null;
        }
    }

    // addField () {
    //     this.setState({input: this.state.input + 1})
    // }

    // field () {
    //     if (this.state.input){
    //         let list = []

    //         for (let i = 0; i < this.state.input; i++){
    //             list.push(
    //                 <div key={i}>
    //                     <label>category</label>
    //                     <input type="text"
    //                         onChange={this.handleInput("category")} 
    //                         value="" 
    //                         key={i}/>
    //                 </div>
    //             )
    //         }
    //         return (
    //             list
    //         )
    //     }
    // }

    showInput(category) {
        this.setState({[category]: true})
    }

    arrayFields () {
        const currentState = Object.assign({}, this.state)
        const array = Object.keys(currentState)

        return array.filter(ele => currentState[ele] === undefined);
    }

    


    render() {
        return (
            <div className="create-friend-container">
                <form className="create-edit-form">
                    <div className="input-container">
                        <label>Name:</label>
                        <input type="text" 
                            className="input"
                            value={this.state.name} 
                            onChange={this.handleInput("name")}
                        />
                    </div>
                    {this.inputField("dateOfBirth_show")}
                    {this.inputField("children_show")}
                    {this.inputField("siblings_show")}
                    {this.inputField("pets_show")}
                    {this.inputField("parents_show")}
                    {this.inputField("hobbies_show")}
                    {this.inputField("currentCity_show")}
                    {this.inputField("currentCityYears_show")}
                    {this.inputField("pastCity_show")}
                    {this.inputField("pastCityYears_show")}
                    {this.inputField("undergradSchool_show")}
                    {this.inputField("undergradSchoolYears_show")}
                    {this.inputField("currentEmploymentStatus_show")}
                    {this.inputField("employmentHistory_show")}
                    {this.inputField("notes_show")}
                    {/* <div>{this.field()}</div> 
                    <button onClick={this.addField}>+ Add Field</button> */}
                    <div className="dropdown-submit-container">
                        <Dropdown arr={this.arrayFields()} cb={this.showInput} />
                        <input type="submit" 
                            value="Submit" 
                            className="submit-button"
                            onClick={this.handleSubmit}
                        />
                    </div>
                </form> 
            </div>
        )
    }


}

export default CreateEditForm;