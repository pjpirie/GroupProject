import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {Users} from './comp/Users';
import {Pagination} from './comp/Pagination';
import './CMS.scss';

const colorArray = ['#6FB7AE','#8FB4AF','#6FB787','#8FB491','#986FB7','#998FB4'];


function CMSPage(props) {
    
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);
    const [textLength, setTextLength] = useState(window.innerWidth / 100);

    const fetchUsers = async () => {
        setLoading(true);
        // await fetch('https://jsonplaceholder.typicode.com/posts', {
        await fetch('https://rsdp-backend.herokuapp.com/user', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setUsers(json)
            setSearchedUsers(json)
            setLoading(false)
        })
        .catch(error=>console.log(error))
    }

    useEffect(()=>{
        fetchUsers();
    }, [])

    const handleTextSize = () => {
        if(textLength !== (window.innerWidth / 100)){
            setTextLength(window.innerWidth / 100);
        }
    }

    window.addEventListener('resize', handleTextSize )
    

    const changeAccess= async (currentAccess) => {
        console.log("Change Access Clicked")
        await fetch('https://rsdp-backend.herokuapp.com/CMS', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(currentAccess),
        })
        .then(fetchUsers());
        
    }

    const getRandomColor = () => {
        return colorArray[Math.floor(Math.random() * 5)];
    };

    const handleSearchChange = (evt) => {
        setSearchedUsers(users)
        const searchUsers = users.filter( (user) => {
            // console.log();
            return  user.firstName.toLowerCase().includes(evt.target.value.toLowerCase()) ||
                    user.lastName.toLowerCase().includes(evt.target.value.toLowerCase())  ||
                    user.email.toLowerCase().includes(evt.target.value.toLowerCase());
        })
        setSearchedUsers(searchUsers)
    }

    
    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    let currentUsers = searchedUsers.slice(indexOfFirstUser, indexOfLastUser);
    
    
    const checker = useSelector(state => state.getAccount).user.auth;
    if(!checker) return <Redirect to='/'/>
    //  Change page
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="cmsPage">
            <div className="cmsPage__header">
                <h1>Content Management Page</h1>
                <input type="text" className="cmsPage__header__search" onChange={handleSearchChange}/>
            </div>
            <div className="cmsPage__userPanel">
                <Users users={currentUsers} loading={loading} changeAccess={changeAccess} textLength={textLength}/>
                <Pagination usersPerPage={usersPerPage} totalUsers={searchedUsers.length} paginate={paginate}/>
            </div>
        </div>
    )  
}
export default CMSPage