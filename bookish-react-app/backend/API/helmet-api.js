

const apiUrl = 'https://api.finna.fi/api/v1/'; 


async function fetchData() {
    try {

    const response = await fetch("https://api.finna.fi/api/v1/search?lookfor=colleen%20hoover&type=Author&field%5B%5D=title&field%5B%5D=images&field%5B%5D=series&field%5B%5D=languages&field%5B%5D=nonPresenterAuthors&field%5B%5D=year&sort=relevance&page=1&limit=10&prettyPrint=true&lng=en-gb")

    if (!response.ok) {
        throw new Error("Could not fetch resource")
    }

    const data = await response.json()
    const prettyData = JSON.stringify(data.records, null, 2) // opens arrays and uses pretty print with 2 space indentation
    //res.status(200).json({data})



    const gettableData = JSON.parse(prettyData)
    const title = gettableData[4].title
    const author = gettableData[4].nonPresenterAuthors[0].name
    const year = gettableData[4].year
    const image = gettableData[4].images[0]
    console.log(title, author, year, image)

    } catch (error) {
        console.error(error)
    }
}

fetchData()

