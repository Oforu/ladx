import React from 'react'
import ReactDom from 'react-dom'

class Search extends React.Component{
    render(){
        return <div class='search-text'>Search Text<img src={ logo }/> </div>
    }
}

ReactDom.render(<Search/>,document.getElementById('root'))