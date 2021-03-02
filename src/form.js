import React from "react";

const Form = () => {

    return (
        <div>
            <form onSubmit={this.addItem}>
                <input placeholder="Enter Ingredient"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form