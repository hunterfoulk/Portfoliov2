import React from "react";

export default function Projects() {
  const cards = [
    {
      project: "Aim-Training",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature  ",
    },
    {
      project: "Fashion-App",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature  ",
    },
    {
      project: "MovieDB",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature  ",
    },
    {
      project: "Portfolio",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature  ",
    },
    {
      project: "Hunts Coffee",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature  ",
    },
  ];
  return (
    <div className="projects-main">
      {" "}
      <div className="project-card-container">
        {cards.map((cards, i) => (
          <div className="projects-cards">
            <div className="img-placeholder"></div>
            <div className="projects-cards-text">
              <div className="h2-text">
                <h2>{cards.project}</h2>
              </div>
              <p>{cards.description}</p>
              <div className="demos">
                <span>View Demo </span>→ <span>View Sourcecode </span>→{" "}
                <span>View Images </span>→
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="comment-container">
        <Thread namespaceId={6} threadId="comments" backgroundColor="#FFFFFF" />
      </div> */}
    </div>
  );
}
