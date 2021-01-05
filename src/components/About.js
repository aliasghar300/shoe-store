import React from 'react'
import {Link} from "react-router-dom";
import "../App.css"

export default function About() {
    return (
        <div style={{textAlign: "center"}}>
            <h1> About </h1>
            <p style={{fontSize: "18px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
            <p style={{fontSize: "18px"}}> Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ut placerat orci nulla pellentesque dignissim enim. Dui faucibus in ornare quam. Nunc id cursus metus aliquam eleifend mi in nulla. Mattis aliquam faucibus purus in. Massa tempor nec feugiat nisl pretium fusce id. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Leo urna molestie at elementum eu. Eget felis eget nunc lobortis mattis. Volutpat ac tincidunt vitae semper quis lectus nulla. Fringilla ut morbi tincidunt augue interdum. Aenean sed adipiscing diam donec adipiscing tristique risus. Convallis a cras semper auctor neque vitae. Massa sed elementum tempus egestas sed sed. Faucibus interdum posuere lorem ipsum dolor.</p>
            <p style={{fontSize: "18px"}}> Amet risus nullam eget felis eget nunc lobortis mattis. In hendrerit gravida rutrum quisque non tellus. Mauris vitae ultricies leo integer malesuada nunc vel risus. Luctus venenatis lectus magna fringilla. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Aliquam ut porttitor leo a diam sollicitudin tempor id. Fames ac turpis egestas integer eget aliquet. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Iaculis eu non diam phasellus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Tristique magna sit amet purus gravida. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Tristique senectus et netus et. </p>
            <Link className="btn-product" to="/"> Back to Home </Link>
        </div>
    )
}
