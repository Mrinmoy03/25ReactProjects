import React, { useState, useEffect } from 'react'

const UserProfile = () => {
    const[User, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            if(!res.ok) throw new Error('Failed to fetch')
            return res.json()  
        })
        .then((data)=>{
            setUser(data)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        })

    },[])
    if(loading) return <p>Loading user Data....</p>
    if(error) return <p>Error: {error}</p>
  return (
    <div>
        <h2>User Profile</h2>
        {User && User.map((user) => (
            <div key={user.id} style={styles.card} >
                <h3>{user.name}</h3>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
            </div>
        ))} 
    </div>
  )
}
const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '12px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  }
};

export default UserProfile