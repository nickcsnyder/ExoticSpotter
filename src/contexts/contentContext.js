import React, { Component } from 'react';

const ContentContext = React.createContext({
    error: null,
    content: [],
    setError: () => { },
    clearError: () => { },
    setCar: () => { },
    clearCar: () => { },
    setContent: () => { },
    addContent: () => { }
})

export default ContentContext

export class ContentProvider extends Component {
    state = {
        error: null
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    clearError = () => {
        this.setState({ error: null })
    }
    setCar = car => {
        this.setState({ car })
    }
    setContent = content => {
        this.setState({ content })
    }
    clearCar = () => {
        this.setState([])
    }
    addContent = content => {
        this.setContents([
            ...this.state.contents,
            content
        ])
    }

    render() {
        const value = {
            car: this.state.car,
            content: this.state.contents,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setCar: this.setCar,
            clearCar: this.clearCar,
            addContent: this.addContent
        }
        return (
            <ContentContext.Provider value ={value}>
                {this.props.children}
            </ContentContext.Provider>
        )
    }
}