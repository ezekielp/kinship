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

    const inputField = category => {
        let inputFieldCategory = category.split("_")[0]

        if (state[category] || state[inputFieldCategory]) {
            if (inputFieldCategory === "notes" || inputFieldCategory === "employmentHistory") {
                return (
                    <div className="input-container">
                        <label htmlFor={inputFieldCategory}>{fieldLabel(inputFieldCategory) + ":"}</label>
                        <textarea
                            className="input textarea"
                            id={inputFieldCategory}
                            onChange={handleInput(inputFieldCategory)}
                            value={state[inputFieldCategory]}
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
                        <label htmlFor={inputFieldCategory}>{fieldLabel(inputFieldCategory) + ":"}</label>
                        <input type="text"
                            className="input"
                            id={inputFieldCategory}
                            placeholder={`separate input by comma`}
                            onChange={handleInput(inputFieldCategory)}
                            value={state[inputFieldCategory]}
                        />
                    </div>
                )

            } else if (inputFieldCategory === "dateOfBirth") {
                const date = (state[inputFieldCategory]) ?
                    state[inputFieldCategory].split("T")[0] :
                    "";

                return ( // Date of Birth
                    <div className="input-container">
                        <label>{fieldLabel(inputFieldCategory) + ":"}</label>
                        <input type="date"
                            className="input"
                            onChange={handleInput(inputFieldCategory)}
                            value={date}
                        />
                    </div>
                )
            } else {
                return ( // Others
                    <div className="input-container">
                        <label htmlFor={inputFieldCategory}>{fieldLabel(inputFieldCategory) + ":"}</label>
                        <input type="text"
                            className="input"
                            id={inputFieldCategory}
                            onChange={handleInput(inputFieldCategory)}
                            value={state[inputFieldCategory]}
                        />
                    </div>
                )
            }
        } else {
            return null;
        }
    }

    const showInput = category => {
        setState({ [category]: true })
    }

    const arrayFields = () => {
        const currentState = Object.assign({}, state)
        const currentStateKeys = Object.keys(currentState)

        return currentStateKeys.filter(key => currentState[key] === undefined);
    }

    return (
        <div className="add-friend-details-container">
            <form className="edit-friend-form">
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="input"
                        id="name"
                        value={state.name}
                        onChange={handleInput("name")}
                    />
                </div>
                {inputField("dateOfBirth_show")}
                {inputField("children_show")}
                {inputField("siblings_show")}
                {inputField("pets_show")}
                {inputField("parents_show")}
                {inputField("hobbies_show")}
                {inputField("currentCity_show")}
                {inputField("currentCityYears_show")}
                {inputField("pastCity_show")}
                {inputField("pastCityYears_show")}
                {inputField("undergradSchool_show")}
                {inputField("undergradSchoolYears_show")}
                {inputField("gradSchool_show")}
                {inputField("gradSchoolYears_show")}
                {inputField("currentEmploymentStatus_show")}
                {inputField("employmentHistory_show")}
                {inputField("notes_show")}

                <div className="dropdown-submit-container-wrapper">
                <div className="line"></div>
                <div className="dropdown-submit-container">
                    <Dropdown inputFields={arrayFields()} showInput={showInput} />
                    <input
                    type="submit"
                    value="Submit"
                    className="submit-button"
                    onClick={handleSubmit}
                    />
                </div>
                </div>
            </form>
        </div>
    );

}

export default AddDetailsForm;