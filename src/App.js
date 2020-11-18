import React, {useState} from 'react'
import Navbar from './components/Navbar'
// import MainContainer from './MainContainer'
import Footer from './components/Footer'
import {useTable} from 'react-table'

function App(){
    // const [result, setResult] = useState({})

    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World'
            },
            {
                col1: 'react-table',
                col2: 'rocks'
            },
            {
                col1: 'whatever',
                col2: 'you-want'
            },
        ],
        []
    )
    
    const columns = React.useMemo( () =>
        [
            {
                Header: 'Image',
                accessor: 'userImage'
            },
            {
                Header: 'Name',
                accessor: 'userName'
            },
            {
                Header: 'Phone Number',
                accessor: 'userNumber'
            },
            {
                Header: 'Email',
                accesor: 'userEmail'
            },
            {
                Header: 'DOB',
                accessor: 'userDOB'
            },
        ],
        []
    )

    // const tableInstance = useTable({columns, data})

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    return(
        <>
            <Navbar />
            <table {...getTableProps()} style={{border: 'solid 1px blue'}}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column=> (
                                <th 
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        backround: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>   
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                               {row.cells.map(cell => {
                                   return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding:'10px',
                                                border:'solid 1px gray',
                                                background: "papayawhip",
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td> 
                                   )
                               })}
                            </tr>    
                        )
                    })}    
                </tbody>
            </table>
            <Footer />
        </>
    )
}

export default App