import { Link,Redirect } from "react-router-dom";
import { Button, ButtonsWrapper } from "./styles";

const InstructorProfile = ({ instructors, instructorSlug,  }) => {
  const {nameSlug} = useParams();
  const instructor = instructors.find(
    (instructor) => instructor.slug === nameSlug
  );

  const { name, emoji, github, description } = instructor;

  const goToGitHub = () => window.open(`https://github.com/${github}`);

  if (!instructor) return <Redirect to="/404"/>;

  return (
    <>
      <h1>{emoji}</h1>
      <h2>{name}</h2>
      <p>{description}</p>

      <ButtonsWrapper>
        <Link exact to="/">
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
