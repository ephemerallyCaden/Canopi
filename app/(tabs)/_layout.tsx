import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
    <Tabs>
        <Tabs.Screen
        name="forest"
        options={{
            headerTitle: "",
            title: "Forest"
        }}
        />
        <Tabs.Screen
        name="index"
        options={{
            headerTitle: "",
            title: "Habits",
        }}
        />
        <Tabs.Screen
        name="social"
        options={{
            headerTitle: "",
            title: "Social",
        }}
        />

    </Tabs>
    );
};

export default TabsLayout;