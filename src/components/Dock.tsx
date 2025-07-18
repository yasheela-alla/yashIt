import React from 'react'

const Dock = () => {
    const icons = [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
            alt: 'VS Code Icon',
        },
        {
            src: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/brave-browser-icon.png',
            alt: 'Brave Browser Icon',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png',
            alt: 'Git Icon',
        },
        {
            src: 'https://img.icons8.com/?size=512&id=iGqse5s20iex&format=png',
            alt: 'Another Icon',
        },
        {
            src: 'https://miro.medium.com/v2/resize:fit:552/1*5J7PQMf9-Ht4P10rV1_lFw.png',
            alt: 'Custom Icon',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
            alt: 'Spotify Icon',
        },
    ]

    return (
        <div className="px-5 lg:px-2 py-2 mt-3 md:mt-0 space-x-2 lg:space-x-0 lg:py-8 rounded-2xl md:rounded-3xl border border-zinc-700/50 w-auto lg:w-20 space-y-0 lg:space-y-2 inline-flex flex-row lg:flex-col items-center">
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="inline-block p-2 icon rounded-md"
                >
                    <img src={icon.src} className="w-5 h-5 md:w-8 md:h-8" alt={icon.alt} />
                </div>
            ))}
        </div>
    )
}

export default Dock
