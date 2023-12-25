import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
    const location = useLocation()
    return (
        <>
            <div className='nav'>
                <Link to="/" className={location.pathname === "/" ? "make--active" : "not--active"}>HOME</Link>
                <Link to="/counter" className={location.pathname === "/counter" ? "make--active" : "not--active"}>COUNTER</Link>
                <Link to="/feedback" className={location.pathname === "/feedback" ? "make--active" : "not--active"}>FEEDBACK</Link>
                <Link to="/more-input" className={location.pathname === "/more-input" ? "make--active" : "not--active"}>MORE-INPUT-FORM</Link>
                <Link to="/registration" className={location.pathname === "/registration" ? "make--active" : "not--active"}>REGISTRATION-FORM</Link>
                <Link to="/complete-form" className={location.pathname === "/complete-form" ? "make--active" : "not--active"}>COMPLETE FORM</Link>
                <Link to="/sign-up" className={location.pathname === "/sign-up" ? "make--active" : "not--active"}>SIGN UP</Link>
                <Link to="/use-state" className={location.pathname === "/use-state" ? "make--active" : "not--active"}>USE-STATE</Link>
                <Link to="/data-fetch" className={location.pathname === "/data-fetch" ? "make--active" : "not--active"}>DATA-FETCH</Link>
                <Link to="/news-api" className={location.pathname === "/news-api" ? "make--active" : "not--active"}>NEWS</Link>
                <Link to="/reducer1" className={location.pathname === "/reducer1" ? "make--active" : "not--active"}>USE-REDUCER1</Link>
                <Link to="/reducer2" className={location.pathname === "/reducer2" ? "make--active" : "not--active"}>USE-REDUCER2</Link>
                <Link to="/reducer3" className={location.pathname === "/reducer3" ? "make--active" : "not--active"}>USE-REDUCER3</Link>
                <Link to="/mytodo" className={location.pathname === "/mytodo" ? "make--active" : "not--active"}>MY-TODO</Link>
                <Link to="/task-app" className={location.pathname === "/task-app" ? "make--active" : "not--active"}>NOTE-APP</Link>
                <Link to="/food-food" className={location.pathname === "/food-food" ? "make--active" : "not--active"}>Food List</Link>

            </div>
        </>

    )
}
