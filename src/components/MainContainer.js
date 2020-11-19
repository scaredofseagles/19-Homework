import React from "react";
import Search from './Search'

function MainContainer(props){
    return(
        <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
            <Search list={props.list}/>
            <TableDefault list={props.list}/>
        </div>
    )
}

function TableDefault(props){
    function sortList(){
        console.log('SORTING!!!!')
    }

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name <button className='filter' onClick={sortList()}><i className="fas fa-filter"></i></button></th>
                <th>Phone Number <button className='filter' onClick={sortList()}><i className="fas fa-filter"></i></button></th>
                <th>Email <button className='filter' onClick={sortList()}><i className="fas fa-filter"></i></button></th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr style={{borderTop: "2px solid gray"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.state}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}


// lists users based on serach results
function TableResult(props){
    return(
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name <button className='filter' onClick={props.sortList()}><i className="fas fa-filter"></i></button></th>
                <th>Phone Number <button className='filter' onClick={props.sortList()}><i className="fas fa-filter"></i></button></th>
                <th>Email <button className='filter' onClick={props.sortList()}><i className="fas fa-filter"></i></button></th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr style={{borderTop: "2px solid gray"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.state}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
            </table>
    )
}

export default MainContainer