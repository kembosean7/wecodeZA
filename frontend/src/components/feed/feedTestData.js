let windowWidth = window.innerWidth
console.log(windowWidth)
// Button types for the topic section
export let buttonType;
if (windowWidth > 1400){
     let type1 = [
        {
        id: 1,
        name: "For you"
        },
        {
        id: 2,
        name: "JavaScript"
        },
        {
        id: 3,
        name: "Best Practices"
        },
        {
        id: 4,
        name: "Java"
        },
        {
        id: 5,
        name: "C++"
        }
    ]

    buttonType = type1
} else if( windowWidth <= 600){
    let type2 = [
        {
        id: 1,
        name: "For you"
        },
        {
        id: 2,
        name: "JavaScript"
        },
        {
        id: 3,
        name: "Best Practices"
        }
    ]

    buttonType = type2
}


export const postData = [
    {
        id: 1,
        name: "Alexander I. Agu",
        title: "How to pass the WeThinkCode bootcamp",
        content: "Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you."
    },
    {
        id: 2,
        name: "Sean Kembo",
        title: "Why backend engineering is fun!",
        content: "Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you."
    },
    {
        id: 3,
        name: "Tumi Mosia",
        title: "Best practices of JavaScript",
        content: "Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you."
    },
]


export const feedFollowData = [
    {
        id: 1,
        name: "Sean Kembo"
    },
    {
        id: 2,
        name: "Tumi Mosia"
    },
    {
        id: 3,
        name: "Tankiso Mofokeng"
    },
    {
        id: 4,
        name: "Moratoua"
    },
]