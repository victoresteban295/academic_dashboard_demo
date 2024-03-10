import StudCoursePage from "@/components/course/student/StudCoursePage";

const StudentCoursePage = ({ params }) => {

    //Which Course to query
    const course = params.course;

    return (
        <StudCoursePage
            crs={course}
        />
    )
} 

export default StudentCoursePage;
