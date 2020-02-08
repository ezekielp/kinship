import React, { useState, useEffect } from 'react';
import Dropdown from '../dropdown/dropdown';
import './create_edit_form.css';
import './add_details_form.css';
import CONVERTFIELDS from '../../util/convert_fields';

const AddDetailsForm = ({ friend, action }) => {
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
        // dateOfBirth_show: undefined,
        // children_show: undefined,
        // siblings_show: undefined,
        // pets_show: undefined,
        // parents_show: undefined,
        // hobbies_show: undefined,
        // currentCity_show: undefined,
        // currentCityYears_show: undefined,
        // pastCity_show: undefined,
        // pastCityYears_show: undefined,
        // undergradSchool_show: undefined,
        // undergradSchoolYears_show: undefined,
        // gradSchool_show: undefined,
        // gradSchoolYears_show: undefined,
        // employmentHistory_show: undefined,
        // currentEmploymentStatus_show: undefined,
        // notes_show: undefined,
    }
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const updatedValues = {
          dateOfBirth_show: state.dateOfBirth ? true : 1,
          children_show: state.children ? true : 1,
          siblings_show: state.siblings ? true : 1,
          pets_show: state.pets ? true : 1,
          parents_show: state.parents ? true : 1,
          hobbies_show: state.hobbies ? true : 1,
          currentCity_show: state.currentCity ? true : 1,
          currentCityYears_show: state.currentCityYears ? true : 1,
          pastCity_show: state.pastCity ? true : 1,
          pastCityYears_show: state.pastCityYears ? true : 1,
          undergradSchool_show: state.undergradSchool ? true : 1,
          undergradSchoolYears_show: state.undergradSchoolYears ? true : 1,
          gradSchool_show: state.gradSchool ? true : 1,
          gradSchoolYears_show: state.gradSchoolYears ? true : 1,
          employmentHistory_show: state.employmentHistory ? true : 1,
          currentEmploymentStatus_show: state.currentEmploymentStatus
            ? true
            : 1,
          notes_show: state.notes ? true : 1
        };
        setState(prevState => {
            return {...prevState, ...updatedValues}
            // dateOfBirth_show: state.dateOfBirth ? true : undefined,
            // children_show: state.children ? true : undefined,
            // siblings_show: state.siblings ? true : undefined,
            // pets_show: state.pets ? true : undefined,
            // parents_show: state.parents ? true : undefined,
            // hobbies_show: state.hobbies ? true : undefined,
            // currentCity_show: state.currentCity ? true : undefined,
            // currentCityYears_show: state.currentCityYears ? true : undefined,
            // pastCity_show: state.pastCity ? true : undefined,
            // pastCityYears_show: state.pastCityYears ? true : undefined,
            // undergradSchool_show: state.undergradSchool ? true : undefined,
            // undergradSchoolYears_show: state.undergradSchoolYears ? true : undefined,
            // gradSchool_show: state.gradSchool ? true : undefined,
            // gradSchoolYears_show: state.gradSchoolYears ? true : undefined,
            // employmentHistory_show: state.employmentHistory ? true : undefined,
            // currentEmploymentStatus_show: state.currentEmploymentStatus ? true : undefined,
            // notes_show: state.notes ? true : undefined
        })
    }, []);

    // debugger;
    const handleInput = type => {
        debugger;
        return (e) => {
            setState(prevState => {
                return { ...prevState, [type]: e.currentTarget.value }
            })
        }
    }

    const fieldLabel = category => {
        return CONVERTFIELDS[category]
    }

    const handleSubmit = e => {
        e.preventDefault();

        debugger;
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
        debugger;
        action(newFriendDetails);

    }

    const inputField = category => {
        let inputFieldCategory = category.split("_")[0]

        if (state[category] === 2) {
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
        setState(prevState => {
            return { ...prevState, [category]: 2 }
        })
    }

    const arrayFields = () => {
        const currentState = Object.assign({}, state)
        const currentStateKeys = Object.keys(currentState)

        // return currentStateKeys.filter(key => currentState[key] === undefined);
        return currentStateKeys.filter(key => currentState[key] === 1);
    }

    return (
        <div className="add-friend-details-container">
            <form className="edit-friend-form">
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
                <div className="new-dropdown-submit-container">
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