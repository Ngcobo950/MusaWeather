import React from 'react';

//creating component that is form wich will have input and button for our page
class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.myWeather}>
				<input type="text" name="city" placeholder="City" />
				<input type="text" name="country" placeholder="Country" />
				<button>Submit</button>

			</form>
        );
    }
};

export default Form;