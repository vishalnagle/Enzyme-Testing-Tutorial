import React,{useState} from 'react'

const Table = () => {

  return (
    <table className='custom-border'>
        <thead>
            <tr>
                <th>Names</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Demo</td>
                <td>vishal@test.com</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table