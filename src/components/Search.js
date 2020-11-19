import React, {useState} from 'react'

function Search(props){
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    
    function getSearchResults(){
        console.log('Searching for:', search)
        const foundUser = props.list.find(user => user.name.first === search || user.name.last === search )
        console.log(foundUser)
        setResults(foundUser)
    }

    function handleInputChange(event){
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        getSearchResults()
    }

    return (
        <div className="input-group mb-3 float-center">
            <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Search Employee" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
        </div>
    )
}

export default Search