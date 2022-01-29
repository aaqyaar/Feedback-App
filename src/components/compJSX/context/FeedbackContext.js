import React, {createContext, useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext();
export const FeedbackProvider = ({children}) => {

  // add feedback
 
  // DELETE FEEDBACK
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback')) {
    await fetch(`http://localhost:5000/feedback/${id}`, {method: 'DELETE'});
      setFeedback(feedback.filter((item) => item.id !== id));

    }
  }
  
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }
  // add feedback
  const addFeedback = async (newFeedback) => { 

    const response = await fetch(`http://localhost:5000/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newFeedback)
    });
    const data = await response.json();
    setFeedback([data, ...feedback])
  }
  // edit feedback
  const [feedbackEdit, setFeedbackEdit] = useState(
    {
      item:{},
      edit: false,
    }
    );


    const updateFeedback = async(id, updItem) => {
      const response = await fetch(`http://localhost:5000/feedback`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(updItem)
      })
      const data = await response.json();
      setFeedback(feedback.map(item => item.id === id ? {...item, ...data} : item))
    }
  // update feedback
  const editFeedback = (item) => {
    setFeedbackEdit(
    {
      item,
      edit: true,
    }
    )
  }

 
  return (
      <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        isLoading,
        updateFeedback
      }}>
          {children}
      </FeedbackContext.Provider>
  )
}

export default FeedbackContext;
