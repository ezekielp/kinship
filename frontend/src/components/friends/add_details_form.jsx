import React, { useState, useEffect } from 'react';
import Dropdown from '../dropdown/dropdown';
import './create_edit_form.css';
import CONVERTFIELDS from '../../util/convert_fields';

const AddDetailsForm = ({ friend, action, userId }) => {
    const initialState = {
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
    }
    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState({
            dateOfBirth_show: state.dateOfBirth ? true : undefined,
            children_show: state.children ? true : undefined,
            siblings_show: state.siblings ? true : undefined,
            pets_show: state.pets ? true : undefined,
            parents_show: state.parents ? true : undefined,
            hobbies_show: state.hobbies ? true : undefined,
            currentCity_show: state.currentCity ? true : undefined,
            currentCityYears_show: state.currentCityYears ? true : undefined,
            pastCity_show: state.pastCity ? true : undefined,
            pastCityYears_show: state.pastCityYears ? true : undefined,
            undergradSchool_show: state.undergradSchool ? true : undefined,
            undergradSchoolYears_show: state.undergradSchoolYears ? true : undefined,
            gradSchool_show: state.gradSchool ? true : undefined,
            gradSchoolYears_show: state.gradSchoolYears ? true : undefined,
            employmentHistory_show: state.employmentHistory ? true : undefined,
            currentEmploymentStatus_show: state.currentEmploymentStatus ? true : undefined,
            notes_show: state.notes ? true : undefined
        })
    }, []);

    const handleInput = type => {
        return (e) => {
            setState({ [type]: e.currentTarget.value })
        }
    }

    const fieldLabel = category => {
        return CONVERTFIELDS[category]
    }

    const handleSubmit = e => {
        e.preventDefault();

        const newFriendDetails = {
            _id: state._id,
            name: state.name,
            user: state.user,
            dateOfBirth: state.dateOfBirth,
            children: state.children.split(","),
            siblings: state.siblings.split(","),
            pets: state.pets.split(","),
            parents: state.parents.split(","),
            hobbies: state.hobbies.split(","),
            currentCity: state.currentCity,
            currentCityYears: state.currentCityYears,
            pastCity: state.pastCity,
            pastCityYears: state.pastCityYears,
            undergradSchool: state.undergradSchool,
            undergradSchoolYears: state.undergradSchoolYears,
            gradSchool: state.gradSchool,
            gradSchoolYears: state.gradSchoolYears,
            employmentHistory: state.employmentHistory,
            currentEmploymentStatus: state.currentEmploymentStatus,
            notes: state.notes,
        }
        action(newFriendDetails)

    }




}

export default AddDetailsForm;

class CreateEditForm extends React.Component {

    inputField(category) {
        let inputFieldCategory = category.split("_")[0]

        if (this.state[category] || this.state[inputFieldCategory]) {
            if (inputFieldCategory === "notes" || inputFieldCategory === "employmentHistory") {
                return (
                    <div className="input-container">
                        <label htmlFor={inputFieldCategory}>{this.fieldLabel(inputFieldCategory) + ":"}</label>
                        <textarea
                            className="input textarea"
                            id={inputFieldCategory}
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
                        <label htmlFor={inputFieldCategory}>{this.fieldLabel(inputFieldCategory) + ":"}</label>
                        <input type="text"
                            className="input"
                            id={inputFieldCategory}
                            placeholder={`separate input by comma`}
                            onChange={this.handleInput(inputFieldCategory)}
                            value={this.state[inputFieldCategory]}
                        />
                    </div>
                )

            } else if (inputFieldCategory === "dateOfBirth") {
                const date = (this.state[inputFieldCategory]) ?
                    this.state[inputFieldCategory].split("T")[0] :
                    "";

                return ( // Date of Birth
                    <div className="input-container">
                        <label>{this.fieldLabel(inputFieldCategory) + ":"}</label>
                        <input type="date"
                            className="input"
                            onChange={this.handleInput(inputFieldCategory)}
                            value={date}
                        />
                    </div>
                )
            } else {
                return ( // Others
                    <div className="input-container">
                        <label htmlFor={inputFieldCategory}>{this.fieldLabel(inputFieldCategory) + ":"}</label>
                        <input type="text"
                            className="input"
                            id={inputFieldCategory}
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

    showInput(category) {
        this.setState({ [category]: true })
    }

    arrayFields() {
        const currentState = Object.assign({}, this.state)
        const array = Object.keys(currentState)

        return array.filter(ele => currentState[ele] === undefined);
    }

    render() {
        return (
            <div className="create-friend-container">
                <form className="create-edit-form">
                    <div className="input-container">
                        <label htmlFor="name">Name:</label>
                        <input type="text"
                            className="input"
                            id="name"
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
                    {this.inputField("gradSchool_show")}
                    {this.inputField("gradSchoolYears_show")}
                    {this.inputField("currentEmploymentStatus_show")}
                    {this.inputField("employmentHistory_show")}
                    {this.inputField("notes_show")}

                    <div className="dropdown-submit-container-wrapper">
                        <div className="line"></div>
                        <div className="dropdown-submit-container">
                            <Dropdown arr={this.arrayFields()} cb={this.showInput} />
                            <input type="submit"
                                value="Submit"
                                className="submit-button"
                                onClick={this.handleSubmit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }


}

export default CreateEditForm;