// import React from "react";
// import Hello from "./components/Hello"
// import Mycar from "./components/Mycar"
// import Counter from "./components/Counter";
// import Timer from "./components/Timer";
// import Forms from "./components/Forms";
// import {Routes, Route} from "react-router-dom"
// import Navbar from "./components/Navbar";


// function App() {
//     return (
        
//        <div>
//            <Navbar />
//         <Routes>
//             <Route path='/' element={<Hello title="Abdi Zamed"/>}>Home</Route>
//             <Route path='/counter' element={<Counter />}>Counter</Route>
//             <Route path='/forms' element={<Forms />}>Forms</Route>
//             <Route path='/mycar' element={<Mycar />}>Mycar</Route>
//             <Route path='/timer' element={<Timer />}>Timer</Route>
//         </Routes>
//         </div>
//     )
// }

// export default App;

// import React from 'react';

// const App = () => {
//   return React.createElement('div', {className: 'container'}, React.createElement('h1', {style:{color:'lightblue', fontFamily:'Verdana'}}, 'My App'));
// };

// export default App;

// import React from 'react';

// const App = () => {
//     const title = 'Blog Post';
//     const post = 'This is a post';
//     const comments = [
//         {id: 1, title: 'feedback', text:'Comment one'},
//         {id: 2, title: 'feedback', text:'Comment Two'},
//         {id: 3, title: 'feedback', text:'Comment Three'}
//     ]
//     const loading = true
//     if (loading) return <h1>loading..........</h1>
//     const showLength = true;
//     return ( 
//         <div>
//             <h1>{title}</h1>
//             <p>{post}</p>
//             <div className="comments">
//             <strong>Comments ({showLength && comments.length})</strong>
//             </div>
//         </div>
//     )
// };

// export default App;
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'

import React, {useState} from 'react';
import Header from './components/compJSX/Header'

import FeedbackList from './components/compJSX/FeedbackList';
import FeedbackStats from './components/compJSX/FeedbackStats';
import Form from './components/compJSX/Form';
import AboutPage from './components/compJSX/AboutPage';
import AboutIconLink from './components/compJSX/AboutIconLink';

import Posts from './components/compJSX/Posts';
import { FeedbackProvider } from './components/compJSX/context/FeedbackContext';

const App = () => {

    
    
   
    

    return (
        <FeedbackProvider>
       
            <Header />
        <div className='container'>
            <Router>
            <Routes>
                <Route path='/' element={
                    <>
                    <Form />
                    <FeedbackStats />
                    <FeedbackList />
                    </>
                }/>
            
            </Routes>
            <Routes>
            <Route path='/about' element={<AboutPage />} />
            </Routes>
            <AboutIconLink  />
            {/* <Card>
                <NavLink to='/' activeClassName='active'>Home</NavLink>
                <NavLink to='/about' activeClassName='active'>About</NavLink>
            </Card> */}
            <Routes>
                <Route path='/posts/*' element={<Posts />}/>
            </Routes>
            </Router>

            
        </div>
        
       
        </FeedbackProvider>
     
        )
};

export default App;
