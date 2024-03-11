import StudCoursePage from "@/components/course/student/StudCoursePage";
import { getTitle } from "@/lib/data/course/student";

export async function generateMetadata({ params }) {

    const title = getTitle(params.course);

    return {
        title: title,
        themeColor: '#78a1bb'
    }
}

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
