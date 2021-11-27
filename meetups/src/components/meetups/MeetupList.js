import MeetupItem from "./MeetupItem";


export default function MeetupList(props) {
  const meetups =props.meetups
  return (
    <ul>
      

      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    
    </ul>
  );
}
