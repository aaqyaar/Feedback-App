import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'

function Posts() {
  const navigate = useNavigate();
  
    const status = 200;
    const onClick = () => {
      navigate('/about')
    }
    if (status == 404) {
     return (
      <> 
      <Navigate to='/notfound'/>
      <h1>404 Page Not Found</h1>
      </>
      )
    }
    return (
        <>
      
        <h1>Posts</h1>
        <button onClick={onClick}>Click Here</button>
      <Routes>
        <Route path='/show' element={<h1>Hello Show</h1>}/>
      </Routes>
      </>
  )
}

export default Posts;
