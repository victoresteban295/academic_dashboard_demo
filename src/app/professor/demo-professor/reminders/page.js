import RemindersPageContent from "@/components/reminders/RemindersPageContent";

export const metadata = {
    title: "Reminders",
    themeColor: '#78a1bb'
}

const RemindersPage = () => {
    return (
        <>
            <RemindersPageContent 
                profile="professor"
            />
        </>
    )
}

export default RemindersPage;
