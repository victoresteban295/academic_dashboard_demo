import RemindersPageContent from "@/components/reminders/RemindersPageContent";
import { groupIds, groups, todayReminders, upcomingReminders } from "@/lib/data/reminders/student";

export const metadata = {
    title: "Reminders",
}

export const viewport = {
    themeColor: '#78a1bb'
}

const RemindersPage = () => {
    return (
        <>
            <RemindersPageContent 
                today={todayReminders} 
                upcoming={upcomingReminders}
                groupedReminders={groups}
                groupIds={groupIds}
            />
        </>
    )
}

export default RemindersPage;
