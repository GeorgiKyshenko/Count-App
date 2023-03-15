//creating an object in JS
const person = {
    name: "Georgi Tangardzhiev",
    address: {
        city: " address: Cali,",
        street: "long 32"
    },
    profiles: ["facebook", "linkedIn", "twitter"],
    printProfiles: () => {
        person.profiles.map(
            // eslint-disable-next-line array-callback-return
            (profile) => {
                console.log(profile)
            }
        )
    }
}

function LearningJS() {
    return (
        <>
            <div>{person.name} {person.address.city} {person.address.street}</div>
            <div>{person.profiles[0]} {person.profiles[1]} {person.profiles[2]}</div>
            <div>{person.printProfiles()}</div>
        </>
    )
}

export default LearningJS