"use client";
const CurrentYear=()=> {
    const year=new Date().getFullYear();
    return <span>© {year} NovaMed Group </span>;
};

export default CurrentYear;