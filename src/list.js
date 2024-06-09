const LANGUAGE = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Ruby",
    "Java",
    "Kotlin",
    "Swift"
]

export const List = ({ title }) => {
    return (
        <div>
            <h4>{ title }</h4>
            {
                LANGUAGE.map((lang, index) => {
                    return <div key={index}>{ lang }</div>
                })
            }
        </div>
    )
}