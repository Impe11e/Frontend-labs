import React from "react"

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ulColor: null,
            liColor: null
        }

        this.handleUlClick = this.handleUlClick.bind(this)
        this.handleLiClick = this.handleLiClick.bind(this)
    }

    handleUlClick() {
        this.setState(function (prevState) {
            return { ulColor: prevState.ulColor === "own" ? "other" : "own" }
        })
    }

    handleLiClick(event) {
        event.stopPropagation()
        this.setState(function (prevState) {
            return { liColor: prevState.liColor === "own" ? "other" : "own" }
        })
    }

    render() {
        var ulClassName =
            this.state.ulColor === "own" ? "highlight-id" :
            this.state.ulColor === "other" ? "highlight-class" : ""

        var liClassName =
            this.state.liColor === "own" ? "highlight-class" :
            this.state.liColor === "other" ? "highlight-id" : ""

        return (
            <div>
                <h3>My hobbies</h3>
                <ul className={ulClassName} onClick={this.handleUlClick}>
                    <li className={liClassName} onClick={this.handleLiClick}>
                        {this.props.hobbies[0]}
                    </li>
                    {this.props.hobbies.slice(1).map(function (hobby, index) {
                        return <li key={index}>{hobby}</li>
                    })}
                </ul>

                <h3>My favourite books/movies</h3>
                <ol>
                    {this.props.movies.map(function (movie, index) {
                        return <li key={index}>{movie}</li>
                    })}
                </ol>

                <h3>My favourite city</h3>
                <p>{this.props.cityText}</p>
            </div>
        )
    }
}

export default Content