import { useState } from 'react'
import EmployeeCard from './components/EmployeeCard';
import './App.css'

const sampleEmployee = {
    name: {
        first: 'Jean',
        last: 'Dupont'
    },
    email: 'jean.dupont@example.com',
    picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg'
    }
};

function App() {
    return (
        <>
            <EmployeeCard employee={sampleEmployee} />
        </>
    );
}


export default App
