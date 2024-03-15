import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ErrorPage = ({pageErr}) => {
const [error, setError] = useState('null')

useEffect(() => {
    setError(pageErr)
} ,[error])



return (<div>

    {error ? <h2 className="error">{error}</h2> : <h2 className="error">404 not found</h2>}
    <Link to='/'>Return to articles</Link>
    </div>
)
}


export default ErrorPage