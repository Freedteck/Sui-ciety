const Stories = () => {
  const stories = [
    {
      authorName: "Freed Mb",
      storyMedia: "https://images.pexels.com/photos/4873585/pexels-photo-4873585.jpeg",
      authorImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      authorName: "John Ekwa",
      storyMedia: "https://images.pexels.com/photos/16122200/pexels-photo-16122200/free-photo-of-couple-lying-on-the-ground-and-man-playing-the-guitar.jpeg",
      authorImg: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg",
    },
    {
      authorName: "Jane christon",
      storyMedia: "https://images.pexels.com/photos/4352137/pexels-photo-4352137.jpeg",
      authorImg: "https://images.pexels.com/photos/7322232/pexels-photo-7322232.jpeg",
    },
    {
        authorName: "Freed Mb",
        storyMedia: "https://images.pexels.com/photos/4873585/pexels-photo-4873585.jpeg",
        authorImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      },
      {
        authorName: "John Ekwa",
        storyMedia: "https://images.pexels.com/photos/16122200/pexels-photo-16122200/free-photo-of-couple-lying-on-the-ground-and-man-playing-the-guitar.jpeg",
        authorImg: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg",
      },
      {
        authorName: "Jane christon",
        storyMedia: "https://images.pexels.com/photos/4352137/pexels-photo-4352137.jpeg",
        authorImg: "https://images.pexels.com/photos/7322232/pexels-photo-7322232.jpeg",
      },
  ];
  return (
    <section className="stories">
      <h2>Stories</h2>
      <div className="stories-cards">
        {stories.map((story, index)=> (
        <div className="story" key={index} style={{backgroundImage: `url(${story.storyMedia})`}}>
            <div className="story-author">
                <div className="img">
                    <img src={story.authorImg} alt="author" />
                </div>
                <p>{story.authorName}</p>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;
