import ChecklistPageContent from "@/components/checklist/ChecklistPageContent";
import { allChecklists, checklists, grouplists, listIds } from "@/lib/data/checklist/student";
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Checklist",
}

export const viewport = {
    themeColor: '#78a1bb'
}

const StudChecklistPage = () => {
    const cookieStore = cookies();
    const { value: username } = cookieStore.get('username');
    const { value: role } = cookieStore.get('role');

    const isStudent = (username === 'demo-student') && (role === 'STUDENT');
    if(!isStudent) {
        notFound(); 
    }

    return (
        <>
            <ChecklistPageContent
                username="demo-student"
                allChecklists={allChecklists}
                lists={checklists}
                grouplists={grouplists}
                listIds={listIds}
            />
        </>
    )
}

export default StudChecklistPage;
