function Hobbies (props) {
    
    return <li>{props.value}</li>;
}

function HobbyList (props) {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    const listHobbies = hobbies.map((hobby) =>
        <Hobbies key={hobby} value={hobby} />
    );
    return (
    <ul>{listHobbies}</ul>
    );
}