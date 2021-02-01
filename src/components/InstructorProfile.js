import { Link,Redirect } from "react-router-dom";
import { Button, ButtonsWrapper } from "./styles";

const InstructorProfile = ({ instructors, instructorSlug,  }) => {
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );

  if (!instructor) {return <Redirect to ="/"/>;}

  const { name, emoji, github, description } = instructor;

  const goToGitHub = () => window.open(`https://github.com/${github}`);

  return (
    <>
      <h1>{emoji}</h1>
      <h2>{name}</h2>
      <p>{description}</p>

      <ButtonsWrapper>
        <Link to="/" >
          <Button color="tomato" textColor="white">
            Go back home
          </Button>
        </Link>
        <Button onClick={goToGitHub}>Go to GitHub</Button>
      </ButtonsWrapper>
    </>
  );
};

export default InstructorProfile;
