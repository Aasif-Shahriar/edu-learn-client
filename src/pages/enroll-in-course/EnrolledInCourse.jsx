import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const EnrolledInCourse = () => {
    const {id} = useParams()
    console.log(id);

    const {user} =useAuth()
    console.log(user);
    return (
        <div>
            <h2 className="text-4xl">Enrolled for this course: {id}</h2>
        </div>
    );
};

export default EnrolledInCourse;