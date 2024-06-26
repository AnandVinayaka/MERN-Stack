export default function Students({studentId, studentName, studentAge, studentBloodGroup, studentBranch}){
    return(
        <>
        <li>
            Student Id={studentId}
            <br/>
            Student Name={studentName}
            <br/>
            Student Age={studentAge}
            <br/>
            Student Blood Group={studentBloodGroup}
            <br/>
            Student Branch={studentBranch}
        </li>
        </>
    )
}
