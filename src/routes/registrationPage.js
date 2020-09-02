import React, { Component } from 'react';
import { Section } from '../Utilities/Utilities';
import Registration from '../registration/registration';


export default class registrationPage extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return(
            <Section className='RegistrationPage'>
                <h2>Register</h2>
                <Registration
                    onRegistrationSuccess={this.handleRegistrationSuccess} />
            </Section>
        )
    }
}