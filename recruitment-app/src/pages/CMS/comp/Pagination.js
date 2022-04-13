import React from 'react'

export function Pagination ({usersPerPage, totalUsers, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i<=Math.ceil(totalUsers/usersPerPage); i++) {
        pageNumbers.push(i)
        // console.log(pageNumbers)
    }
    return (
        <nav >
            <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={number} classname="pagination__item">
                        <a onClick={() => paginate(number)} className={`${pageNumbers.length == 1 ? "pagination__link single" : "pagination__link"}  ${number == 1 && pageNumbers.length != 1 ? "first":""} ${number == pageNumbers.length && pageNumbers.length != 1 ? "last": ""}`}>
                        {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}