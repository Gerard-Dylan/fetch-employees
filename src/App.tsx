import { useState } from 'react'
import EmployeeCard from './components/EmployeeCard';
import './App.css'

const sampleEmployee = {
    name: {
        first: '',
        last: ''
    },
    email: '',
    picture: {
        medium: ''
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
