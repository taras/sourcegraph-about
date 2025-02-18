import { FunctionComponent } from 'react'

const BOARD: {
    name: string
    image: string
    title: string
}[] = [
    {
        name: 'Sarah Wang',
        image: '/board/sarah-wang.png',
        title: 'Andreessen Horowitz',
    },
    {
        name: 'David Sacks',
        image: '/board/david-sacks.jpg',
        title: 'Craft Ventures',
    },
    {
        name: 'Adam Ross',
        image: '/board/adam-ross.jpg',
        title: 'Goldcrest Capital',
    },
    {
        name: 'Andrew Reed',
        image: '/board/andrew-reed.jpg',
        title: 'Sequoia Capital',
    },
    {
        name: 'Scott Raney',
        image: '/board/scott-raney.jpg',
        title: 'Redpoint Ventures',
    },
    {
        name: 'Brian Murray',
        image: '/board/brian-murray.jpg',
        title: 'Craft Ventures',
    },
    {
        name: 'Dan Friedland',
        image: '/board/dan-friedland.jpg',
        title: 'Goldcrest Capital',
    },
]

export const BoardSection: FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="board" className={`${className}`}>
        <h2>Board of Directors</h2>

        <div className="my-5 row">
            {BOARD.map(boardMembers => (
                <div
                    key={`${boardMembers.name.replace(' ', '-').toLowerCase()}`}
                    className="mb-6 col-lg-4 tw-flex tw-flex-col"
                >
                    <img
                        className="mb-4 max-w-200 tw-rounded-full"
                        src={boardMembers.image}
                        alt={`Sourcegraph Board of Directors: ${boardMembers.name} - ${boardMembers.title}`}
                    />
                    <h5>{boardMembers.name}</h5>
                    <p className="mb-0">{boardMembers.title}</p>
                </div>
            ))}
        </div>
    </div>
)
