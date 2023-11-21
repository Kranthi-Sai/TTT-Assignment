import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";
import { Top } from "../components";
import { ProfileDetails } from "../components";
import { Post } from "../components";
export const Home = () => {
  useTitle("Profile Page");

  const card = [
    {
      id: 1,
      title: "A Changing World Order",
      intro:
        "The world is changing at a feverish pace.Friends,colleagues and everyone engaged in knowledge work are beginning to sense this, including ...",
      author: "musing",
      name: "by anujgosalia",
      date: "August 2",
      views: "156 Views",
    },
    {
      id: 2,
      title: "A Changing World Order",
      intro:
        "The world is changing at a feverish pace.Friends,colleagues and everyone engaged in knowledge work are beginning to sense this, including ...",
      author: "musing",
      name: "by anujgosalia",
      date: "August 2",
      views: "156 Views",
    },
    {
      id: 3,
      title: "A Changing World Order",
      intro:
        "The world is changing at a feverish pace.Friends,colleagues and everyone engaged in knowledge work are beginning to sense this, including ...",
      author: "musing",
      name: "by anujgosalia",
      date: "August 2",
      views: "156 Views",
    },
  ];
  const details = [
    {
      name: "Anuj Gosalia",
      Followers: 6482,
      Following: 245,
      headof: "Co-founder & CEO at Terribly Tiny Tales",
      insta: "http://www.instagram.com/anujgosalia",
      stars: 125,
      likes: 12,
      views: "57.8k",
      loves: "26.0k",
    },
  ];

  return (
    <>
      <Top />

      {details.map((details) => (
        <ProfileDetails key={details.name} details={details} />
      ))}

      <main>
        <Post />

        {card.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </main>
    </>
  );
};
