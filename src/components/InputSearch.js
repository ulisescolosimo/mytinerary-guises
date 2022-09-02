import React from 'react'

const InputSearch = ({searchItem}) => {

    const getValue = (e) => {
        const search = e.target.value
        searchItem(upperCaseOne(search))
    }

    function upperCaseOne(search){
        return search.charAt(0).toUpperCase() + search.slice(1)
    }

return (
    <div className="form-container">
        <input className="input" onChange={getValue} placeholder="Enter city..." required="" type="text" />
        <span className="input-border"></span>
    </div>
)
}

export default InputSearch