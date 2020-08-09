import React from "react";
import s from "../Common/Paginator.module.css";



let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    //высчитывам сколько страниц у нас будет всего
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

//и в зависимости от общего числа страниц отображаем это количество на странице (в виде чисел 1,2,3...)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}

        </div>
    )
}

export default Paginator